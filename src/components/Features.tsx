import { Card } from "@/components/ui/card";
import { Laptop, Palette, Shield } from "lucide-react";

const features = [
  {
    title: "Modern Design",
    description: "Clean and contemporary design principles for the best user experience.",
    icon: Palette,
  },
  {
    title: "Responsive",
    description: "Perfectly adapted to work on all devices and screen sizes.",
    icon: Laptop,
  },
  {
    title: "Secure",
    description: "Built with security in mind to protect your data.",
    icon: Shield,
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-accent px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};