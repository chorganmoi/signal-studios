import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { FieldResearch } from "@/components/FieldResearch";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FieldResearch />
      <About />
      <Features />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Index;