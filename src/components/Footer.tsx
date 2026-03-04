export const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-5 py-14 px-8"
      style={{ backgroundColor: "#3D2B2E" }}
    >
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="rgba(255,248,246,0.2)" strokeWidth="1" fill="none"/>
        <circle cx="20" cy="20" r="12" stroke="rgba(255,248,246,0.25)" strokeWidth="0.8" fill="none"/>
        <circle cx="20" cy="20" r="7" stroke="rgba(196,146,154,0.5)" strokeWidth="1" fill="none"/>
        <circle cx="20" cy="20" r="2" fill="rgba(196,146,154,0.6)"/>
      </svg>
      <p
        className="font-sans font-light text-center"
        style={{ fontSize: "12px", color: "rgba(255,248,246,0.35)", letterSpacing: "1px" }}
      >
        © 2025 Rena Aesthetic Lab. All rights reserved.
      </p>
    </footer>
  );
};
