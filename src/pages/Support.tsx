import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#FFF8F6", color: "#3D2B2E" }}>
      <div
        className="sticky top-0 z-10 px-8 md:px-16 py-5 flex items-center justify-between"
        style={{
          backgroundColor: "rgba(255,248,246,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(196,146,154,0.12)",
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[3px] transition-opacity hover:opacity-60"
          style={{ color: "#C4929A" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7L9 12"
              stroke="#C4929A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Home
        </Link>
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#C4929A" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="12" stroke="#C4929A" strokeWidth="0.8" fill="none" />
          <circle cx="20" cy="20" r="7" stroke="#8E4C5C" strokeWidth="1" fill="none" />
          <circle cx="20" cy="20" r="2" fill="#C4929A" />
        </svg>
      </div>

      <main className="max-w-3xl mx-auto px-8 md:px-12 py-20">
        <header className="mb-16">
          <p
            className="font-medium uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "4px", color: "#C4929A" }}
          >
            Support
          </p>
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "#C4929A",
              opacity: 0.4,
              marginBottom: "24px",
            }}
          />
        </header>

        <p
          className="font-light leading-relaxed"
          style={{ fontSize: "16px", lineHeight: "1.85", color: "#5C4448" }}
        >
          Contact us at{" "}
          <a
            href="mailto:renaestheticslab@gmail.com"
            className="transition-opacity hover:opacity-70"
            style={{ color: "#8E4C5C" }}
          >
            renaestheticslab@gmail.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
