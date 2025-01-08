import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://placehold.co/1920x1080.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sustainable Ground Cover Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your landscape with eco-friendly, low-maintenance ground cover options
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-accent hover:text-primary"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};