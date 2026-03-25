import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";



export const FinalCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("waitlist").insert([{ email: trimmedEmail }]);
      if (error) {
        if (error.code === "23505") {
          toast.error("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        toast.success("You're on the waitlist! We'll be in touch soon.");
        setEmail("");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative flex items-center justify-center overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: "#3D2B2E", scrollMarginTop: "80px" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-xl mx-auto">

        {/* Eyebrow — sets context first */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans font-medium uppercase mb-3"
          style={{ fontSize: "10px", letterSpacing: "4px", color: "rgba(196,146,154,0.55)" }}
        >
          Founding Member Offer
        </motion.p>

        {/* 20% off — the anchor, size does the heavy lifting */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-cream leading-none mb-4"
          style={{ fontSize: "clamp(72px, 13vw, 108px)", fontWeight: 300 }}
        >
          20% off
        </motion.p>

        {/* Emotional close — lighter, supporting */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif italic mb-10"
          style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 300, color: "rgba(255,248,246,0.45)" }}
        >
          This is your invitation.
        </motion.p>

        {/* Thin divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10"
          style={{ width: 48, height: 1, background: "rgba(196,146,154,0.3)" }}
        />

        {/* Pre-order primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4 w-full max-w-sm"
        >
          <a
            href="#pricing"
            className="flex items-center justify-center w-full rounded-full py-4 font-sans font-medium uppercase transition-all duration-200 hover:opacity-90"
            style={{ fontSize: "11px", letterSpacing: "3px", backgroundColor: "#C4929A", color: "#FFF8F6" }}
          >
            Pre-order — 20% off
          </a>
          <p
            className="font-sans font-light text-center mt-2"
            style={{ fontSize: "11px", color: "rgba(255,248,246,0.35)" }}
          >
            Lock in founding pricing · Cancel anytime
          </p>
        </motion.div>

        {/* Waitlist fallback */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans font-light mb-4"
          style={{ fontSize: "12px", color: "rgba(255,248,246,0.3)", letterSpacing: "0.3px" }}
        >
          Can't commit yet? Join the waitlist for launch updates.
        </motion.p>

        {/* Waitlist form — secondary */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-sm mb-10"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="flex-1 bg-cream/10 backdrop-blur-sm border border-cream/25 text-cream placeholder:text-cream/35 rounded-full px-5 py-3 text-[14px] font-light outline-none focus:border-cream/50 transition-colors"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent border border-cream/25 text-cream/60 rounded-full px-7 py-3 text-[11px] font-medium uppercase tracking-[3px] transition-all duration-200 hover:border-cream/50 hover:text-cream/80 disabled:opacity-60 whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </motion.form>

        {/* Launch badge — footnote, not headline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <span
            className="font-sans font-medium uppercase px-4 py-1.5 rounded-full inline-block"
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              color: "rgba(196,146,154,0.5)",
              border: "1px solid rgba(196,146,154,0.2)",
            }}
          >
            Launching iOS · Summer 2026
          </span>
        </motion.div>

      </div>
    </section>
  );
};
