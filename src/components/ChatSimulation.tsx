import { motion } from "framer-motion";

const RenaAvatar = () => (
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "linear-gradient(135deg,#6B3346,#B76E79)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="11" cy="11" r="5" stroke="rgba(255,255,255,0.65)" strokeWidth="1" />
      <circle cx="11" cy="11" r="2" fill="white" />
    </svg>
  </div>
);

const MESSAGES = [
  {
    from: "user",
    text: "My surgeon said it takes a full year to see the final result. I don't even know what's normal week by week.",
    delay: 0.1,
  },
  {
    from: "rena",
    text: "The uncertainty you're feeling is a part of recovery, and it's something most people feel but rarely brought up in discussion.",
    delay: 0.5,
  },
  {
    from: "rena",
    text: "Based on Day 9 post-rhinoplasty, what you're seeing is completely expected. Most patients see 60–70% of swelling resolved by week 3. Tip sensitivity and minor asymmetry at this stage are both normal.",
    delay: 0.9,
  },
  {
    from: "rena-card",
    label: "This week, watch for",
    points: ["Swelling that's higher in the morning than evening — that's your body working", "Tip firmness gradually softening", "Bruising fading from purple → yellow → gone"],
    delay: 1.3,
  },
];

export const ChatSimulation = () => (
  <section
    className="py-24 md:py-36 px-8 md:px-16 overflow-hidden"
    style={{ backgroundColor: "#FFF8F6" }}
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="font-sans font-medium uppercase block mb-5"
            style={{ fontSize: "11px", letterSpacing: "4px", color: "#C4929A" }}
          >
            Rena in Action
          </span>
          <h2
            className="font-serif text-charcoal-rose leading-[1.1] mb-6"
            style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 400 }}
          >
            Your guide<br />through every step.
          </h2>
          <p
            className="font-sans font-light text-warm-gray"
            style={{ fontSize: "15px", lineHeight: 1.85 }}
          >
            Whether you're still researching your first procedure or three weeks into recovery — Rena meets you exactly where you are, with information built around your specific situation.
          </p>
          <div
            style={{ width: 40, height: 1, backgroundColor: "#C4929A", opacity: 0.35, marginTop: 28 }}
          />
        </motion.div>

        {/* Right — chat */}
        <div className="flex flex-col gap-4">
          {MESSAGES.map((msg, i) => {
            if (msg.from === "user") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: msg.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex justify-end"
                >
                  <div
                    className="font-sans font-light"
                    style={{
                      background: "linear-gradient(135deg,#6B3346,#8E4C5C)",
                      color: "#fff",
                      borderRadius: "18px 18px 4px 18px",
                      padding: "12px 16px",
                      maxWidth: "78%",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      boxShadow: "0 4px 16px rgba(107,51,70,0.22)",
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              );
            }

            if (msg.from === "rena") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: msg.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-3 items-end"
                >
                  <RenaAvatar />
                  <div
                    className="font-sans font-light"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(196,146,154,0.2)",
                      color: "#3D2B2E",
                      borderRadius: "18px 18px 18px 4px",
                      padding: "12px 16px",
                      maxWidth: "78%",
                      fontSize: "14px",
                      lineHeight: 1.6,
                      boxShadow: "0 2px 12px rgba(142,76,92,0.07)",
                    }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              );
            }

            if (msg.from === "rena-card") {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: msg.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex gap-3 items-end"
                >
                  <div style={{ width: 32, flexShrink: 0 }} />
                  <div
                    style={{
                      background: "rgba(196,146,154,0.07)",
                      border: "1px solid rgba(196,146,154,0.22)",
                      borderRadius: 16,
                      padding: "14px 16px",
                      width: "100%",
                    }}
                  >
                    <span
                      className="font-sans font-medium uppercase block mb-3"
                      style={{ fontSize: "9px", letterSpacing: "2.5px", color: "#C4929A" }}
                    >
                      {msg.label}
                    </span>
                    <ul className="flex flex-col gap-2">
                      {msg.points?.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 font-sans font-light"
                          style={{ fontSize: "13px", lineHeight: 1.55, color: "#3D2B2E" }}
                        >
                          <span style={{ color: "#C4929A", marginTop: 1, flexShrink: 0 }}>·</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            }
          })}

          {/* Online indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex items-center gap-2 pl-11"
          >
            <span
              style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#4CAF50", display: "inline-block" }}
            />
            <span
              className="font-sans font-light"
              style={{ fontSize: "11px", color: "rgba(61,43,46,0.4)", letterSpacing: "0.5px" }}
            >
              Rena is always here
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
