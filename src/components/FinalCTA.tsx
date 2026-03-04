import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CTA_IMAGE = "/resources/Gemini_Generated_Image_ytwn3wytwn3wytwn.png";

const LogoMark = () => (
  <svg width="72" height="72" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="37" stroke="rgba(196,146,154,0.6)" strokeWidth="1" fill="none"/>
    <circle cx="40" cy="40" r="27" stroke="rgba(196,146,154,0.5)" strokeWidth="1" fill="none"/>
    <circle cx="40" cy="40" r="17" stroke="#C4929A" strokeWidth="1.2" fill="none"/>
    <path d="M40 26 C50 26,57 32,57 40 C57 48,50 54,40 54" stroke="rgba(196,146,154,0.6)" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <circle cx="40" cy="40" r="4" fill="#C4929A"/>
  </svg>
);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={CTA_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, rgba(61,43,46,0.82) 0%, rgba(61,43,46,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <LogoMark />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif font-light text-cream leading-[1.05] mb-3"
          style={{ fontSize: "clamp(42px, 7vw, 80px)" }}
        >
          Rena Aesthetic Lab
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-cream/40 font-medium uppercase mb-14"
          style={{ fontSize: "10px", letterSpacing: "7px" }}
        >
          Coming Soon
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
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
            className="bg-dusty-rose text-cream rounded-full px-7 py-3 text-[11px] font-medium uppercase tracking-[3px] transition-all duration-200 hover:bg-rose-gold disabled:opacity-60 whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/30 mt-6 font-light"
          style={{ fontSize: "12px" }}
        >
          Be the first to experience the future of aesthetic care
        </motion.p>
      </div>
    </section>
  );
};
