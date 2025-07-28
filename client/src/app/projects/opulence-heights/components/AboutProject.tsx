import { Badge } from "@/components/ui/badge";

const AboutProject = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            About the Project
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-500 text-luxury-dark">
              EFAB Properties
            </Badge>
            <Badge variant="secondary" className="text-base px-4 py-2 bg-yellow-500 text-white">
              PristiqBuild
            </Badge>
            <Badge variant="outline" className="text-base bg-primary px-4 py-2 border-primary text-white">
              Joint Venture
            </Badge>
          </div>
          
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-xl leading-relaxed text-foreground mb-6">
              <strong className="text-primary">Opulence Heights</strong> is a revolutionary smart-living estate located in the elevated terrain of Dawaki Hillside, Abuja.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Developed through a joint venture between <span className="text-yellow-500 font-semibold">EFAB Properties</span> and <span className="text-primary font-semibold">PristiqBuild</span>, this project introduces Nigeria&apos;s first precision-built steel-frame homes with global standards in energy efficiency, automation, and infrastructure.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              From solar-powered systems to smart home controls and integrated security, each of the <span className="text-primary font-semibold">18 villas</span> represents a new benchmark for residential excellence in West Africa.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-secondary rounded-2xl border border-border">
            <blockquote className="text-2xl md:text-3xl font-bold text-primary text-center">
              &quot;It&apos;s not just smart. It&apos;s engineered living.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;