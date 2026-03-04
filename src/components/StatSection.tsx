import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

export const StatSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 70, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-28 md:py-40 text-center"
      style={{ backgroundColor: "#F2D7DB" }}
    >
      <div className="max-w-2xl mx-auto px-8">

        {/* Stat number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif font-light leading-none"
          style={{ fontSize: "clamp(96px, 18vw, 160px)", color: "#C4929A" }}
        >
          {count}%
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans font-light mt-8"
          style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#3D2B2E", lineHeight: 1.65 }}
        >
          of people are currently considering an aesthetic procedure.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans font-light mt-3"
          style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#8E4C5C", lineHeight: 1.65 }}
        >
          The #1 reason: to feel more confident.
        </motion.p>

        {/* Citation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-sans font-light mt-10 uppercase"
          style={{ fontSize: "11px", color: "#B8A9AB", letterSpacing: "2.5px" }}
        >
          ASDS 2025 Consumer Survey
        </motion.p>

      </div>
    </section>
  );
};
