import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const heroImages = [
  {
    src: "/lovable-uploads/3abbb9e1-bb75-4549-a0a7-616c8f9550c9.png",
    alt: "People gathered on a hilltop against blue sky with clouds"
  },
  {
    src: "/lovable-uploads/265cf478-2f23-4816-acec-f0660a0648e7.png",
    alt: "Circular architectural structure against cloudy sky"
  },
  {
    src: "/lovable-uploads/93719b27-d490-4ff3-8fdb-8730de57b018.png",
    alt: "Landscape view of a city skyline at sunset"
  },
  {
    src: "/lovable-uploads/a74bf87b-6393-4c50-8251-f2172c47e4eb.png",
    alt: "Silhouettes of people watching sunset from a viewpoint"
  }
];

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                {index === heroImages.length - 1 && (
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-40"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-30 text-white border-white hover:bg-white/20" />
        <CarouselNext className="absolute right-4 z-30 text-white border-white hover:bg-white/20" />
      </Carousel>
      
      {/* Navigation Bar */}
      <div className="absolute top-0 z-40 w-full">
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
    </div>
  );
};