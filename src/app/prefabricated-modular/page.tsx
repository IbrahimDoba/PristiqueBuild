import BenefitsSection from './components/BenefitsSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import HeroSection from './components/HeroSection';
import ProcessOverview from './components/ProcessOverview';
import ServiceOverview from './components/ServiceOverview';
;

export default function PrefabricatedModularPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceOverview />
      <ProcessOverview />
      <BenefitsSection />
      {/* <CaseStudies /> */}
      <FAQSection />
      <CTASection />
    </main>
  );
} 