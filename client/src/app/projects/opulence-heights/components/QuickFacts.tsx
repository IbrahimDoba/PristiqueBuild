"use client";
import {
  MapPin,
  Home,
  Hammer,
  Lightbulb,
  Battery,
  Car,
  Bed,
  Clock,
  CreditCard,
} from "lucide-react";

const facts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Dawaki Hillside, Abuja",
  },
  {
    icon: Home,
    label: "Units",
    value: "18 Smart Villas",
  },
  {
    icon: Hammer,
    label: "Construction",
    value: "Light Gauge Steel (LGS)",
  },
  {
    icon: Lightbulb,
    label: "Smart Living",
    value: "App-controlled lighting & AC",
  },
  {
    icon: Battery,
    label: "Power",
    value: "Solar + 48kWh Battery + Inverter",
  },
  {
    icon: Car,
    label: "EV Ready",
    value: "Cybertruck-capable Charger",
  },
  {
    icon: Bed,
    label: "Layout",
    value: "5 Ensuite Bedrooms + 1 BQ",
  },
  {
    icon: Clock,
    label: "Completion Timeline",
    value: "18 Months",
  },
  {
    icon: CreditCard,
    label: "Payment Plan",
    value: "12 Months Flexible",
  },
];

const QuickFacts = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Quick Facts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className=" rounded-2xl p-8 shadow-elegant hover:bg-secondary transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-xl group-hover:bg-yellow-500 transition-all duration-300">
                  <fact.icon className="w-6 h-6 " />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {fact.label}
                  </p>
                  <p className="text-lg font-bold text-foreground">
                    {fact.value}
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

export default QuickFacts;
