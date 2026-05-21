import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const A = {
  icon: "/resources/AppIcon-rounded.png",
};

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
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
        <button onClick={() => navigate("/")} className="flex items-center gap-2">
          <img src={A.icon} alt="Rena" className="w-10 h-10 rounded-xl" />
        </button>
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: "Features", href: "/#features" },
            { label: "About", href: "/about" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-bold transition-colors ${
                label === "About"
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


export default function About() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: "#fcf8ff", color: "#1b1b24" }}
    >
      <Nav />

      {/* Page content */}
      <section className="max-w-3xl mx-auto px-5 md:px-10 pt-36 pb-20">

        {/* Title */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#9e97fd] mb-10">
          Meet the Founder
        </p>

        {/* Photo + bio row */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

          {/* Avatar */}
          <div className="shrink-0 mx-auto md:mx-0">
            <img
              src="/resources/founder.png"
              alt="Nu Le, Founder & CEO"
              className="w-40 h-40 rounded-full object-cover object-top"
            />
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#1b1b24] mb-1" style={{ letterSpacing: "-0.01em" }}>
              Nu Le
            </h2>
            <p className="text-sm text-[#9e97fd] font-semibold mb-5">Founder & CEO · Rena Aesthetic Lab</p>
            <div className="space-y-4 text-[#464556] leading-relaxed text-base">
              <p>
                I'm Nu — a product-oriented software engineer who spent years building cross-functional
                products at Atlassian. When I went through my own aesthetic wellness journey, I was
                shocked by how disorganized and inaccessible it all was — predatory practices, conflicting
                information, and almost no trustworthy guidance to lean on.
              </p>
              <p>
                The idea for Rena came from a real gap I witnessed — people undergoing cosmetic procedures
                with almost no support between surgeon appointments. No reliable way to know if what they
                were feeling was normal. No one to ask at anytime of day.
              </p>
              <p>
                So I built Rena: an AI-powered concierge that guides you through every stage of your
                aesthetic journey — from researching procedures to recovering with confidence. I'm
                grateful for every user who trusts Rena with their journey.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-[#c7c4d8]/30 bg-[#f6f2ff] py-8 px-5 md:px-10 text-center">
        <p className="text-xs text-[#464556] opacity-60">© 2026 Rena LLC · New York, NY</p>
      </footer>
    </div>
  );
}
