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
              Our skilled <strong>5-man team</strong> completed the project efficiently, with 
              meticulous attention to alignment, spacing, and load distribution. Through our 
              in-house cutting and assembly techniques, we reduced waste by{" "}
              <strong>75%</strong>, achieving both environmental and cost efficiency.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Despite the project&apos;s complexity, the structure was completed safely and 
              within schedule — a reflection of our commitment to{" "}
              <strong>innovation, precision, and sustainability</strong>.
            </p>
            <div className="mt-6 p-6 bg-gray-50 rounded-xl border-l-4 border-primary">
              <p className="text-lg text-gray-700 leading-relaxed">
                The precision engineering required for this large-scale project demonstrates 
                Pristiq Build&apos;s capability to handle complex roofing systems with 
                unmatched technical expertise.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-48 relative">
              <Image
                src="/osun/osun3.jpg"
                alt="LGS installation process"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-48 relative">
              <Image
                src="/osun/osun4.jpg"
                alt="Steel framework installation"
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

