/**
 * Edge function unit tests — run with:
 *   deno test --allow-env supabase/functions/create-checkout/index.test.ts
 */
import {
  assertEquals,
  assertStringIncludes,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { createHandler, FOUNDING_PRICES, LAUNCH_DATE_UNIX } from "./index.ts";

// ---------------------------------------------------------------------------
// Stripe mock factory
// ---------------------------------------------------------------------------

type SessionCreateArgs = Parameters<
  ReturnType<typeof buildStripeMock>["checkout"]["sessions"]["create"]
>[0];

function buildStripeMock(overrides?: {
  url?: string | null;
  id?: string;
  throws?: Error;
}) {
  const calls: SessionCreateArgs[] = [];

  return {
    calls,
    checkout: {
      sessions: {
        create: async (args: SessionCreateArgs) => {
          calls.push(args);
          if (overrides?.throws) throw overrides.throws;
          return {
            url: overrides?.url ?? "https://checkout.stripe.com/pay/cs_test_mock",
            id: overrides?.id ?? "cs_test_mock_id",
          };
        },
      },
    },
  };
}

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
// CORS preflight
// ---------------------------------------------------------------------------

Deno.test("OPTIONS returns 200 with CORS headers", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  const res = await handler(
    new Request("https://fn.supabase.co/functions/v1/create-checkout", {
      method: "OPTIONS",
    })
  );

  assertEquals(res.status, 200);
  assertEquals(res.headers.get("Access-Control-Allow-Origin"), "*");
});

// ---------------------------------------------------------------------------
// Happy paths — all valid plans
// ---------------------------------------------------------------------------

for (const planKey of ["silver", "gold", "annual"] as const) {
  Deno.test(`happy path: ${planKey} plan creates checkout session and returns URL`, async () => {
    const expectedUrl = `https://checkout.stripe.com/pay/cs_test_${planKey}`;
    const stripe = buildStripeMock({ url: expectedUrl, id: `cs_test_${planKey}_id` });
    const handler = createHandler(stripe as any);

    const res = await handler(makeRequest({ plan: planKey }));
    const body = await res.json();

    assertEquals(res.status, 200);
    assertEquals(body.url, expectedUrl);
    assertEquals(body.sessionId, `cs_test_${planKey}_id`);

    // Verify Stripe was called with the correct price ID
    assertEquals(stripe.calls.length, 1);
    assertEquals(stripe.calls[0].line_items![0].price, FOUNDING_PRICES[planKey].priceId);
    assertEquals(stripe.calls[0].mode, "subscription");
  });

  Deno.test(`happy path: ${planKey} plan is case-insensitive`, async () => {
    const stripe = buildStripeMock();
    const handler = createHandler(stripe as any);

    const res = await handler(makeRequest({ plan: planKey.toUpperCase() }));
    assertEquals(res.status, 200);
    assertEquals(stripe.calls.length, 1);
  });
}

// ---------------------------------------------------------------------------
// Checkout session structure
// ---------------------------------------------------------------------------

Deno.test("session has correct trial_end (LAUNCH_DATE_UNIX)", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  await handler(makeRequest({ plan: "gold" }));

  assertEquals(stripe.calls[0].subscription_data!.trial_end, LAUNCH_DATE_UNIX);
});

Deno.test("session metadata includes plan and founding_member flag", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  await handler(makeRequest({ plan: "silver" }));

  assertEquals(stripe.calls[0].metadata!.plan, "silver");
  assertEquals(stripe.calls[0].metadata!.founding_member, "true");
  assertEquals(stripe.calls[0].subscription_data!.metadata!.founding_member, "true");
});

Deno.test("success_url defaults to origin with preorder=success query param", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  await handler(makeRequest({ plan: "gold" }, "https://renaesthetic.com"));

  assertStringIncludes(stripe.calls[0].success_url!, "preorder=success");
  assertStringIncludes(stripe.calls[0].success_url!, "plan=gold");
});

Deno.test("cancel_url defaults to origin/#pricing", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  await handler(makeRequest({ plan: "gold" }, "https://renaesthetic.com"));

  assertStringIncludes(stripe.calls[0].cancel_url!, "#pricing");
});

Deno.test("custom successUrl and cancelUrl are passed through", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  await handler(makeRequest({
    plan: "silver",
    successUrl: "https://example.com/success",
    cancelUrl: "https://example.com/cancel",
  }));

  assertEquals(stripe.calls[0].success_url, "https://example.com/success");
  assertEquals(stripe.calls[0].cancel_url, "https://example.com/cancel");
});

// ---------------------------------------------------------------------------
// Non-happy paths
// ---------------------------------------------------------------------------

Deno.test("invalid plan returns 400 with error message", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  const res = await handler(makeRequest({ plan: "platinum" }));
  const body = await res.json();

  assertEquals(res.status, 400);
  assertStringIncludes(body.error, "Invalid plan");
  assertStringIncludes(body.error, "platinum");
  assertEquals(stripe.calls.length, 0);
});

Deno.test("missing plan returns 400", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  const res = await handler(makeRequest({}));
  const body = await res.json();

  assertEquals(res.status, 400);
  assertEquals(stripe.calls.length, 0);
});

Deno.test("null plan returns 400", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  const res = await handler(makeRequest({ plan: null }));
  assertEquals(res.status, 400);
});

Deno.test("Stripe API error returns 500 with error message", async () => {
  const stripe = buildStripeMock({ throws: new Error("Stripe API unreachable") });
  const handler = createHandler(stripe as any);

  const res = await handler(makeRequest({ plan: "gold" }));
  const body = await res.json();

  assertEquals(res.status, 500);
  assertEquals(body.error, "Stripe API unreachable");
});

Deno.test("error responses include CORS headers", async () => {
  const stripe = buildStripeMock();
  const handler = createHandler(stripe as any);

  const res = await handler(makeRequest({ plan: "invalid" }));

  assertEquals(res.headers.get("Access-Control-Allow-Origin"), "*");
});
