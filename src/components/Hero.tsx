import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src="/lovable-uploads/39fab2dc-949a-4902-861f-1d7e09428aba.png"
        alt="Landscape view of a city skyline at sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      
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
    </div>
  );
};