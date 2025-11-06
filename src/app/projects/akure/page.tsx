import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import HeroSection from "./components/HeroSection";
import ProjectOverview from "./components/ProjectOverview";
import ScopeSection from "./components/ScopeSection";
import ExecutionSection from "./components/ExecutionSection";
import ResultsSection from "./components/ResultsSection";
import GallerySection from "./components/GallerySection";
import HighlightsSection from "./components/HighlightsSection";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Akure Light Gauge Steel Roofing Project | Pristiq Build",
  description: "One of Pristiq Build's largest LGS roofing projects in Ondo State. 1,080 sqm castle-style residence with 6.8 tons of precision-engineered steel. 75% waste reduction, completed in record time.",
  keywords: [
    "Akure roofing project",
    "Light Gauge Steel roofing Ondo State",
    "LGS truss system Nigeria",
    "large-scale steel roofing",
    "G550 steel construction",
    "castle-style residence roofing",
    "960 C-channels",
    "980 purlins",
    "Pristiq Build Akure",
    "steel roofing contractors Nigeria",
  ],
  openGraph: {
    type: "website",
    title: "Akure Light Gauge Steel Roofing Project | Pristiq Build",
    description: "Largest LGS roofing project: 1,080 sqm castle-style residence in Ondo State. 6.8 tons of precision-engineered steel, 75% waste reduction.",
    url: `${siteConfig.url}/projects/akure`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/osun/osun1.jpg`,
        width: 1200,
        height: 630,
        alt: "Akure Light Gauge Steel Roofing Project",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akure Light Gauge Steel Roofing Project",
    description: "1,080 sqm LGS roofing project with 6.8 tons of precision-engineered steel. 75% waste reduction.",
    images: [`${siteConfig.url}/osun/osun1.jpg`],
    creator: siteConfig.links.twitter,
  },
  alternates: {
    canonical: `${siteConfig.url}/projects/akure`,
  },
};

const Akure = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectOverview />
      <ScopeSection />
      <ExecutionSection />
      <ResultsSection />
      <GallerySection />
      <HighlightsSection />
      <CTASection />
    </div>
  );
};

export default Akure;

