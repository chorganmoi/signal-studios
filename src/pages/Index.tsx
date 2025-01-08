import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <About />
      <Features />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default Index;