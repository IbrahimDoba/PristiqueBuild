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
              The Akure project stands as one of Pristiq Build&apos;s{" "}
              <strong>largest and most technically challenging</strong> roofing works — 
              located in the serene heart of Ondo State. Commissioned by a Nigerian 
              client living abroad, the project involved delivering a{" "}
              <strong>massive castle-style residence</strong> and its adjoining boys&apos; 
              quarters with a combined roof area exceeding <strong>1,080 sqm</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              This ambitious project required precision engineering, innovative construction 
              techniques, and meticulous attention to detail to deliver a roofing system 
              that would stand the test of time.
            </p>
            <p className="text-xl font-medium text-gray-900">
              A showcase of large-scale LGS roofing excellence.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64 relative">
              <Image
                src="/osun/osun2.jpg"
                alt="Akure castle-style residence"
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

