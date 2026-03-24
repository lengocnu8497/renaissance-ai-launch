import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatSection } from "@/components/StatSection";
import { AppShowcase } from "@/components/AppShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { VideoSection } from "@/components/VideoSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const SECTIONS = [
  {
    src: "/resources/u8193442918_34_up-close_face_portrait_of_a_young_and_old_POC__02b62de8-9d04-4f7d-8cc0-04e6edeb14d1_3.mp4",
    bg: "#F2D7DB",
    blendTo: "#FFF8F6",
    textSide: "right" as const,
    eyebrow: "Your Uniqueness",
    heading: "Youth meets individuality.",
    body: "You represent a history — your environment, your hormones, your habits, your genetics. Rena learns all of it, so every recommendation is built for you specifically, not someone who answered a quiz the same way you did.",
  },
  {
    src: "/resources/u8193442918_the_hand_gently_massage_the_woman_face_warm_light_1d1cf52e-e114-4324-84a3-45a160064812_0.mp4",
    bg: "#FFF8F6",
    textSide: "left" as const,
    eyebrow: "Aesthetic Wellness",
    heading: "Aesthetic care is self-care.",
    body: "Beauty isn't separate from how you feel. When you are taken care of the right way, it shows — not just on the surface. Rena is built around that idea: that looking like yourself, at your best, is its own kind of wellness.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AppShowcase />
      <HowItWorks />
      <VideoSection {...SECTIONS[0]} />
      <StatSection />
      <VideoSection {...SECTIONS[1]} />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
