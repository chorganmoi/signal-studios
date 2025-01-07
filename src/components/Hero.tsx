import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-6">
      <div className="text-center animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to My First Website
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          A beautiful space where design meets functionality. Built with modern web technologies
          and a passion for creating amazing user experiences.
        </p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-accent hover:text-primary"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};