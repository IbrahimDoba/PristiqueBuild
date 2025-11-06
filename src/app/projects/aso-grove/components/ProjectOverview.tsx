import Image from "next/image";

const ProjectOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Project Overview
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Located in the prestigious <strong>Aso Grove Estate in Abuja</strong>, 
              this project was a complete roof transformation — replacing an aging 
              wooden truss system with a modern, precision-built{" "}
              <strong>Light Gauge Steel (LGS)</strong> framework.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The client, keen on achieving the best possible roofing solution for 
              long-term performance, requested a system that combined{" "}
              <strong>beauty, efficiency, and longevity</strong> — and that&apos;s 
              exactly what Pristiq Build delivered.
            </p>
            <p className="text-xl font-medium text-gray-900">
              A testament to innovation meeting traditional construction needs.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64 relative">
              <Image
                src="/asogrove/aso2.JPG"
                alt="Aso Grove Estate exterior"
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

export default ProjectOverview;

