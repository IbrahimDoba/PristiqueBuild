import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import HeroSection from "./components/HeroSection";
import QuickFacts from "./components/QuickFacts";
import AboutProject from "./components/AboutProject";
import FeaturesSection from "./components/FeatureSection";
import EstateGallery from "./components/EstateGallery";
import LocationSection from "./components/LocationSections";
import PricingSection from "./components/PricingSections";
import TimelineSection from "./components/TimeLineSection";
// import ContactSection from "./components/ContactSections";

export const metadata: Metadata = {
  title: "Opulence Heights – Nigeria's First Smart Steel Residential Estate | Pristiq Build",
  description: "Revolutionary smart-living estate in Dawaki Hillside, Abuja. 18 smart villas with Light Gauge Steel construction, solar power, smart home controls, and EV charging. Joint venture by EFAB Properties and PristiqBuild.",
  keywords: [
    "Opulence Heights",
    "smart steel residential estate",
    "Dawaki Hillside Abuja",
    "Light Gauge Steel homes",
    "smart homes Nigeria",
    "solar-powered homes",
    "EV charging homes",
    "EFAB Properties",
    "PristiqBuild",
    "luxury villas Abuja",
    "smart home automation",
    "steel frame construction Nigeria",
  ],
  openGraph: {
    type: "website",
    title: "Opulence Heights – Nigeria's First Smart Steel Residential Estate",
    description: "18 smart villas in Dawaki Hillside, Abuja. LGS construction, solar power, smart controls, EV charging. Starting from ₦400M.",
    url: `${siteConfig.url}/projects/opulence-heights`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opulence.png`,
        width: 1200,
        height: 630,
        alt: "Opulence Heights – Nigeria's First Smart Steel Residential Estate",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opulence Heights – Smart Steel Residential Estate",
    description: "Nigeria's first smart steel residential estate. 18 villas with solar power, smart controls, and EV charging.",
    images: [`${siteConfig.url}/opulence.png`],
    creator: siteConfig.links.twitter,
  },
  alternates: {
    canonical: `${siteConfig.url}/projects/opulence-heights`,
  },
};

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
