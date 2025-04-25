import Image from "next/image";
import Link from "next/link";

export default function BreezePointEstatePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
      {/* Hero Section */}
      <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
        <Image
          src="/breeze-point/breeze3.jpg"
          alt="Breeze Point Estate Exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Breeze Point Estate – Exclusive Living in F01, Kubwa, Abuja
          </h1>
          <div className="flex flex-wrap gap-4 text-white">
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Developer:</strong> Pristiq Build
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Location:</strong> F01 District, Kubwa, Abuja
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Status:</strong> Under Construction
            </span>
            <span className="bg-black/40 px-3 py-1 rounded-full text-sm">
              <strong>Units:</strong> 5 Luxury Terraces
            </span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Smart Living. Elegant Design. Thoughtful Craftsmanship.
        </h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              In the rising heart of Kubwa&apos;s prestigious{" "}
              <strong>F01 district</strong>, Breeze Point Estate emerges as a
              striking symbol of smart luxury living. Developed by{" "}
              <strong>Pristiq Build</strong>, this exclusive enclave features{" "}
              <strong>
                five (5) exquisitely built 4-bedroom terrace homes
              </strong>
              , combining timeless architectural elegance with forward-thinking
              construction technology.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With construction led entirely by our team, the project embodies
              everything Pristiq Build stands for:{" "}
              <strong>
                durability, energy-efficiency, structural precision, and modern
                aesthetics.
              </strong>
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="bg-gray-100 rounded-xl overflow-hidden h-64 relative">
              <Image
                src="/breeze-point/breeze2.jpg"
                alt="Luxury interior design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Construction System */}
      <section className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Construction System
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              While traditional blockwork forms the main structural shell, we
              integrated a{" "}
              <strong>Light Gauge Steel (LGS) roofing system</strong> to align
              with our commitment to innovative, efficient construction. The
              combination brings the best of both worlds:{" "}
              <strong>classic masonry robustness</strong> and{" "}
              <strong>future-proof roofing technology</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Foundation to Finish Construction:</strong> Executed
                fully in-house by Pristiq Build
              </li>
              <li>
                <strong>Roof System:</strong> 13 precision-fabricated LGS
                trusses | Installed in under 4 days
              </li>
              <li>
                <strong>Crew Size:</strong> 12-member core build team +
                specialized LGS installers
              </li>
              <li>
                <strong>Technology Used:</strong> LGS system (anti-rust,
                termite-resistant, precision-cut), smart HVAC readiness,
                LED-efficient lighting, and underground utility provision
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Unit Layout & Design */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Unit Layout & Design
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <div className="md:col-span-1">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Each terrace home offers a <strong>generous 280 sqm</strong> of
              living space, thoughtfully distributed across three levels:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Ground Floor:</strong> Open-plan living and dining, a
                premium kitchen, guest powder room, Guest Bedroom
              </li>
              <li>
                <strong>First Floor:</strong> Master suite with walk-in closet
                and en-suite, two family bedrooms
              </li>
              <li>
                <strong>Outdoor:</strong> Private garden space and dedicated
                2-car covered parking
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Premium Features
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Impressive windows maximizing natural light</li>
              <li>Custom kitchen cabinetry with stone countertops</li>
              <li>
                Solid core interior doors with sleek contemporary hardware
              </li>
              <li>Energy-efficient LED lighting throughout</li>
              <li>Smart-home ready infrastructure</li>
              <li>Integrated drainage, plumbing, and power-backup systems</li>
              <li>Professionally landscaped driveways and estate frontage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LGS Roofing Benefits */}
      <section className="mb-16 bg-gray-900 text-white p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-6">Why LGS for Roofing?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4 leading-relaxed">
              Breeze Point Estate is among the first luxury builds in F01 to
              implement a full <strong>LGS roofing system</strong>, offering:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Over 60% faster installation</strong> than traditional
                timber
              </li>
              <li>
                <strong>10% cost savings</strong> on roofing materials and labor
              </li>
              <li>
                <strong>Zero risk of rot, sagging, or termites</strong>
              </li>
              <li>
                <strong>Clean finish and long-term integrity</strong>
              </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              Each truss was built using{" "}
              <strong>zinc-coated 10cm profiles</strong>, installed by a 5-man
              team using{" "}
              <strong>
                cutting, drilling, screwing, and bolting machinery
              </strong>{" "}
              — delivering a quiet, non-intrusive install over just 4 days.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full h-64">
              <Image
                src="/breeze-point/breeze1.jpg"
                alt="LGS installation process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Strategic Location Advantage
        </h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Nestled within the serene yet accessible F01 district, Breeze Point
            is just minutes from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Shopping malls and local markets</li>
            <li>International schools and hospitals</li>
            <li>Major roadways connecting to central Abuja</li>
            <li>The city&apos;s newest and fastest growing investment zones</li>
          </ul>
        </div>
      </section>

      {/* Client Statement */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Client Statement
        </h2>
        <div className="bg-gray-50 p-8 rounded-xl">
          <blockquote className="border-l-4 border-gray-800 pl-4 italic text-xl text-gray-600 mb-4">
            &quot;We&apos;re excited to bring Breeze Point Estate to life in
            Kubwa&apos;s most sought-after district. Every detail — from
            foundation to final finish — reflects our dedication to building
            homes that last, function smartly, and stand out in value and
            beauty.&quot;
          </blockquote>
          <p className="text-right text-gray-700">
            — Yusuf Doba, CEO, Pristiq Build
          </p>
        </div>
      </section>

      {/* Project Status */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Project Status
        </h2>
        <div className="grid md:grid-cols-1 gap-8">
          <div>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>
                <strong>Status:</strong> Under Construction
              </li>
              <li>
                <strong>Completion Timeline:</strong> 9 Months (from
                commencement)
              </li>
              <li>
                <strong>Units Available:</strong> Only 3 Remaining
              </li>
              <li>
                <strong>Pricing:</strong> ₦130 Million per unit
              </li>
              <li>
                <strong>Payment Options:</strong> Full | Installments | Mortgage
                support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-50 p-8 rounded-xl">
       
        <div className="flex  gap-2">
          <div className="md:col-span-3 flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Interested in Breeze Point Estate?
        </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Don&apos;t miss the opportunity to own one of these exclusive
              terrace homes in Kubwa&apos;s premium F01 district.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pristiq Build continues to set the standard for innovative,
              quality construction in Abuja, bringing strength, efficiency, and
              style to every project.
            </p>
          </div>
          <div className=" flex-1">
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
