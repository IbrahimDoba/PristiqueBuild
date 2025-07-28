import { Button } from "@/components/ui/button";
import { Download, Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-estate.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://koz5ylkurb.ufs.sh/f/VdVJXQsMkbnq56Ew6W07ORtYrS3iKsgudojvNWCMcLGkpZEb"
          alt="Opulence Heights Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-luxury opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Opulence Heights
            <span className="block text-accent text-3xl md:text-4xl lg:text-5xl mt-2">
              Dawaki Hillside, Abuja
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-luxury-light opacity-90">
            Nigeria&apos;s First Smart Steel Residential Estate
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button variant="default" size="lg" className="text-lg px-8 py-6">
              <Download className="w-5 h-5" />
              Download Brochure
            </Button>

            <Button variant="default" size="lg" className="text-lg px-8 py-6">
              <Calendar className="w-5 h-5" />
              Book a Private Viewing
            </Button>

            <Button
              variant="destructive"
              size="lg"
              className="text-lg px-8 py-6 border-white text-white hover:bg-destructive/70 hover:text-luxury-dark"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
