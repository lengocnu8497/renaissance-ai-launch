import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Footer className="bg-zinc-800" />
    </div>;
};
export default Index;