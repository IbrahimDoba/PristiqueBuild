import Image from "next/image";
import Link from "next/link";

export default function MaitamaLuxuryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
      {/* Hero Section */}
      <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
        <Image
          src="/roofs/roof04.jpg"
          alt="Maitama Luxury Mansion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Maitama Luxury Mansion – Colorado Street Roofing Project
          </h1>
          <div className="flex flex-wrap gap-4 text-white">
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Client:</strong> EMBEE Grand Realty
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Location:</strong> Colorado Street, Maitama, Abuja
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Completion:</strong> 4 Days
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Scope:</strong> Light Gauge Steel Roofing
            </span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          A Statement Home Deserved a Smarter Roof
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Tucked within the serene, tree-lined lanes of{" "}
              <strong>Colorado Street in Maitama</strong>, this high-end
              residential development—commissioned by{" "}
              <strong>EMBEE Grand Realty</strong>—was designed to be both
              elegant and enduring. The mansion features sweeping open-plan
              interiors, large glass panels, and refined detailing. However, the
              roof—spanning <strong>18 meters by 16 meters</strong>—needed to
              match the same standard of long-term reliability and precision.
            </p>
            <p className="text-xl font-medium text-gray-900">
              That&apos;s where Pristiq Build came in.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64 relative">
              <Image
                src="/roofs/roof01.jpg"
                alt="Luxury mansion exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why LGS Section */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why LGS Was the Clear Choice
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Originally planned as a traditional timber truss system, the
              project team quickly pivoted after encountering concerns around{" "}
              <strong>durability, termite resistance, and roof sagging</strong>
              —all too common in Nigeria&apos;s climate.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our <strong>Light Gauge Steel (LGS) trusses</strong> offered the
              perfect solution:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Structurally superior</strong> to wood, with longer
                spans and no warping
              </li>
              <li>
                <strong>Zinc-coated steel</strong> for rust and termite
                protection
              </li>
              <li>
                A <strong>fully dry, pre-fabricated system</strong>, installed
                in record time
              </li>
            </ul>
            <p className="mt-4 text-lg font-medium text-gray-900">
              The result? A beautiful, durable roof delivered in{" "}
              <strong>just four days</strong>—over
              <strong> 60% faster</strong> than timber alternatives.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white p-2 shadow-lg rounded-lg w-full h-64 relative">
              <Image
                src="/roofs/roof02.jpg"
                alt="LGS Truss System"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Edge */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          The Technical Edge
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The structure required{" "}
              <strong>13 precision-engineered trusses</strong>, custom designed
              and fabricated in-house at our LGS facility. Each truss was built
              using:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Galvanized cold-formed steel</strong>
              </li>
              <li>
                <strong>100mm member sections</strong> with{" "}
                <strong>1-inch thickness</strong>
              </li>
              <li>Precision screw and bolt connections (no welding)</li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our 4–6-person crew used automated tools—cutting, drilling,
              screwing, and bolting machines—to install the trusses with
              millimeter-level accuracy. The entire process was smooth, clean,
              and quiet—perfect for a high-end neighborhood like Maitama.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-40 relative">
              <Image
                src="/roofs/roof03.jpg"
                alt="Truss installation in progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden h-40 relative">
              <Image
                src="/roofs/roof07.jpg"
                alt="Close-up of steel connections"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="mb-16 bg-gray-900 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Innovation Meets Efficiency</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4 leading-relaxed">
              One of the project&apos;s standout features was{" "}
              <strong>speed</strong>:
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              While a timber system might have taken 10–12 days and needed
              onsite cutting and adjustments, our{" "}
              <strong>pre-cut, modular trusses</strong> were ready to assemble
              immediately on delivery. That speed didn&apos;t just save time—it
              reduced labor cost and minimized disruption on site.
            </p>
            <p className="text-lg leading-relaxed">
              From a project budget standpoint, the LGS system offered{" "}
              <strong>over 10% in cost savings</strong>, once installation time,
              maintenance concerns, and material waste were factored in.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full h-64">
              <Image
                src="/roofs/roof04.jpg"
                alt="Efficient installation process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Client Satisfaction
        </h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            EMBEE Grand Realty was especially pleased with the{" "}
            <strong>seamless execution</strong>, the{" "}
            <strong>clean installation</strong>, and the{" "}
            <strong>
              confidence of using a next-generation roofing system
            </strong>
            . In their words:
          </p>
          <blockquote className="border-l-4 border-gray-800 pl-4 italic text-xl text-gray-600 mb-4">
            &quot;The speed and quality of execution exceeded expectations.
            We&apos;re glad we made the switch to LGS.&quot;
          </blockquote>
        </div>
      </section>

      {/* Before & After */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Before & After
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The transformation speaks for itself. The original timber proposal
          posed limitations in design and longevity. With LGS, the final
          roofline is <strong>sleek, structurally sound</strong>, and
          future-proof—matching the modern, elevated aesthetics of the home it
          protects.
        </p>
      </section>

      {/* Looking Ahead */}
      <section className="bg-gray-50 p-8 rounded-xl">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Looking Ahead
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              For premium homes like this, <strong>LGS roofing</strong> is no
              longer a compromise—it&apos;s the standard.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pristiq Build continues to pioneer modular and smart construction
              in Abuja, bringing strength, speed, and style to every project.
            </p>
          </div>
          <div className="md:col-span-2">
            <Link href="/contact">
              <div className="bg-white p-3 shadow-lg rounded-lg">
                <div className="relative h-40">
                  <Image
                    src="/roofs/roof02.jpg"
                    alt="Future Pristiq Build projects"
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">
                    Ready for your next project?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Contact Pristiq Build today
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
