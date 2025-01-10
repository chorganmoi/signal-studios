import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const heroImages = [
  {
    src: "/lovable-uploads/39fab2dc-949a-4902-861f-1d7e09428aba.png",
    alt: "Landscape view of a city skyline at sunset"
  },
  {
    src: "/lovable-uploads/650c0dfd-a035-4429-aade-b9accb64ba6b.png",
    alt: "Circular structure against cloudy sky"
  },
  {
    src: "/lovable-uploads/a7471a0e-a2c2-4add-8126-1ce944369826.png",
    alt: "Sunset view with silhouettes"
  },
  {
    src: "/lovable-uploads/bca683ed-1319-4f11-82cb-ea233c5c083d.png",
    alt: "Mountain landscape with dramatic sunset"
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