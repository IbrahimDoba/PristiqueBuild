import { Shield, Thermometer, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Maintenance-Free System",
    description: "A roofing system that requires minimal upkeep and provides long-term reliability.",
  },
  {
    icon: Thermometer,
    title: "Better Thermal Comfort",
    description: "Improved insulation and thermal performance for enhanced living comfort.",
  },
  {
    icon: TrendingUp,
    title: "Lifetime Durability",
    description: "Assurance of long-term structural integrity and property value protection.",
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
          The transformation was remarkable — the residence gained a lighter, stronger, 
          and more durable roof with minimal environmental waste.
        </p>
        <p className="text-lg mb-12 leading-relaxed text-white/80">
          The client now enjoys:
        </p>
        <div className="grid md:grid-cols-3 gap-8">
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
            This project stands as a testament to Pristiq Build&apos;s ability to blend 
            innovation, speed, and engineering precision into residential roofing solutions 
            that redefine modern Nigerian construction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

