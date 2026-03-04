import { motion } from "framer-motion";

interface VideoSectionProps {
  src: string;
  bg: string;             // hex background color
  blendTo?: string;       // hex color for bottom gradient blend
  textSide: "left" | "right";
  eyebrow?: string;
  heading: string;
  body: string;
}

export const VideoSection = ({
  src,
  bg,
  blendTo,
  textSide,
  eyebrow,
  heading,
  body,
}: VideoSectionProps) => {
  const videoLeft = textSide === "right";

  const videoCol = (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative overflow-hidden rounded-[20px]"
      style={{
        aspectRatio: "3/4",
        transform: `skewY(${videoLeft ? "-1deg" : "1deg"})`,
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
      />
    </motion.div>
  );

  const textCol = (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col gap-5"
      style={{ transform: "skewY(-2deg)" }}
    >
      {eyebrow && (
        <span
          className="text-dusty-rose font-medium uppercase"
          style={{ fontSize: "11px", letterSpacing: "4px" }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="font-serif font-light text-charcoal-rose leading-[1.1]"
        style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
      >
        {heading}
      </h2>

      <p
        className="font-sans font-light text-warm-gray max-w-xs"
        style={{ fontSize: "15px", lineHeight: "1.85" }}
      >
        {body}
      </p>

      <div
        className="mt-4"
        style={{ width: "60px", height: "1px", backgroundColor: "#C4929A", opacity: 0.4 }}
      />
    </motion.div>
  );

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-24 items-center ${
            videoLeft ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
          }`}
        >
          {videoLeft ? videoCol : textCol}
          {videoLeft ? textCol : videoCol}
        </div>
      </div>

      {blendTo && (
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: `linear-gradient(to bottom, transparent, ${blendTo})` }}
        />
      )}
    </section>
  );
};
