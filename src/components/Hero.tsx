import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const HERO_VIDEO = "/resources/hero-video.mp4";

export const Hero = () => {
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
    <section id="top" className="relative h-screen overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(61,43,46,0.5) 0%, rgba(61,43,46,0.08) 45%, rgba(61,43,46,0.55) 100%)",
        }}
      />

      {/* Content — bottom-left anchored */}
      <div className="absolute inset-0 flex flex-col justify-end pb-28 md:pb-32 px-8 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif font-light leading-[1.05] text-cream mb-5 max-w-3xl"
          style={{ fontSize: "clamp(44px, 7.5vw, 96px)" }}
        >
          Beauty, guided<br />by intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans font-light text-cream/65 mb-10 max-w-sm"
          style={{ fontSize: "18px", lineHeight: "1.8" }}
        >
          Your AI concierge for cosmetic care — personalized, trusted, effortless.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-6"
        >
          <a
            href="#pricing"
            className="bg-dusty-rose text-cream rounded-full px-8 py-3.5 text-[11px] font-medium uppercase tracking-[3px] transition-all duration-200 hover:bg-rose-gold whitespace-nowrap"
          >
            Become a Founding Member
          </a>
        </motion.div>

        {/* Waitlist fallback */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="flex flex-col gap-2"
        >
          <p
            className="text-cream/40 font-sans font-light"
            style={{ fontSize: "12px", letterSpacing: "0.5px" }}
          >
            Can't commit yet?
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-sm"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="flex-1 bg-cream/10 backdrop-blur-sm border border-cream/20 text-cream placeholder:text-cream/30 rounded-full px-5 py-2.5 text-[13px] font-light outline-none focus:border-cream/50 transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="border border-cream/25 text-cream/60 rounded-full px-5 py-2.5 text-[10px] font-medium uppercase tracking-[2.5px] transition-all duration-200 hover:border-cream/50 hover:text-cream/80 disabled:opacity-60 whitespace-nowrap"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span
          className="font-sans font-light text-cream/40 uppercase"
          style={{ fontSize: "9px", letterSpacing: "3.5px" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M1 1l7 7 7-7" stroke="rgba(255,248,246,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
