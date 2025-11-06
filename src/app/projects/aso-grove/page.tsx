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
  title: "Aso Grove Light Gauge Steel Roofing Project | Pristiq Build",
  description: "Complete roof transformation at Aso Grove Estate, Abuja. Replaced aging wooden truss with modern Light Gauge Steel (LGS) framework. 280 sqm roof area completed in 72 hours with polyurethane waterproofing.",
  keywords: [
    "Aso Grove roofing",
    "Light Gauge Steel roofing Abuja",
    "LGS roof replacement",
    "steel truss system Nigeria",
    "roofing contractors Abuja",
    "G550 steel roofing",
    "polyurethane waterproofing",
    "Pristiq Build projects",
  ],
  openGraph: {
    type: "website",
    title: "Aso Grove Light Gauge Steel Roofing Project | Pristiq Build",
    description: "Complete roof transformation at Aso Grove Estate, Abuja. Modern LGS framework replacing traditional timber. 280 sqm completed in 72 hours.",
    url: `${siteConfig.url}/projects/aso-grove`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/asogrove/aso1.JPG`,
        width: 1200,
        height: 630,
        alt: "Aso Grove Light Gauge Steel Roofing Project",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aso Grove Light Gauge Steel Roofing Project",
    description: "Complete roof transformation with modern LGS framework. 280 sqm completed in 72 hours.",
    images: [`${siteConfig.url}/asogrove/aso1.JPG`],
    creator: siteConfig.links.twitter,
  },
  alternates: {
    canonical: `${siteConfig.url}/projects/aso-grove`,
  },
};

const AsoGrove = () => {
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

export default AsoGrove;

