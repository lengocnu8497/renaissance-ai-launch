import { Link } from "react-router-dom";

const APP_ICON = "/resources/AppIcon-rounded.png";

export default function PrivacyPolicy() {
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

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 md:px-12 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[4px] text-[#3e2cdc] mb-5">Legal</span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-[#464556]">Rena Aesthetic Lab &nbsp;</p>
        </div>

        <p className="text-base text-[#464556] leading-relaxed mb-14" style={{ lineHeight: "1.85" }}>
          This Privacy Policy describes how Rena Aesthetic Lab ("we," "us," or "our") collects, uses, and shares your personal information when you use our AI-powered cosmetic procedure concierge mobile application (the "App").
        </p>

        <div className="space-y-12">
          <Section number="1" title="Information We Collect">
            <SubHeading>Personal Information</SubHeading>
            <Body>We may collect personal information that you provide directly to us, including your name, email address, profile information, and any other information you choose to provide when using our App.</Body>
            <SubHeading>Photos and Images</SubHeading>
            <Body>Our App may request access to your device camera and photo library to provide personalized recovery tracking. Images you upload are processed to support your post-procedure journey.</Body>
            <SubHeading>Usage Data</SubHeading>
            <Body>We automatically collect certain information about your device and how you interact with our App, including device type, operating system, unique device identifiers, IP address, app features accessed, and usage patterns.</Body>
            <SubHeading>AI Interaction Data</SubHeading>
            <Body>We collect information about your interactions with our AI-powered features, including queries, symptoms logged, recovery milestones, and guidance received.</Body>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <Body>We use the information we collect to:</Body>
            <List items={[
              "Provide, maintain, and improve our AI-powered recovery concierge services",
              "Generate personalized recovery guidance based on your procedure and timeline",
              "Analyze and enhance the accuracy of our AI algorithms",
              "Communicate with you about your account and our services",
              "Send you updates, recovery reminders, and other information (with your consent)",
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

        <div className="mt-20 pt-10 border-t border-[#c7c4d8]/30">
          <p className="text-xs text-[#464556] opacity-70">© 2026 Rena LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-xs font-bold text-[#3e2cdc] shrink-0">{number.padStart(2, "0")}</span>
        <h2 className="text-xl md:text-2xl font-semibold text-[#1b1b24]">{title}</h2>
      </div>
      <div className="pl-0 md:pl-9 space-y-4">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#3e2cdc] mt-5 mb-2">
      {children}
    </p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-[#464556]" style={{ lineHeight: "1.85" }}>
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-[#464556]" style={{ lineHeight: "1.8" }}>
          <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-[#3e2cdc] block" />
          {item}
        </li>
      ))}
    </ul>
  );
}
