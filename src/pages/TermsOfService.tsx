import { Link } from "react-router-dom";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <div style={{ width: "60px", height: "1px", backgroundColor: "#C4929A", opacity: 0.4, marginBottom: "24px" }} />
          <p className="font-light" style={{ fontSize: "14px", color: "#B8A9AB", letterSpacing: "0.3px" }}>
            Renaissance Aesthetic &nbsp;·&nbsp; Last Updated: December 5, 2025
          </p>
        </div>

        {/* Intro */}
        <p className="font-light leading-relaxed mb-16" style={{ fontSize: "16px", lineHeight: "1.85", color: "#5C4448" }}>
          Please read these Terms of Service ("Terms") carefully before using the Renaissance Aesthetic mobile application (the "App"). These Terms govern your access to and use of our AI-powered cosmetic concierge service.
        </p>

        <div className="space-y-14">
          <Section number="1" title="Acceptance of Terms">
            <Body>By accessing or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the App.</Body>
          </Section>

          <Section number="2" title="Description of Service">
            <Body>Renaissance Aesthetic provides an AI-powered platform that offers personalized cosmetic and beauty product recommendations. Our service analyzes user preferences, skin characteristics, and beauty goals to suggest suitable products and routines.</Body>
          </Section>

          <Section number="3" title="User Accounts">
            <SubHeading>Account Registration</SubHeading>
            <Body>To use certain features of the App, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</Body>
            <SubHeading>Account Security</SubHeading>
            <Body>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</Body>
            <SubHeading>Account Termination</SubHeading>
            <Body>We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.</Body>
          </Section>

          <Section number="4" title="User Conduct">
            <Body>You agree not to use the App to:</Body>
            <List items={[
              "Violate any applicable laws or regulations",
              "Infringe upon the rights of others",
              "Upload or transmit harmful, offensive, or inappropriate content",
              "Attempt to gain unauthorized access to our systems or networks",
              "Interfere with or disrupt the App or servers",
              "Use the App for any commercial purpose without our written consent",
              "Impersonate any person or entity",
            ]} />
          </Section>

          <Section number="5" title="AI-Generated Recommendations">
            <Body>The recommendations provided by our AI technology are for informational purposes only and should not be considered as professional medical or dermatological advice. We recommend consulting with qualified healthcare professionals before making decisions about cosmetic products, especially if you have allergies, sensitivities, or skin conditions.</Body>
          </Section>

          <Section number="6" title="Intellectual Property">
            <SubHeading>Our Content</SubHeading>
            <Body>All content, features, and functionality of the App, including but not limited to text, graphics, logos, images, and software, are owned by Renaissance Aesthetic or its licensors and are protected by copyright, trademark, and other intellectual property laws.</Body>
            <SubHeading>User Content</SubHeading>
            <Body>By uploading photos or other content to the App, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and process such content solely for the purpose of providing our services to you.</Body>
          </Section>

          <Section number="7" title="Third-Party Products and Services">
            <Body>The App may contain links to third-party websites or recommend third-party products. We do not endorse or assume responsibility for any third-party products, services, or websites. Your interactions with third parties are solely between you and the third party.</Body>
          </Section>

          <Section number="8" title="Disclaimers">
            <Body>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</Body>
            <Body>We do not warrant that the App will be uninterrupted, error-free, or free from viruses or other harmful components. We do not guarantee the accuracy, completeness, or usefulness of any recommendations or information provided through the App.</Body>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <Body>TO THE MAXIMUM EXTENT PERMITTED BY LAW, RENAISSANCE AESTHETIC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.</Body>
            <Body>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.</Body>
          </Section>

          <Section number="10" title="Indemnification">
            <Body>You agree to indemnify, defend, and hold harmless Renaissance Aesthetic and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of your use of the App, violation of these Terms, or violation of any rights of another.</Body>
          </Section>

          <Section number="11" title="Changes to Terms">
            <Body>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms in the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes your acceptance of the modified Terms.</Body>
          </Section>

          <Section number="12" title="Governing Law">
            <Body>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].</Body>
          </Section>

          <Section number="13" title="Severability">
            <Body>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</Body>
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
