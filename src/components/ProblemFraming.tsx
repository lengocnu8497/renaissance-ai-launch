import { motion } from "framer-motion";

const PROBLEMS = [
  {
    headline: "Months of research. Still no clarity.",
    body: "You've read every forum thread, watched every before-and-after, and still don't know if that procedure is actually right for you — or just right for someone else.",
  },
  {
    headline: "You had the procedure. Now you're on your own.",
    body: "Your surgeon said recovery takes a year. You're home alone on day four, looking at your face in the mirror, with no idea if what you're seeing is normal progress or a reason to call.",
  },
];

export const ProblemFraming = () => (
  <section
    className="py-24 md:py-36 px-8 md:px-16"
    style={{ backgroundColor: "#3D2B2E" }}
  >
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="font-sans font-medium uppercase mb-16"
        style={{ fontSize: "11px", letterSpacing: "4px", color: "rgba(196,146,154,0.6)" }}
      >
        Sound familiar?
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {PROBLEMS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              style={{ width: 32, height: 1, backgroundColor: "rgba(196,146,154,0.25)", marginBottom: 20 }}
            />
            <h3
              className="font-serif text-cream leading-[1.2] mb-5"
              style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 400 }}
            >
              {p.headline}
            </h3>
            <p
              className="font-sans font-light leading-relaxed"
              style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(255,248,246,0.45)" }}
            >
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="font-serif italic mt-20 md:mt-24"
        style={{ fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 300, color: "rgba(255,248,246,0.55)" }}
      >
        Rena was built for exactly this.
      </motion.p>
    </div>
  </section>
);
