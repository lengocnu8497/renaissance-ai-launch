import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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
    body: "Placeholder — update with final copy that celebrates patient uniqueness and the beauty of every age.",
  },
  {
    src: "/resources/u8193442918_the_hand_gently_massage_the_woman_face_warm_light_1d1cf52e-e114-4324-84a3-45a160064812_0.mp4",
    bg: "#FFF8F6",
    blendTo: "#3D2B2E",
    textSide: "left" as const,
    eyebrow: "Aesthetic Wellness",
    heading: "Aesthetic care is self-care.",
    body: "Placeholder — update with final copy about prioritizing wellness and how aesthetic health is a form of health.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {SECTIONS.map((section, i) => (
        <VideoSection key={i} {...section} />
      ))}
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
