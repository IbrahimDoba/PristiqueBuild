import { CheckCircle2 } from "lucide-react";

const scopeItems = [
  "280 sqm total roof area",
  "Custom-designed steel trusses fabricated from G550-grade galvanized steel",
  "Polyurethane waterproofing layer for superior moisture protection",
  "High corrosion resistance through zinc and aluminium coatings",
  "Full installation completed in 72 hours",
  "Engineered to accommodate both durability and aesthetic appeal",
];

const ScopeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Scope of Work
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our team handled the full roofing solution — from removal of the existing 
          timber structure to installation of new steel trusses, waterproofing layers, 
          and roof sheets.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Key elements included:
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
        <div className="mt-8 p-6 bg-white rounded-xl border-l-4 border-primary">
          <p className="text-lg text-gray-700 leading-relaxed">
            The design was engineered to accommodate both durability and aesthetic 
            appeal, ensuring the structure complemented the luxury of Aso Grove&apos;s 
            environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;

