import { useState, useEffect } from "react";

const LogoDark = () => (
  <svg width="240" height="64" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#C4929A" strokeWidth="1.2" fill="none"/>
    <circle cx="30" cy="30" r="20" stroke="#C4929A" strokeWidth="1" fill="none"/>
    <circle cx="30" cy="30" r="12" stroke="#F2D7DB" strokeWidth="1.2" fill="none"/>
    <path d="M30 20 C36 20,40 24,40 30 C40 36,36 40,30 40" stroke="#C4929A" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <circle cx="30" cy="30" r="3" fill="#F2D7DB"/>
    <text x="70" y="26" fontFamily="Cormorant Garamond,serif" fontSize="18" fontWeight="400" fill="#FFFFFF">Rena Aesthetic</text>
    <text x="70" y="46" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="400" fill="#C4929A" letterSpacing="4">LAB</text>
  </svg>
);

const LogoLight = () => (
  <svg width="240" height="64" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="28" stroke="#C4929A" strokeWidth="1.2" fill="none"/>
    <circle cx="30" cy="30" r="20" stroke="#C4929A" strokeWidth="1" fill="none"/>
    <circle cx="30" cy="30" r="12" stroke="#8E4C5C" strokeWidth="1.2" fill="none"/>
    <path d="M30 20 C36 20,40 24,40 30 C40 36,36 40,30 40" stroke="#C4929A" strokeWidth="1" fill="none" strokeLinecap="round"/>
    <circle cx="30" cy="30" r="3" fill="#C4929A"/>
    <text x="70" y="26" fontFamily="Cormorant Garamond,serif" fontSize="18" fontWeight="400" fill="#3D2B2E">Rena Aesthetic</text>
    <text x="70" y="46" fontFamily="Outfit,sans-serif" fontSize="10" fontWeight="400" fill="#C4929A" letterSpacing="4">LAB</text>
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6"
      style={{
        backgroundColor: scrolled ? "rgba(255,248,246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <a href="#top">{scrolled ? <LogoLight /> : <LogoDark />}</a>

      <a
        href="#waitlist"
        className="text-[11px] font-medium uppercase tracking-[3px] px-6 py-2.5 rounded-full border transition-all duration-300"
        style={{
          color: scrolled ? "#3D2B2E" : "#FFF8F6",
          borderColor: scrolled ? "rgba(61,43,46,0.4)" : "rgba(255,248,246,0.5)",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.backgroundColor = scrolled ? "#3D2B2E" : "rgba(255,248,246,0.15)";
          el.style.color = scrolled ? "#FFF8F6" : "#FFF8F6";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.backgroundColor = "transparent";
          el.style.color = scrolled ? "#3D2B2E" : "#FFF8F6";
        }}
      >
        Join Waitlist
      </a>
    </nav>
  );
};
