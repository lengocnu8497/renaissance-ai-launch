import { Link } from "react-router-dom";

const APP_ICON = "/resources/AppIcon-rounded.png";

export default function Support() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#fcf8ff", color: "#1b1b24" }}>
      {/* Top bar */}
      <nav className="sticky top-0 z-50 border-b border-[#c7c4d8]/30 px-5 md:px-10 py-4 flex items-center justify-between" style={{ backgroundColor: "rgba(252,248,255,0.88)", backdropFilter: "blur(12px)" }}>
        <div className="flex items-center gap-3">
          <img src={APP_ICON} alt="Rena" className="w-8 h-8 rounded-lg" />
          <span className="text-lg font-extrabold text-[#3e2cdc]">rena</span>
        </div>
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm font-semibold text-[#3e2cdc] hover:opacity-70 transition-opacity"
        >
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="#3e2cdc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-5 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[4px] text-[#3e2cdc] mb-5">Support</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Contact Us
          </h1>
          <p className="text-sm text-[#464556]">We're here to help with any questions about Rena.</p>
        </div>

        <div className="space-y-10">
          <div className="bg-white rounded-3xl p-8 border border-[#c7c4d8]/20 shadow-sm">
            <h2 className="text-lg font-bold text-[#1b1b24] mb-2">General Support</h2>
            <p className="text-sm text-[#464556] mb-4" style={{ lineHeight: "1.75" }}>
              For account issues, app feedback, or any other questions, reach out to our team and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:renaestheticslab@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#3e2cdc] hover:opacity-70 transition-opacity"
            >
              renaestheticslab@gmail.com
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="#3e2cdc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#c7c4d8]/20 shadow-sm">
            <h2 className="text-lg font-bold text-[#1b1b24] mb-2">Download the App</h2>
            <p className="text-sm text-[#464556] mb-5" style={{ lineHeight: "1.75" }}>
              Get Rena on the App Store and start your recovery journey today.
            </p>
            <a
              href="https://apps.apple.com/us/app/rena-cosmetic-surgery-care/id6761738432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-black text-white px-5 py-3 rounded-full border border-white/10 hover:brightness-110 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-157.3-120.8c-61.6-91.7-112.5-242.2-112.5-381.1 0-195.3 127.4-298.5 252.7-298.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[9px] opacity-70">Download on the</span>
                <span className="text-sm font-bold">App Store</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#c7c4d8]/30">
          <p className="text-xs text-[#464556] opacity-70">© 2026 Rena LLC. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
