import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Creeping Thyme",
    price: "$12.99",
    image: "https://placehold.co/400x300",
    description: "Perfect for walkways and garden paths",
  },
  {
    id: 2,
    name: "Sedum",
    price: "$14.99",
    image: "https://placehold.co/400x300",
    description: "Drought-resistant succulent ground cover",
  },
  {
    id: 3,
    name: "Irish Moss",
    price: "$11.99",
    image: "https://placehold.co/400x300",
    description: "Soft, carpet-like ground cover",
  },
];

export const ProductShowcase = () => {
  return (
    <div id="products" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-4 h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-primary font-bold">{product.price}</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};