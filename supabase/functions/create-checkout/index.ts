import Stripe from "https://esm.sh/stripe@14?target=deno";

// Founding member price IDs (20% off, trial until launch April 8 2026)
export const FOUNDING_PRICES: Record<string, { priceId: string; name: string }> = {
  silver: {
    priceId: "price_1TEeyGAb6tzZd9brWCjPQnoz",
    name: "Silver Founding Member",
  },
  gold: {
    priceId: "price_1TEeyGAb6tzZd9brsvGngIpT",
    name: "Gold Founding Member",
  },
  annual: {
    priceId: "price_1TEeyHAb6tzZd9brJaa2mTT4",
    name: "Annual Founding Member",
  },
};

// April 8 2026 00:00:00 UTC
export const LAUNCH_DATE_UNIX = 1775606400;

export const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

export function createHandler(stripe: Stripe) {
  return async (req: Request): Promise<Response> => {
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: CORS });
    }

    try {
      const { plan, successUrl, cancelUrl } = await req.json();

      const planKey = plan?.toLowerCase();
      const planConfig = FOUNDING_PRICES[planKey];

      if (!planConfig) {
        return new Response(
          JSON.stringify({ error: `Invalid plan: ${plan}. Must be silver, gold, or annual.` }),
          { status: 400, headers: { ...CORS, "Content-Type": "application/json" } }
        );
      }

      const origin = req.headers.get("origin") ?? "https://renaesthetic.com";

      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        payment_method_collection: "always",
        line_items: [{ price: planConfig.priceId, quantity: 1 }],
        subscription_data: {
          metadata: {
            plan: planKey,
            founding_member: "true",
          },
        },
        success_url: successUrl ?? `${origin}/?preorder=success&plan=${planKey}`,
        cancel_url: cancelUrl ?? `${origin}/#pricing`,
        metadata: {
          plan: planKey,
          founding_member: "true",
        },
      });

      return new Response(
        JSON.stringify({ url: session.url, sessionId: session.id }),
        { headers: { ...CORS, "Content-Type": "application/json" } }
      );
    } catch (err) {
      console.error("create-checkout error:", err);
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { ...CORS, "Content-Type": "application/json" } }
      );
    }
  };
}

if (import.meta.main) {
  const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
    apiVersion: "2024-06-20",
  });
  Deno.serve(createHandler(stripe));
}
