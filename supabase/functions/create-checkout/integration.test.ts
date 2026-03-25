/**
 * E2E integration tests — hit the real Stripe test API.
 *
 * Requires:
 *   STRIPE_SECRET_KEY=sk_test_... (a Stripe test mode secret key)
 *
 * Run with:
 *   STRIPE_SECRET_KEY=sk_test_... deno test --allow-env --allow-net \
 *     supabase/functions/create-checkout/integration.test.ts
 *
 * These tests create real checkout sessions in Stripe test mode (no charges).
 * Sessions can be inspected at https://dashboard.stripe.com/test/checkout/sessions
 */
import {
  assert,
  assertEquals,
  assertExists,
  assertStringIncludes,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import Stripe from "https://esm.sh/stripe@14?target=deno";
import { createHandler, FOUNDING_PRICES, LAUNCH_DATE_UNIX } from "./index.ts";

const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");

if (!STRIPE_SECRET_KEY) {
  console.warn(
    "⚠  STRIPE_SECRET_KEY not set — skipping integration tests.\n" +
    "   Set STRIPE_SECRET_KEY=sk_test_... to run them."
  );
  Deno.exit(0);
}

if (!STRIPE_SECRET_KEY.startsWith("sk_test_")) {
  console.error("❌  STRIPE_SECRET_KEY must be a test key (sk_test_...). Refusing to run against live mode.");
  Deno.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
const handler = createHandler(stripe);

function makeRequest(body: unknown, origin = "https://renaesthetic.com") {
  return new Request("https://fn.supabase.co/functions/v1/create-checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "origin": origin,
    },
    body: JSON.stringify(body),
  });
}

// ---------------------------------------------------------------------------
// Helper: verify a session ID is real in Stripe
// ---------------------------------------------------------------------------
async function fetchSession(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["subscription"],
  });
}

// ---------------------------------------------------------------------------
// Happy paths — real Stripe sessions
// ---------------------------------------------------------------------------

for (const planKey of ["silver", "gold", "annual"] as const) {
  Deno.test({
    name: `[integration] ${planKey}: creates a real Stripe checkout session`,
    async fn() {
      const res = await handler(makeRequest({ plan: planKey }));
      const body = await res.json();

      assertEquals(res.status, 200, `Unexpected error: ${JSON.stringify(body)}`);
      assertExists(body.url, "Response should have a checkout URL");
      assertExists(body.sessionId, "Response should have a session ID");

      assertStringIncludes(body.url, "checkout.stripe.com");
      assert(body.sessionId.startsWith("cs_test_"), "Session ID should be a test session");
    },
  });

  Deno.test({
    name: `[integration] ${planKey}: session has correct metadata and price`,
    async fn() {
      const res = await handler(makeRequest({ plan: planKey }));
      const { sessionId } = await res.json();

      const session = await fetchSession(sessionId);

      assertEquals(session.mode, "subscription");
      assertEquals(session.metadata?.plan, planKey);
      assertEquals(session.metadata?.founding_member, "true");
      assertEquals(session.payment_method_collection, "always");

      // Verify the correct founding price is attached
      const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
      assertEquals(lineItems.data[0].price?.id, FOUNDING_PRICES[planKey].priceId);
    },
  });
}

Deno.test({
  name: "[integration] session has trial_end set to launch date (April 8 2026)",
  async fn() {
    const res = await handler(makeRequest({ plan: "gold" }));
    const { sessionId } = await res.json();

    const session = await fetchSession(sessionId);
    const sub = session.subscription as Stripe.Subscription;

    assertExists(sub, "Session should have a subscription");
    assertEquals(sub.trial_end, LAUNCH_DATE_UNIX);
  },
});

Deno.test({
  name: "[integration] success_url uses origin with preorder=success params",
  async fn() {
    const res = await handler(makeRequest({ plan: "silver" }, "https://renaesthetic.com"));
    const { sessionId } = await res.json();

    const session = await fetchSession(sessionId);

    assertStringIncludes(session.success_url!, "preorder=success");
    assertStringIncludes(session.success_url!, "plan=silver");
  },
});

Deno.test({
  name: "[integration] cancel_url points to #pricing",
  async fn() {
    const res = await handler(makeRequest({ plan: "gold" }, "https://renaesthetic.com"));
    const { sessionId } = await res.json();

    const session = await fetchSession(sessionId);
    assertStringIncludes(session.cancel_url!, "#pricing");
  },
});

// ---------------------------------------------------------------------------
// Non-happy paths
// ---------------------------------------------------------------------------

Deno.test({
  name: "[integration] invalid plan returns 400 without hitting Stripe",
  async fn() {
    const res = await handler(makeRequest({ plan: "diamond" }));
    const body = await res.json();

    assertEquals(res.status, 400);
    assertStringIncludes(body.error, "Invalid plan");
  },
});
