import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#FFF8F6", color: "#3D2B2E" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-10 px-8 md:px-16 py-5 flex items-center justify-between" style={{ backgroundColor: "rgba(255,248,246,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(196,146,154,0.12)" }}>
        <Link to="/" className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[3px] transition-opacity hover:opacity-60" style={{ color: "#C4929A" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="#C4929A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to Home
        </Link>
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#C4929A" strokeWidth="1" fill="none"/>
          <circle cx="20" cy="20" r="12" stroke="#C4929A" strokeWidth="0.8" fill="none"/>
          <circle cx="20" cy="20" r="7" stroke="#8E4C5C" strokeWidth="1" fill="none"/>
          <circle cx="20" cy="20" r="2" fill="#C4929A"/>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 md:px-12 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="font-medium uppercase mb-4" style={{ fontSize: "11px", letterSpacing: "4px", color: "#C4929A" }}>Legal</p>
          <h1 className="font-serif font-light leading-tight mb-6" style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#3D2B2E" }}>
            Privacy Policy
          </h1>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C4929A", opacity: 0.4, marginBottom: "24px" }} />
          <p className="font-light" style={{ fontSize: "14px", color: "#B8A9AB", letterSpacing: "0.3px" }}>
            Renaissance Aesthetic &nbsp;·&nbsp; Last Updated: December 5, 2025
          </p>
        </div>

        {/* Intro */}
        <p className="font-light leading-relaxed mb-16" style={{ fontSize: "16px", lineHeight: "1.85", color: "#5C4448" }}>
          This Privacy Policy describes how Renaissance Aesthetic ("we," "us," or "our") collects, uses, and shares your personal information when you use our AI-powered cosmetic concierge service mobile application (the "App").
        </p>

        <div className="space-y-14">
          <Section number="1" title="Information We Collect">
            <SubHeading>Personal Information</SubHeading>
            <Body>We may collect personal information that you provide directly to us, including your name, email address, profile information, and any other information you choose to provide when using our App.</Body>
            <SubHeading>Photos and Images</SubHeading>
            <Body>Our App may request access to your device camera and photo library to provide personalized cosmetic recommendations. Images you upload are processed by our AI technology to analyze skin tone, features, and preferences.</Body>
            <SubHeading>Usage Data</SubHeading>
            <Body>We automatically collect certain information about your device and how you interact with our App, including device type, operating system, unique device identifiers, IP address, app features accessed, and usage patterns.</Body>
            <SubHeading>AI Interaction Data</SubHeading>
            <Body>We collect information about your interactions with our AI-powered features, including queries, preferences, product searches, and recommendations you receive.</Body>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <Body>We use the information we collect to:</Body>
            <List items={[
              "Provide, maintain, and improve our AI-powered cosmetic concierge services",
              "Generate personalized product recommendations and beauty advice",
              "Analyze and enhance the accuracy of our AI algorithms",
              "Communicate with you about your account and our services",
              "Send you updates, promotional materials, and other information (with your consent)",
              "Protect against fraud, unauthorized access, and other security issues",
            ]} />
          </Section>

          <Section number="3" title="How We Share Your Information">
            <Body>We do not sell your personal information. We may share your information in the following circumstances:</Body>
            <SubHeading>Service Providers</SubHeading>
            <Body>We may share information with third-party service providers who perform services on our behalf, such as cloud hosting, AI processing, analytics, and customer support.</Body>
            <SubHeading>Business Transfers</SubHeading>
            <Body>If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</Body>
            <SubHeading>Legal Requirements</SubHeading>
            <Body>We may disclose your information if required by law or in response to valid legal requests from public authorities.</Body>
          </Section>

          <Section number="4" title="Data Retention">
            <Body>We retain your personal information for as long as necessary to provide our services and fulfill the purposes described in this Privacy Policy. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.</Body>
          </Section>

          <Section number="5" title="Your Rights and Choices">
            <Body>Depending on your location, you may have certain rights regarding your personal information:</Body>
            <List items={[
              "Access and receive a copy of your personal information",
              "Correct inaccurate or incomplete information",
              "Delete your personal information",
              "Object to or restrict certain processing of your information",
              "Withdraw consent for data processing where we rely on your consent",
            ]} />
            <Body>To exercise these rights, please contact us using the information provided below.</Body>
          </Section>

          <Section number="6" title="Security">
            <Body>We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</Body>
          </Section>

          <Section number="7" title="Children's Privacy">
            <Body>Our App is not intended for children under the age of 18. We do not knowingly collect personal information from children under 18. If we learn that we have collected such information, we will take steps to delete it.</Body>
          </Section>

          <Section number="8" title="International Data Transfers">
            <Body>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country. We take appropriate safeguards to ensure your information remains protected.</Body>
          </Section>

          <Section number="9" title="Third-Party Links">
            <Body>Our App may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.</Body>
          </Section>

          <Section number="10" title="Changes to This Privacy Policy">
            <Body>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes your acceptance of the updated Privacy Policy.</Body>
          </Section>
        </div>

        {/* Footer rule */}
        <div className="mt-20 pt-10" style={{ borderTop: "1px solid rgba(196,146,154,0.15)" }}>
          <p className="font-light" style={{ fontSize: "13px", color: "#B8A9AB" }}>
            © 2026 Renaissance Aesthetic. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-serif font-light shrink-0" style={{ fontSize: "13px", color: "#C4929A", letterSpacing: "1px" }}>{number.padStart(2, "0")}</span>
        <h2 className="font-serif font-light" style={{ fontSize: "clamp(22px, 2.5vw, 28px)", color: "#3D2B2E" }}>{title}</h2>
      </div>
      <div className="pl-0 md:pl-8 space-y-4">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-medium uppercase mt-6 mb-2" style={{ fontSize: "11px", letterSpacing: "3px", color: "#8E4C5C" }}>
      {children}
    </p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-light leading-relaxed" style={{ fontSize: "15px", lineHeight: "1.85", color: "#5C4448" }}>
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 font-light" style={{ fontSize: "15px", lineHeight: "1.8", color: "#5C4448" }}>
          <span className="mt-2.5 shrink-0" style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C4929A", display: "inline-block" }} />
          {item}
        </li>
      ))}
    </ul>
  );
}
