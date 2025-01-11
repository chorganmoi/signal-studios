import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light text-[#1A1F2C] mb-12 tracking-tight">
          Gallery
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Card key={index} className="border-none bg-transparent hover:bg-white/50 transition-colors duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

const images = [
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

export default Gallery;