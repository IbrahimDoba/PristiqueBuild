import { Button } from "@/components/ui/button";
import { Download, DollarSign, Calendar, Gift } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Investment Opportunity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <DollarSign className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Starting Price</h3>
              <p className="text-3xl font-bold text-yellow-500">₦400M</p>
              <p className="text-white/80">per villa</p>
            </div>
            
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Calendar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Payment Plan</h3>
              <p className="text-xl font-bold">12 Months</p>
              <p className="text-white/80">Flexible terms available</p>
            </div>
            
            <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
              <Gift className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Early Bird Offer</h3>
              <p className="text-xl font-bold text-yellow-500">Save ₦40M</p>
              <p className="text-white/80">on full off-plan payment</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Invest Now?</h3>
            <ul className="text-left space-y-3 max-w-2xl mx-auto">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Pre-construction pricing advantage</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Choose your preferred unit location</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Customization options available</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Guaranteed appreciation in premium location</span>
              </li>
            </ul>
          </div>
          
          <Button variant="default" size="lg" className="text-lg px-8 py-6">
            <Download className="w-5 h-5" />
            Request Brochure & Payment Plan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;