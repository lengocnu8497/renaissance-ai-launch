import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    heading: "Tell Rena about yourself.",
    body: "Your goals, your history, your concerns. Rena builds a complete picture of who you are — not from a quiz, but from a real conversation that gets deeper over time.",
  },
  {
    number: "02",
    heading: "Get your personalized plan.",
    body: "Rena analyzes everything and surfaces the procedures, products, and providers best suited to you specifically — not the average person who answered similarly.",
  },
  {
    number: "03",
    heading: "Stay informed, always.",
    body: "Ask anything. Get answers backed by clinical knowledge, tailored to your profile, at any stage of your aesthetic journey — before, during, and after.",
  },
];

export const HowItWorks = () => (
  <section
    id="how-it-works"
    className="relative py-28 md:py-40 px-8 md:px-16"
    style={{ backgroundColor: "#FFF8F6" }}
  >
    <div className="max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-20"
      >
        <p
          className="font-sans font-medium uppercase mb-4"
          style={{ fontSize: "11px", letterSpacing: "4px", color: "#C4929A" }}
        >
          How it works
        </p>
        <h2
          className="font-serif leading-tight"
          style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, color: "#3D2B2E", maxWidth: "520px" }}
        >
          Aesthetic care,<br />finally built around you.
        </h2>
      </motion.div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.9,
              delay: i * 0.14,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Step number */}
            <div
              className="font-serif font-light leading-none mb-8"
              style={{ fontSize: "72px", color: "#C4929A", opacity: 0.35 }}
            >
              {step.number}
            </div>

            {/* Divider */}
            <div
              className="mb-6"
              style={{ width: 32, height: 1, backgroundColor: "#C4929A", opacity: 0.5 }}
            />

            {/* Heading */}
            <h3
              className="font-serif leading-snug mb-4"
              style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 400, color: "#3D2B2E" }}
            >
              {step.heading}
            </h3>

            {/* Body */}
            <p
              className="font-sans font-light leading-relaxed"
              style={{ fontSize: "15px", color: "#B8A9AB", lineHeight: 1.8 }}
            >
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>

    </div>

    {/* Gradient blend → soft blush (VideoSection bg) */}
    <div
      className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent, #F2D7DB)" }}
    />
  </section>
);
