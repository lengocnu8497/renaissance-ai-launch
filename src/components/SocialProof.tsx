import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const WAITLIST_FLOOR = 200;

export const SocialProof = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (supabase as any)
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .then(({ count: c }: { count: number | null }) => {
        if (c !== null) setCount(Math.max(WAITLIST_FLOOR, c));
      });
  }, []);

  return (
    <section
      className="py-24 md:py-32 px-8 md:px-16"
      style={{ backgroundColor: "#F2D7DB" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24">

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-1"
        >
          <svg width="28" height="20" viewBox="0 0 28 20" fill="none" className="mb-6" style={{ opacity: 0.35 }}>
            <path d="M0 20V12.667C0 5.689 3.644 1.6 10.933 0l1.4 2.4C8.978 3.467 7.111 5.6 6.667 9.333H11.2V20H0zm16.8 0V12.667C16.8 5.689 20.444 1.6 27.733 0l1.4 2.4c-3.355 1.067-5.222 3.2-5.666 6.933H28V20H16.8z" fill="#3D2B2E" />
          </svg>

          <blockquote
            className="font-serif text-charcoal-rose leading-[1.65] mb-7"
            style={{ fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 400 }}
          >
            My surgeon told me it takes a full year to see the final result. I had no idea what 'normal' looked like week by week — logging photos gave me something to actually reference at every check-up.
          </blockquote>

          <div className="flex items-center gap-4">
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#6B3346,#B76E79)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span className="font-serif text-cream" style={{ fontSize: "14px" }}>M</span>
            </div>
            <div>
              <p className="font-sans font-medium text-charcoal-rose" style={{ fontSize: "13px" }}>Maya R.</p>
              <p className="font-sans font-light text-warm-gray" style={{ fontSize: "12px" }}>Rhinoplasty · Beta Member</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div
          className="hidden md:block self-stretch"
          style={{ width: 1, backgroundColor: "rgba(61,43,46,0.12)" }}
        />

        {/* Count */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center md:items-start gap-3 md:pt-2"
          style={{ minWidth: 180 }}
        >
          <span
            className="font-serif text-charcoal-rose leading-none"
            style={{ fontSize: "clamp(52px, 6vw, 72px)", fontWeight: 300 }}
          >
            {count !== null ? `${count}+` : "—"}
          </span>
          <span
            className="font-sans font-light text-warm-gray text-center md:text-left"
            style={{ fontSize: "13px", lineHeight: 1.6, maxWidth: 160 }}
          >
            women already on<br />the waitlist
          </span>
          <div style={{ width: 32, height: 1, backgroundColor: "#C4929A", opacity: 0.4, marginTop: 4 }} />
        </motion.div>

      </div>
    </section>
  );
};
