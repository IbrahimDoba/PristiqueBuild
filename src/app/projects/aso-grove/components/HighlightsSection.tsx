import {
  MapPin,
  Ruler,
  Clock,
  Wrench,
  Droplets,
  Shield,
  User,
  CheckCircle,
} from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    label: "Location",
    value: "Aso Grove Estate, Abuja",
  },
  {
    icon: Wrench,
    label: "Project Type",
    value: "Roof Replacement (Timber → LGS)",
  },
  {
    icon: Ruler,
    label: "Roof Area",
    value: "280 sqm",
  },
  {
    icon: Clock,
    label: "Duration",
    value: "72 hours",
  },
  {
    icon: Shield,
    label: "Material",
    value: "G550 Light Gauge Steel",
  },
  {
    icon: Droplets,
    label: "Special Feature",
    value: "Polyurethane waterproofing layer",
  },
  {
    icon: User,
    label: "Client",
    value: "Private Residence Owner",
  },
  {
    icon: CheckCircle,
    label: "Status",
    value: "Completed",
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Key Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300">
                  <highlight.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1">
                    {highlight.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {highlight.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

