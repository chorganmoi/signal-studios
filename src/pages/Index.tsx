import { Hero } from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <Hero />
      
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light text-[#1A1F2C] mb-12 tracking-tight">
          Journal
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {posts.map((post, index) => (
            <Card key={index} className="border-none bg-transparent hover:bg-white/50 transition-colors duration-300 cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#8E9196]">{post.date}</p>
                  <h2 className="text-xl font-light text-[#1A1F2C]">{post.title}</h2>
                  <p className="text-[#8A898C] line-clamp-2">{post.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16 bg-[#C8C8C9]" />
        
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-light text-[#1A1F2C]">Subscribe to our Journal</h2>
          <p className="text-[#8A898C]">Stay updated with our latest stories, news, and insights.</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-[#C8C8C9] bg-transparent focus:outline-none focus:border-[#1A1F2C]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#1A1F2C] text-white hover:bg-[#2A2F3C] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

// Sample data for the journal posts
const posts = [
  {
    title: "Field Notes: Spring Collection",
    date: "March 15, 2024",
    excerpt: "Exploring the new season's inspirations and the stories behind our latest designs.",
    image: "/lovable-uploads/39fab2dc-949a-4902-861f-1d7e09428aba.png"
  },
  {
    title: "Behind the Scenes: Our Process",
    date: "March 10, 2024",
    excerpt: "A look into our creative journey and the craftsmanship that goes into each piece.",
    image: "/lovable-uploads/650c0dfd-a035-4429-aade-b9accb64ba6b.png"
  },
  {
    title: "Sustainable Practices",
    date: "March 5, 2024",
    excerpt: "Our commitment to environmental responsibility and ethical production methods.",
    image: "/lovable-uploads/a7471a0e-a2c2-4add-8126-1ce944369826.png"
  },
  {
    title: "Field Work: Documentary",
    date: "March 1, 2024",
    excerpt: "Documenting our journey through the landscapes that inspire our work.",
    image: "/lovable-uploads/bca683ed-1319-4f11-82cb-ea233c5c083d.png"
  }
];

export default Index;