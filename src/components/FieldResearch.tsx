import { Card } from "@/components/ui/card";

const fieldWorkProjects = [
  {
    id: 1,
    title: "Urban Heat Island Mitigation",
    location: "Phoenix, Arizona",
    image: "https://placehold.co/600x400",
    description: "Studying the effectiveness of ground cover in reducing urban heat island effects",
  },
  {
    id: 2,
    title: "Erosion Control Study",
    location: "Colorado Rockies",
    image: "https://placehold.co/600x400",
    description: "Analyzing soil stability improvements with native ground cover species",
  },
  {
    id: 3,
    title: "Biodiversity Impact",
    location: "Pacific Northwest",
    image: "https://placehold.co/600x400",
    description: "Measuring increased biodiversity in areas with native ground cover",
  },
];

export const FieldResearch = () => {
  return (
    <section id="field-work" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Field Work
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Exploring the impact of ground cover solutions through rigorous field studies and real-world applications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fieldWorkProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-2">{project.location}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};