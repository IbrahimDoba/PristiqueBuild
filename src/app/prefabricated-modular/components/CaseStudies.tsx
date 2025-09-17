"use client";
import { motion } from "motion/react";
import { MapPin, Calendar, Users, Award } from "lucide-react";
import Image from "next/image";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Lagos Business Complex",
      client: "TechCorp Nigeria",
      location: "Victoria Island, Lagos",
      image: "/assets/case-study-1.jpg",
      challenge:
        "TechCorp needed a modern office complex with 50,000 sq ft of space within 6 months to accommodate their growing team and meet investor deadlines.",
      solution:
        "We designed and manufactured a 3-story modular office complex with state-of-the-art facilities, including conference rooms, open workspaces, and recreational areas.",
      results:
        "Completed 40% ahead of schedule, 25% under budget, and achieved LEED Silver certification. The building was operational within 4 months.",
      stats: {
        size: "50,000 sq ft",
        timeline: "4 months",
        savings: "25% under budget",
      },
    },
    {
      title: "Abuja Residential Development",
      client: "GreenHomes Properties",
      location: "Wuse Zone 2, Abuja",
      image: "/assets/case-study-2.jpg",
      challenge:
        "GreenHomes required 20 luxury apartments with premium finishes and smart home technology, facing tight deadlines and budget constraints.",
      solution:
        "Implemented modular construction with custom interior finishes, integrated smart home systems, and energy-efficient design elements.",
      results:
        "Delivered all units 3 months early, achieved 30% cost savings, and received multiple awards for design excellence and sustainability.",
      stats: {
        size: "20 units",
        timeline: "8 months",
        savings: "30% cost reduction",
      },
    },
    {
      title: "Port Harcourt Industrial Facility",
      client: "PetroTech Industries",
      location: "Port Harcourt, Rivers State",
      image: "/assets/case-study-3.jpg",
      challenge:
        "PetroTech needed a specialized industrial facility with clean rooms, laboratories, and office spaces that could withstand harsh environmental conditions.",
      solution:
        "Designed modular units with reinforced structures, specialized HVAC systems, and corrosion-resistant materials suitable for industrial environments.",
      results:
        "Successfully delivered a facility that exceeded safety standards, reduced construction time by 60%, and provided significant operational cost savings.",
      stats: {
        size: "75,000 sq ft",
        timeline: "6 months",
        savings: "40% faster delivery",
      },
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-primary mb-6 text-4xl font-bold md:text-5xl">
              Success Stories
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Real projects, real results. See how our modular construction
              solutions have transformed projects across Nigeria
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="group relative">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="h-96 w-full rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="bg-primary/20 absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="rounded-2xl bg-white p-8 shadow-lg">
                    <div className="mb-4 flex items-center gap-2">
                      <MapPin className="text-primary h-5 w-5" />
                      <span className="text-gray-600">{study.location}</span>
                    </div>

                    <h3 className="text-primary mb-2 text-3xl font-bold">
                      {study.title}
                    </h3>

                    <p className="mb-6 text-lg font-semibold text-gray-800">
                      Client: {study.client}
                    </p>

                    <div className="mb-6 space-y-4">
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">
                          Challenge:
                        </h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">
                          Solution:
                        </h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 font-bold text-gray-900">
                          Results:
                        </h4>
                        <p className="text-gray-600">{study.results}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                      <div className="text-center">
                        <div className="text-primary text-2xl font-bold">
                          {study.stats.size}
                        </div>
                        <div className="text-sm text-gray-600">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary text-2xl font-bold">
                          {study.stats.timeline}
                        </div>
                        <div className="text-sm text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-primary text-2xl font-bold">
                          {study.stats.savings}
                        </div>
                        <div className="text-sm text-gray-600">Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary mt-20 rounded-2xl p-12 text-white"
          >
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold">What Our Clients Say</h3>
              <p className="text-xl text-white/90">
                Real feedback from satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-4xl">⭐</div>
                <p className="mb-4 text-lg">
                  &ldquo;PristiqBuild delivered our office complex ahead of
                  schedule and under budget. The quality exceeded our
                  expectations.&rdquo;
                </p>
                <div className="font-semibold">- TechCorp Nigeria CEO</div>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">⭐</div>
                <p className="mb-4 text-lg">
                  &ldquo;The modular approach saved us months of construction
                  time and significantly reduced costs. Highly
                  recommended!&rdquo;
                </p>
                <div className="font-semibold">- GreenHomes Properties</div>
              </div>
              <div className="text-center">
                <div className="mb-4 text-4xl">⭐</div>
                <p className="mb-4 text-lg">
                  &ldquo;Exceptional quality and professional service. Our
                  industrial facility was completed flawlessly.&rdquo;
                </p>
                <div className="font-semibold">- PetroTech Industries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
