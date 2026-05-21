import { useState, useEffect } from "react";

const A = {
  icon:     "/resources/AppIcon-rounded.png",
  hero:     "/resources/omni-49b3091c-3c8d-4cb4-8854-9b6ed633a04c.png",
  prep:     "/resources/prep.jpg",
  roadmap:  "/resources/roadmap.png",
  tracking: "/resources/Gemini_Generated_Image_8c5dio8c5dio8c5d.png",
  ctaBg:    "/resources/screen.png",
};

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-[#c7c4d8]/30" : "border-transparent"
      }`}
      style={{ backgroundColor: "rgba(252,248,255,0.88)", backdropFilter: "blur(12px)" }}
    >
      <div className="flex justify-between items-center px-5 md:px-10 py-4 max-w-7xl mx-auto">
        <img src={A.icon} alt="Rena" className="w-10 h-10 rounded-xl" />
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: "Features", active: false, href: "#features" },
            { label: "About",    active: false, href: "/about" },
          ].map(({ label, active, href }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-bold transition-colors ${
                active
                  ? "text-[#3e2cdc] border-b-2 border-[#3e2cdc]"
                  : "text-[#464556] hover:text-[#3e2cdc]"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="https://apps.apple.com/us/app/rena-cosmetic-surgery-care/id6761738432"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full border border-white/10 hover:brightness-110 active:scale-95 transition-all"
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
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="flex items-center overflow-hidden relative"
      style={{ backgroundColor: "#584cf4", minHeight: "100svh", paddingTop: "72px" }}
    >
      <div className="py-8 md:py-10 px-5 md:px-10 max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8">

          {/* Left — copy */}
          <div className="w-full md:w-[55%] text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <img src={A.icon} alt="Rena" className="w-11 h-11 rounded-full shadow-lg" />
              <span className="font-bold text-white text-lg tracking-wide">rena</span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-white mb-4 font-semibold leading-[1.08] md:max-w-xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Everyday support for your aesthetic journey
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-4 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Join others using Rena to navigate recovery with confidence and expert AI guidance.
            </p>
            <p className="text-white/45 text-xs font-medium mb-7 tracking-wide text-center md:text-left">
              BBL · Rhinoplasty · Tummy Tuck · Breast Augmentation · Mommy Makeover · and more
            </p>
            <a
              href="https://apps.apple.com/us/app/rena-cosmetic-surgery-care/id6761738432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#584cf4] px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all"
            >
              Try it for free
            </a>
          </div>

          {/* Right — image */}
          <div className="w-full md:w-[45%] relative">
            <div className="relative w-full aspect-square max-w-[380px] md:max-w-[440px] mx-auto">
              <div className="w-full h-full overflow-hidden bg-white/10 p-2 rounded-full">
                <img
                  src={A.hero}
                  alt="Aesthetic wellness community"
                  className="w-full h-full object-cover rounded-full"
                  width="1152"
                  height="864"
                />
              </div>
              {/* Floating rating badge */}
              <div
                className="absolute bottom-10 -left-6 md:-left-10 bg-white px-3.5 py-3 rounded-[14px] shadow-2xl animate-float flex flex-col items-start gap-1"
                style={{ animationDelay: "-1s" }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FBBF24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-bold text-[#1b1b24] tracking-tight">App Store Rating</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#9e97fd] rounded-full opacity-30 blur-3xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Consultation Prep ───────────────────────────────────────────────────────

function PrepSection() {
  return (
    <section id="features" className="w-full pt-10 pb-0 md:pt-12 overflow-hidden" style={{ backgroundColor: "#F3EEFF" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Copy */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pb-16">
          <h2
            className="text-3xl md:text-4xl font-semibold text-black mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-[#3e2cdc]">Prep</span> for Your Consultation
          </h2>
          <p className="text-base text-[#464556] mb-8 max-w-md leading-relaxed">
            Don't go in blind. Research procedures in-depth, understand costs, and get a list
            of expert questions tailored to your goals.
          </p>
          <div className="space-y-4 mb-8">
            {["Transparent Cost Estimates", "Personalized Questions"].map((item) => (
              <div key={item} className="flex items-center gap-3 justify-center md:justify-start">
                <span
                  className="material-symbols-outlined text-[#58CC02]"
                  style={{ fontSize: "18px", fontVariationSettings: '"wght" 700' }}
                >
                  check
                </span>
                <span className="text-sm font-bold text-[#1b1b24]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup — clips at bottom edge intentionally */}
        <div className="w-full md:w-1/2 flex justify-center relative self-end">
          <div className="relative w-full max-w-[480px] -translate-y-[52px]">
            <img src={A.prep} alt="Rena app consultation prep screen — procedure research and cost estimates for rhinoplasty, BBL, and more" className="w-full h-auto" loading="lazy" width="704" height="1524" />
            <div className="absolute top-1/4 -right-4 md:-right-6 bg-[#FFCE00] text-[#1b1b24] p-4 rounded-2xl shadow-lg rotate-12 font-bold text-sm text-center w-[140px]">
              50+ procedures covered
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Recovery Roadmap ────────────────────────────────────────────────────────

const roadmapSteps = [
  {
    n: 1,
    label: "Initial Stabilization",
    desc: "Focus on immediate post-op care, drainage management, and essential rest protocols.",
    style: "bg-[#3e2cdc] text-white",
  },
  {
    n: 2,
    label: "Early Pattern Detection",
    desc: "Log symptoms daily so Rena can identify if your healing is following the expected curve.",
    style: "bg-[#9e97fd] text-[#33298a]",
  },
  {
    n: 3,
    label: "Refinement & Return",
    desc: "Gradually reintroducing activities while monitoring swelling and tissue settling.",
    style: "bg-[#e4e1ee]/60 text-[#464556]",
  },
];

const dashedLine: React.CSSProperties = {
  background: "repeating-linear-gradient(to bottom, #c7c4d8 0, #c7c4d8 5px, transparent 5px, transparent 10px)",
};

function RoadmapSection() {
  return (
    <section className="w-full pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4" style={{ letterSpacing: "-0.02em" }}>
            <span className="text-[#3e2cdc]">Your</span> Personal Recovery Roadmap
          </h2>
          <p className="text-base text-[#464556] max-w-xl mx-auto">
            We break down complex recovery phases into manageable daily and weekly focus areas.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Phone */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[380px] overflow-hidden">
              <img src={A.roadmap} alt="Rena app recovery roadmap screen — personalized post-surgery healing phases" className="w-full h-auto -mt-[60px]" loading="lazy" width="853" height="1844" />
            </div>
          </div>

          {/* Steps */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 pb-20 mt-[230px]">
            {roadmapSteps.map((step, i) => (
              <div key={step.n} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold ${step.style}`}>
                    {step.n}
                  </div>
                  {i < roadmapSteps.length - 1 && (
                    <div className="w-0.5 h-20" style={dashedLine} />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#3e2cdc] mb-2">{step.label}</h4>
                  <p className="text-base text-[#464556]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Ask Rena ────────────────────────────────────────────────────────────────

const CHAT_CHIPS = [
  "What to ask at consultation?",
  "Recovery timeline",
  "Compare two procedures",
  "Risks & tradeoffs",
];

function AskRenaChat() {
  return (
    <div
      className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
      style={{ backgroundColor: "#1a1535" }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          Example Conversation
        </span>
      </div>

      {/* Messages */}
      <div className="px-6 pb-5 flex flex-col gap-4">
        {/* User message — right-aligned */}
        <div className="flex justify-end">
          <div
            className="max-w-[80%] px-5 py-4 rounded-2xl rounded-tr-sm text-white text-sm leading-relaxed font-medium"
            style={{ backgroundColor: "#7c4dff" }}
          >
            Am I normal to still have swelling at week 3 post BBL?
          </div>
        </div>

        {/* AI response — left-aligned */}
        <div className="flex justify-start">
          <div
            className="max-w-[92%] px-5 py-4 rounded-2xl rounded-tl-sm text-sm leading-relaxed"
            style={{ backgroundColor: "#2a2350", color: "rgba(255,255,255,0.88)" }}
          >
            Completely normal — week 3 is often when swelling feels most noticeable because the surgical numbing has fully worn off. What you're experiencing isn't a setback, it's the expected progression. Most visible swelling resolves by weeks 6–8, but subtle changes continue for up to 6 months.
          </div>
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="px-6 pb-6 flex flex-wrap gap-2">
        {CHAT_CHIPS.map((chip) => (
          <button
            key={chip}
            className="px-4 py-2 rounded-full text-xs font-medium border transition-colors"
            style={{
              borderColor: "rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.65)",
              backgroundColor: "transparent",
            }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

function AskRenaSection() {
  return (
    <section className="w-full py-24 md:py-32" style={{ backgroundColor: "#F3EEFF" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Chat window */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
            <AskRenaChat />
          </div>

          {/* Copy */}
          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6" style={{ letterSpacing: "-0.02em" }}>
              <span className="text-[#3e2cdc]">Ask</span> Rena Anything
            </h2>
            <p className="text-base text-[#464556] mb-8 max-w-md mx-auto md:mx-0">
              Get instant, supportive answers to your recovery concerns based on medical benchmarks.
              Your 24/7 recovery concierge.
            </p>
            <div className="flex flex-col gap-3">
              {["Natural Language Chat", "Symptom Checker", "Post-Op Recovery Q&A", "BBL, Rhinoplasty & Tummy Tuck, etc Support"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#1b1b24]">• {f}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Track Progress ──────────────────────────────────────────────────────────

function TrackSection() {
  return (
    <section className="w-full pt-5 md:pt-7 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Copy */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6" style={{ letterSpacing: "-0.02em" }}>
            <span className="text-[#3e2cdc]">Track</span> Your Progress
          </h2>
          <p className="text-base text-[#464556] mb-8 max-w-md mx-auto md:mx-0">
            Compare day-by-day healing with visual timelines and comparative logging. Stay on
            the curve with precision.
          </p>
          <ul className="space-y-4 max-w-sm mx-auto md:mx-0 mb-12">
            {["Side-by-side comparisons", "Swelling & comfort trends", "Week-by-week post-op milestones", "Procedure-specific recovery benchmarks"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="font-bold text-sm">•</span>
                <span className="font-bold text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phone */}
        <div className="w-full md:w-1/2 flex justify-center relative self-end -mb-40">
          <div className="relative w-full max-w-[416px]">
            <img src={A.tracking} alt="Rena app recovery progress tracking — day-by-day healing comparisons and swelling trends" className="w-full h-auto" loading="lazy" width="704" height="1524" />
            <div
              className="absolute bottom-44 -right-4 md:-right-6 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm"
              style={{ backgroundColor: "#3e2cdc" }}
            >
              98% Recovery
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Final CTA ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="px-5 md:px-10 pt-32 pb-24 max-w-7xl mx-auto">
      <div
        className="rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden"
        style={{ backgroundColor: "#3e2cdc" }}
      >
        {/* Background illustration */}
        <div className="absolute inset-0 z-0">
          <img src={A.ctaBg} alt="" className="w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" width="1184" height="864" />
        </div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          {/* Mascot */}
          <div
            className="w-24 h-24 mx-auto mb-8 bg-white p-2 rounded-3xl animate-float overflow-hidden"
            style={{ filter: "drop-shadow(0 10px 15px rgba(88,76,244,0.2))" }}
          >
            <img src={A.icon} alt="Rena" className="w-full h-auto rounded-2xl" />
          </div>

          <h2 className="text-4xl md:text-5xl mb-6 font-extrabold" style={{ letterSpacing: "-0.02em" }}>
            Start your journey today
          </h2>
          <p className="text-lg text-white mb-12 max-w-xl mx-auto font-semibold drop-shadow-sm">
            Your companion for aesthetic wellness is waiting. Download Rena for free and plan your next step.
          </p>

          {/* App Store badge */}
          <div className="flex justify-center">
            <a
              href="https://apps.apple.com/us/app/rena-cosmetic-surgery-care/id6761738432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full border border-white/10 hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              {/* Apple logo */}
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 814 1000" fill="currentColor">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.8-157.3-120.8c-61.6-91.7-112.5-242.2-112.5-381.1 0-195.3 127.4-298.5 252.7-298.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] opacity-75 mb-0.5">Download on the</span>
                <span className="text-lg font-bold">App Store</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "How does Rena's AI guidance work?",
    a: "Rena's AI is built around procedure-specific recovery benchmarks. It analyzes your symptoms, logged milestones, and recovery timeline to deliver personalized daily guidance — and flags anything that may warrant a call to your surgeon.",
  },
  {
    q: "What procedures does Rena support?",
    a: "Rena currently supports major aesthetic procedures including BBLs, Mommy Makeovers, Tummy Tucks, Breast Augmentations, and Rhinoplasties, with more being added every month.",
  },
  {
    q: "Is Rena free to download?",
    a: "Yes — Rena is free to download on the App Store. Core features like consultation prep and your recovery roadmap are available immediately. A premium plan unlocks full access to AI-powered guidance, 24/7 chat support, and advanced recovery tracking.",
  },
  {
    q: "Is Rena a replacement for my doctor?",
    a: "No. Rena is a supportive companion designed to provide information and tracking between your scheduled appointments. You should always follow your surgeon's specific instructions and contact them for emergencies.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1b1b24]">Frequently asked questions</h2>
        </div>
        <div>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-[#c7c4d8] py-8">
              <button
                className="flex justify-between items-center w-full text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-xl md:text-2xl font-bold text-[#1b1b24]">{item.q}</span>
                <span
                  className="material-symbols-outlined text-[#464556] shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  add
                </span>
              </button>
              {open === i && (
                <p className="mt-6 text-base text-[#464556] leading-relaxed">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="w-full py-12 px-5 md:px-10 border-t border-[#c7c4d8]/30 bg-[#f6f2ff]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Brand */}
        <div className="max-w-xs">
          <div className="flex items-center gap-3 mb-6">
            <img src={A.icon} alt="Rena" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-extrabold text-[#3e2cdc]">rena</span>
          </div>
          <p className="text-sm text-[#464556] mb-6 leading-relaxed">
            Your companion for aesthetic wellness. AI guidance that puts your safety and results first.
          </p>
          <div className="flex gap-4">
            {["public", "alternate_email"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3e2cdc] shadow-sm"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{icon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-[#1b1b24]">Platform</h5>
            <a href="#features" className="text-xs text-[#464556] hover:text-[#3e2cdc] transition-colors">Features</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-[#1b1b24]">Legal</h5>
            <a href="/privacy-policy" className="text-xs text-[#464556] hover:text-[#3e2cdc] transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-xs text-[#464556] hover:text-[#3e2cdc] transition-colors">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold uppercase tracking-widest text-xs text-[#1b1b24]">Social</h5>
            <a href="https://www.instagram.com/renaestheticslab/" target="_blank" rel="noopener noreferrer" className="text-xs text-[#464556] hover:text-[#3e2cdc] transition-colors">Instagram</a>
            <a href="https://www.tiktok.com/@renaestheticslab" target="_blank" rel="noopener noreferrer" className="text-xs text-[#464556] hover:text-[#3e2cdc] transition-colors">TikTok</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-[#c7c4d8]/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#464556] opacity-70">© 2026 Rena LLC. Your companion for aesthetic wellness.</p>
        <a href="/support" className="text-xs text-[#464556] hover:text-[#3e2cdc] transition-colors">Contact Support</a>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const Index = () => (
  <div
    className="min-h-screen"
    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#fcf8ff", color: "#1b1b24" }}
  >
    <Nav />
    <main>
      <HeroSection />
      <PrepSection />
      <RoadmapSection />
      <AskRenaSection />
      <TrackSection />
      <CTASection />
      <FAQSection />
    </main>
    <Footer />
  </div>
);

export default Index;
