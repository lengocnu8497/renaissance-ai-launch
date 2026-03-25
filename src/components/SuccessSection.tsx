import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SHARE_MESSAGE = "I just became a founding member of Rena Aesthetic Lab — AI-powered cosmetic concierge, launching Summer 2026. Only 200 founding spots at 20% off.";
const SITE_URL = "https://renaesthetic.com";
const FB_SHARE_URL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}&quote=${encodeURIComponent(SHARE_MESSAGE)}`;

interface SuccessSectionProps {
  active: boolean;
}

export const SuccessSection = ({ active }: SuccessSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (active && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [active]);

  const handleFacebookShare = () => {
    window.open(FB_SHARE_URL, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const handleInstagramShare = async () => {
    // Web Share API — on mobile this surfaces Instagram directly
    if (navigator.share) {
      await navigator.share({ title: "Rena Aesthetic Lab", text: SHARE_MESSAGE, url: SITE_URL });
    } else {
      // Fallback: copy link + hint
      await navigator.clipboard.writeText(`${SHARE_MESSAGE} ${SITE_URL}`);
      const btn = document.getElementById("ig-share-btn");
      if (btn) {
        btn.textContent = "Copied — paste on IG";
        setTimeout(() => { btn.textContent = "Share on Instagram"; }, 2500);
      }
    }
  };

if (!active) return null;

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center py-28 md:py-36 px-8 overflow-hidden"
      style={{ backgroundColor: "#FFF8F6" }}
    >
      {/* Decorative concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#3D2B2E" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="#3D2B2E" strokeWidth="1" />
          <circle cx="300" cy="300" r="160" stroke="#3D2B2E" strokeWidth="1" />
          <circle cx="300" cy="300" r="100" stroke="#3D2B2E" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#C4929A" strokeWidth="1" fill="none" />
            <circle cx="24" cy="24" r="14" stroke="#C4929A" strokeWidth="0.8" fill="none" />
            <path d="M15 24.5L21 30.5L33 18" stroke="#C4929A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans font-medium uppercase mb-4"
          style={{ fontSize: "10px", letterSpacing: "4px", color: "#C4929A" }}
        >
          Founding Member Confirmed
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-charcoal-rose leading-[1.1] mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 400 }}
        >
          You're in.
        </motion.h2>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-sans font-light text-charcoal-rose/60 mb-10"
          style={{ fontSize: "16px", lineHeight: 1.8 }}
        >
          App access will be sent to your email at launch.
          Your founding pricing is locked in — for life.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10"
          style={{ width: 40, height: 1, background: "rgba(196,146,154,0.35)" }}
        />

        {/* Referral nudge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-sans font-light text-charcoal-rose/40 mb-6"
          style={{ fontSize: "13px", letterSpacing: "0.3px" }}
        >
          Know someone who deserves this?
        </motion.p>

        {/* Share buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex gap-3"
        >
          <button
            onClick={handleFacebookShare}
            className="flex items-center gap-2 rounded-full px-6 py-3 font-sans font-medium uppercase transition-all duration-200 hover:opacity-80"
            style={{ fontSize: "11px", letterSpacing: "3px", backgroundColor: "#3D2B2E", color: "#FFF8F6" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Share on Facebook
          </button>

          <button
            id="ig-share-btn"
            onClick={handleInstagramShare}
            className="flex items-center gap-2 rounded-full px-6 py-3 font-sans font-medium uppercase transition-all duration-200 hover:opacity-80"
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              backgroundColor: "transparent",
              color: "#3D2B2E",
              border: "1px solid rgba(61,43,46,0.25)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Share on Instagram
          </button>
        </motion.div>
      </div>
    </section>
  );
};
