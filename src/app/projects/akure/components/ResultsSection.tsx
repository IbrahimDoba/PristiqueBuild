import { Award, Shield, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Architecturally Striking",
    description: "A final structure that sets a new standard for modern steel roofing in Nigeria.",
  },
  {
    icon: Shield,
    title: "Lifetime Durability",
    description: "Long-term strength, beauty, and value through advanced LGS technology.",
  },
  {
    icon: TrendingUp,
    title: "75% Waste Reduction",
    description: "Environmental and cost efficiency through innovative construction techniques.",
  },
  {
    icon: Zap,
    title: "Record Time Completion",
    description: "Completed efficiently within schedule despite project complexity.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Results
        </h2>
        <p className="text-xl mb-8 leading-relaxed text-white/90">
          The final structure is not only durable but architecturally striking — setting a 
          new standard for modern steel roofing in Nigeria.
        </p>
        <p className="text-lg mb-12 leading-relaxed text-white/80">
          The client&apos;s vision of a lifetime roof was realized through Pristiq Build&apos;s 
          advanced LGS technology, ensuring long-term strength, beauty, and value.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">
                <benefit.icon className="w-12 h-12 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/80 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border-l-4 border-yellow-500">
          <p className="text-lg leading-relaxed">
            This project showcases Pristiq Build&apos;s ability to handle large-scale roofing 
            systems with unmatched technical precision — blending innovation, sustainability, 
            and craftsmanship to deliver results that last a lifetime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

