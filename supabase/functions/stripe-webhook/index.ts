import Stripe from "https://esm.sh/stripe@14?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-06-20",
});

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

Deno.serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing stripe-signature", { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", (err as Error).message);
    return new Response(`Webhook Error: ${(err as Error).message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email;
    const customerId = session.customer as string;
    const subscriptionId = session.subscription as string;
    const plan = session.metadata?.plan ?? "unknown";

    if (!email) {
      console.error("No email in session", session.id);
      return new Response("No email", { status: 400 });
    }

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);
    const priceId = subscription.items.data[0]?.price.id ?? null;

    const { error } = await supabase.from("preorders").upsert(
      {
        email,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscriptionId,
        stripe_price_id: priceId,
        plan_name: plan,
        status: "active",
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response("DB error", { status: 500 });
    }

    console.log(`Subscription activated: ${email} → ${plan}`);
  }

  if (event.type === "customer.subscription.updated") {
    const subscription = event.data.object as Stripe.Subscription;
    const stripeStatus = subscription.status; // active | past_due | unpaid | canceled | etc.

    const statusMap: Record<string, string> = {
      active: "active",
      past_due: "past_due",
      unpaid: "past_due",
      canceled: "canceled",
      incomplete: "pending",
      incomplete_expired: "canceled",
      paused: "canceled",
    };

    const mapped = statusMap[stripeStatus] ?? stripeStatus;

    const { error } = await supabase
      .from("preorders")
      .update({ status: mapped })
      .eq("stripe_subscription_id", subscription.id);

    if (error) console.error("Supabase update error (subscription.updated):", error);
    else console.log(`Subscription ${subscription.id} status → ${mapped}`);
  }

  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;

    const { error } = await supabase
      .from("preorders")
      .update({ status: "canceled" })
      .eq("stripe_subscription_id", subscription.id);

    if (error) console.error("Supabase update error (subscription.deleted):", error);
    else console.log(`Subscription ${subscription.id} canceled`);
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
