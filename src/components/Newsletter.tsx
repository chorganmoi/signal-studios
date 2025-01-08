import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  return (
    <div className="bg-accent py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Stay updated with our latest products and gardening tips.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
          <Input
            type="email"
            placeholder="Enter your email"
            className="md:w-80"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </div>
  );
};