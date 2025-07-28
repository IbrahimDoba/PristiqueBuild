import HeroSection from "./components/HeroSection";
import QuickFacts from "./components/QuickFacts";
import AboutProject from "./components/AboutProject";
import FeaturesSection from "./components/FeatureSection";
import EstateGallery from "./components/EstateGallery";
import LocationSection from "./components/LocationSections";
import PricingSection from "./components/PricingSections";
import TimelineSection from "./components/TimeLineSection";
// import ContactSection from "./components/ContactSections";

const OpulenceHeights = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickFacts />
      <AboutProject />
      <FeaturesSection />
      <EstateGallery />
      <LocationSection />
      <PricingSection />
      <TimelineSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default OpulenceHeights;
