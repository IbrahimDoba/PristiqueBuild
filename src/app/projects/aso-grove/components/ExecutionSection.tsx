import Image from "next/image";

const ExecutionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Execution
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The replacement process required <strong>precision dismantling</strong> of 
              the old roof while maintaining the building&apos;s structural integrity.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Within <strong>three days</strong>, our specialized roofing team installed 
              the new Light Gauge Steel truss system, ensuring all connections, alignments, 
              and bracings met <strong>international engineering standards</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              To complete the system, we applied a <strong>polyurethane membrane</strong> — 
              sealing the structure from water ingress and heat transfer, effectively 
              improving the home&apos;s thermal performance and longevity.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-48 relative">
              <Image
                src="/asogrove/aso3.JPG"
                alt="LGS installation process"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-48 relative">
              <Image
                src="/asogrove/aso4.JPG"
                alt="Completed roof structure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;

