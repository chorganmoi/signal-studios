import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <div id="about" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To create beautiful and functional web experiences that delight users
              and help businesses grow.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a leading force in web development, setting new standards
              for design and user experience.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};