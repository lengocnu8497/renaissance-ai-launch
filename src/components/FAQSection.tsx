import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Is this medical advice?",
    a: "Rena is not a doctor and does not provide medical diagnoses or prescriptions. She's your personal research companion — helping you understand procedures, ask better questions, and track your recovery with more confidence. Always consult a licensed medical professional before making any treatment decisions.",
  },
  {
    q: "How does Rena personalize for me?",
    a: "When you first open the app, Rena learns about your body, your skin, your goals, your history, and your lifestyle. Every recommendation, insight, and recovery note is built from that profile — not a generic template. The more you use Rena, the more accurate she becomes.",
  },
  {
    q: "What happens after I pay?",
    a: "You'll receive a confirmation email immediately. App access is delivered at launch — Summer 2026. Your founding member pricing is locked in from the moment you subscribe, and you won't be charged again until your next billing cycle.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, anytime — no questions asked. If you cancel before your next billing date, you won't be charged again. Founding member pricing is only available at sign-up, so if you re-subscribe later it will be at the standard rate.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div
    style={{ borderBottom: "1px solid rgba(61,43,46,0.1)" }}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 text-left"
    >
      <span
        className="font-serif text-charcoal-rose pr-8"
        style={{ fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 400 }}
      >
        {q}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ flexShrink: 0 }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10h12" stroke="#C4929A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </motion.div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ overflow: "hidden" }}
        >
          <p
            className="font-sans font-light text-warm-gray pb-6 pr-12"
            style={{ fontSize: "15px", lineHeight: 1.85 }}
          >
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 md:py-32 px-8 md:px-16"
      style={{ backgroundColor: "#FFF8F6" }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p
            className="font-sans font-medium uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "4px", color: "#C4929A" }}
          >
            Questions
          </p>
          <h2
            className="font-serif text-charcoal-rose leading-[1.1]"
            style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 400 }}
          >
            Everything you need to know.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ borderTop: "1px solid rgba(61,43,46,0.1)" }}
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
