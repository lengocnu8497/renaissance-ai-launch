import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const FOUNDING_CAP = 500;

const PLANS = [
  {
    key: "silver",
    name: "Silver",
    description: "AI-guided research for cosmetic procedures and aesthetic treatments",
    regularPrice: "$19.99",
    foundingPrice: "$15.99",
    interval: "/month",
    features: [
      "Personalized aesthetic concierge",
      "Procedure recommendations",
      "Chat support",
    ],
    highlight: false,
  },
  {
    key: "gold",
    name: "Gold",
    description: "Personalized guidance for rhinoplasty, facelifts, and complex cosmetic surgery decisions",
    regularPrice: "$29.99",
    foundingPrice: "$23.99",
    interval: "/month",
    features: [
      "Everything in Silver",
      "Advanced skin analysis",
      "Treatment tracking",
      "Exclusive content",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    key: "annual",
    name: "Annual",
    description: "Full Gold benefits for 12 months — best value",
    regularPrice: "$215.99",
    foundingPrice: "$172.79",
    interval: "/year",
    features: [
      "Everything in Gold",
      "2 months free vs monthly",
      "Early access to new features",
      "Founding member badge",
    ],
    highlight: false,
    badge: "Best Value",
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M2.5 8.5L6 12L13.5 4" stroke="#C4929A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PricingSection = () => {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [spotsRemaining, setSpotsRemaining] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase as any)
      .from("preorders")
      .select("*", { count: "exact", head: true })
      .eq("status", "active")
      .then(({ count }: { count: number | null }) => {
        if (count !== null) setSpotsRemaining(Math.max(0, FOUNDING_CAP - count));
      });
  }, []);

  const handlePreorder = async (planKey: string) => {
    setLoadingPlan(planKey);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { plan: planKey },
      });

      if (error || !data?.url) {
        throw new Error(error?.message ?? "Failed to create checkout");
      }

      window.location.href = data.url;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast.error(message);
      setLoadingPlan(null);
    }
  };

  return (
    <section
      id="pricing"
      className="relative py-28 md:py-40 px-6 md:px-16"
      style={{ backgroundColor: "#FFF8F6", scrollMarginTop: "0px" }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p
          className="font-sans font-medium uppercase mb-5"
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#C4929A" }}
        >
          Founding Member Pricing
        </p>
        <h2
          className="font-serif text-charcoal-rose leading-[1.05] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400 }}
        >
          Reserve your spot.<br />Access at launch.
        </h2>
        <p
          className="font-sans font-light text-charcoal-rose/60 max-w-md mx-auto"
          style={{ fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.7 }}
        >
          Limited to 500 founding members.
          Lock in 20% off.
        </p>

        {spotsRemaining !== null && spotsRemaining < 300 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full mx-auto"
            style={{ border: "1px solid rgba(196,146,154,0.3)", backgroundColor: "rgba(196,146,154,0.06)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: spotsRemaining > 20 ? "#C4929A" : "#B76E79", flexShrink: 0 }}
            />
            <span
              className="font-sans font-medium"
              style={{ fontSize: "12px", letterSpacing: "1px", color: "#C4929A" }}
            >
              {spotsRemaining} of {FOUNDING_CAP} founding spots remaining
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PLANS.map((plan, i) => (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex flex-col rounded-[20px] p-8"
            style={{
              backgroundColor: plan.highlight ? "#3D2B2E" : "white",
              border: plan.highlight ? "none" : "1px solid rgba(196,146,154,0.2)",
            }}
          >
            {plan.badge && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans font-medium uppercase px-4 py-1 rounded-full whitespace-nowrap"
                style={{
                  fontSize: "9px",
                  letterSpacing: "3px",
                  color: plan.highlight ? "#3D2B2E" : "#FFF8F6",
                  backgroundColor: plan.highlight ? "#C4929A" : "#8E4C5C",
                }}
              >
                {plan.badge}
              </div>
            )}

            {/* Plan name */}
            <p
              className="font-sans font-medium uppercase mb-1"
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: plan.highlight ? "rgba(196,146,154,0.7)" : "#C4929A",
              }}
            >
              {plan.name}
            </p>

            {/* Description */}
            <p
              className="font-sans font-light mb-8 leading-snug"
              style={{
                fontSize: "14px",
                color: plan.highlight ? "rgba(255,248,246,0.5)" : "rgba(61,43,46,0.55)",
              }}
            >
              {plan.description}
            </p>

            {/* Pricing */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="font-serif leading-none"
                  style={{
                    fontSize: "clamp(36px, 4vw, 48px)",
                    fontWeight: 300,
                    color: plan.highlight ? "#FFF8F6" : "#3D2B2E",
                  }}
                >
                  {plan.foundingPrice}
                </span>
                <span
                  className="font-sans font-light"
                  style={{
                    fontSize: "13px",
                    color: plan.highlight ? "rgba(255,248,246,0.45)" : "rgba(61,43,46,0.45)",
                  }}
                >
                  {plan.interval}
                </span>
              </div>
              <p
                className="font-sans font-light"
                style={{
                  fontSize: "12px",
                  color: plan.highlight ? "rgba(255,248,246,0.35)" : "rgba(61,43,46,0.35)",
                  textDecoration: "line-through",
                }}
              >
                Regular {plan.regularPrice}{plan.interval}
              </p>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-[2px] shrink-0"><CheckIcon /></span>
                  <span
                    className="font-sans font-light leading-snug"
                    style={{
                      fontSize: "14px",
                      color: plan.highlight ? "rgba(255,248,246,0.65)" : "rgba(61,43,46,0.65)",
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => handlePreorder(plan.key)}
              disabled={loadingPlan !== null}
              className="w-full rounded-full py-3.5 font-sans font-medium uppercase transition-all duration-200 disabled:opacity-60"
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                backgroundColor: plan.highlight ? "#C4929A" : "#3D2B2E",
                color: "#FFF8F6",
              }}
            >
              {loadingPlan === plan.key ? "Redirecting..." : "Pre-order Now"}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Trust line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center font-sans font-light mt-12"
        style={{ fontSize: "13px", color: "rgba(61,43,46,0.4)" }}
      >
        Secured by Stripe · Cancel anytime
      </motion.p>

      {/* Section divider */}
      <div className="flex items-center justify-center mt-20 gap-6">
        <div style={{ height: 1, width: 60, backgroundColor: "rgba(196,146,154,0.2)" }} />
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="rgba(196,146,154,0.3)" strokeWidth="1" />
          <circle cx="12" cy="12" r="6" stroke="rgba(196,146,154,0.4)" strokeWidth="0.8" />
          <circle cx="12" cy="12" r="2.5" fill="rgba(196,146,154,0.5)" />
        </svg>
        <div style={{ height: 1, width: 60, backgroundColor: "rgba(196,146,154,0.2)" }} />
      </div>
    </section>
  );
};
