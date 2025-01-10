import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
      
      {/* Navigation Bar */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Signal Studios</h1>
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn("text-white hover:text-accent transition-colors")}
                    href="/journal"
                  >
                    Journal
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn("text-white hover:text-accent transition-colors")}
                    href="/gallery"
                  >
                    Gallery
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn("text-white hover:text-accent transition-colors")}
                    href="#about"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      {/* Hero Content */}
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
              onClick={() => document.getElementById("field-research")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Research
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