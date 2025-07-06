
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { Founders } from "@/components/Founders";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Founders />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
