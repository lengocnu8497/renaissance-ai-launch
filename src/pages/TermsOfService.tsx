import { Link } from "react-router-dom";

const APP_ICON = "/resources/AppIcon-rounded.png";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-[#464556]">Rena Aesthetic Lab &nbsp;</p>
        </div>

        <p className="text-base text-[#464556] leading-relaxed mb-14" style={{ lineHeight: "1.85" }}>
          Please read these Terms of Service ("Terms") carefully before using the Rena Aesthetic Lab mobile application (the "App"). These Terms govern your access to and use of our AI-powered cosmetic procedure recovery concierge.
        </p>

        <div className="space-y-12">
          <Section number="1" title="Acceptance of Terms">
            <Body>By accessing or using the App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the App.</Body>
          </Section>

          <Section number="2" title="Description of Service">
            <Body>Rena Aesthetic Lab provides an AI-powered platform that offers personalized recovery guidance for cosmetic procedure patients. Our service analyzes your procedure type, recovery timeline, and logged symptoms to provide daily support, milestone tracking, and consultation preparation tools.</Body>
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

          <Section number="5" title="AI-Generated Guidance">
            <Body>The recovery guidance and information provided by our AI is for informational and supportive purposes only and does not constitute professional medical or clinical advice. Always follow your surgeon's specific post-operative instructions and contact your medical provider for emergencies or concerns about your health.</Body>
          </Section>

          <Section number="6" title="Intellectual Property">
            <SubHeading>Our Content</SubHeading>
            <Body>All content, features, and functionality of the App, including but not limited to text, graphics, logos, images, and software, are owned by Rena LLC or its licensors and are protected by copyright, trademark, and other intellectual property laws.</Body>
            <SubHeading>User Content</SubHeading>
            <Body>By uploading photos or other content to the App, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and process such content solely for the purpose of providing our services to you.</Body>
          </Section>

          <Section number="7" title="Third-Party Products and Services">
            <Body>The App may contain links to third-party websites or reference third-party services. We do not endorse or assume responsibility for any third-party products, services, or websites. Your interactions with third parties are solely between you and the third party.</Body>
          </Section>

          <Section number="8" title="Disclaimers">
            <Body>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</Body>
            <Body>We do not warrant that the App will be uninterrupted or error-free. We do not guarantee the accuracy, completeness, or usefulness of any guidance or information provided through the App.</Body>
          </Section>

          <Section number="9" title="Limitation of Liability">
            <Body>TO THE MAXIMUM EXTENT PERMITTED BY LAW, RENA LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.</Body>
            <Body>IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.</Body>
          </Section>

          <Section number="10" title="Indemnification">
            <Body>You agree to indemnify, defend, and hold harmless Rena LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of your use of the App, violation of these Terms, or violation of any rights of another.</Body>
          </Section>

          <Section number="11" title="Changes to Terms">
            <Body>We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms in the App and updating the "Last Updated" date. Your continued use of the App after such changes constitutes your acceptance of the modified Terms.</Body>
          </Section>

          <Section number="12" title="Governing Law">
            <Body>These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts.</Body>
          </Section>

          <Section number="13" title="Severability">
            <Body>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</Body>
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
