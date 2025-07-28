import { CheckCircle2 } from "lucide-react";

const features = [
  "Light Gauge Steel (50+ Year Structural Frame)",
  "Solar + Battery Energy with Inverter Backup", 
  "Smart Home Controls (Lighting, AC, Security)",
  "Double-Glazed Windows & Thermal Insulation",
  "EV Charging Ready",
  "Designer Kitchen with Stone Worktops",
  "Rooftop Lounges (Prestige Units)",
  "Clubhouse, Pool, Tennis Court",
  "RFID Access Control + CCTV Integration"
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Opulence Heights?
          </h2>
          
          <p className="text-xl text-center text-white/80 mb-16">
            Features & Lifestyle
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-lg font-medium">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-block p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
                💬 &quot;It&apos;s not just smart. It&apos;s engineered living.&quot;
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;