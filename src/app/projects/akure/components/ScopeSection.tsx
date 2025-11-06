import { CheckCircle2 } from "lucide-react";

const scopeItems = [
  "960 C-channels (0.9mm, G550 steel)",
  "980 purlins (0.75mm)",
  "High-grade zinc and aluminium coatings for corrosion resistance",
  "Total material weight: approximately 6.8 tons of precision-engineered steel",
  "Main building with 7-meter span at king post",
  "Boys' quarters with 3-meter span for design continuity",
];

const ScopeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Scope of Work
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our mission was to replace traditional roofing materials with a fully engineered 
          <strong> Light Gauge Steel (LGS) roof frame</strong> — offering unmatched durability, 
          precision, and speed of installation.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The main building, with a span of <strong>7 meters at its king post</strong>, required 
          intricate structural design to ensure strength without excess weight. The boys&apos; 
          quarters, with a <strong>3-meter span</strong>, were constructed simultaneously to 
          maintain design continuity and project efficiency.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The framework included:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {scopeItems.map((item) => (
            <div
              key={item}
              className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;

