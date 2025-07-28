'use client';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Lagos Business Complex",
      client: "TechCorp Nigeria",
      location: "Victoria Island, Lagos",
      image: "/assets/case-study-1.jpg",
      challenge: "TechCorp needed a modern office complex with 50,000 sq ft of space within 6 months to accommodate their growing team and meet investor deadlines.",
      solution: "We designed and manufactured a 3-story modular office complex with state-of-the-art facilities, including conference rooms, open workspaces, and recreational areas.",
      results: "Completed 40% ahead of schedule, 25% under budget, and achieved LEED Silver certification. The building was operational within 4 months.",
      stats: {
        size: "50,000 sq ft",
        timeline: "4 months",
        savings: "25% under budget"
      }
    },
    {
      title: "Abuja Residential Development",
      client: "GreenHomes Properties",
      location: "Wuse Zone 2, Abuja",
      image: "/assets/case-study-2.jpg",
      challenge: "GreenHomes required 20 luxury apartments with premium finishes and smart home technology, facing tight deadlines and budget constraints.",
      solution: "Implemented modular construction with custom interior finishes, integrated smart home systems, and energy-efficient design elements.",
      results: "Delivered all units 3 months early, achieved 30% cost savings, and received multiple awards for design excellence and sustainability.",
      stats: {
        size: "20 units",
        timeline: "8 months",
        savings: "30% cost reduction"
      }
    },
    {
      title: "Port Harcourt Industrial Facility",
      client: "PetroTech Industries",
      location: "Port Harcourt, Rivers State",
      image: "/assets/case-study-3.jpg",
      challenge: "PetroTech needed a specialized industrial facility with clean rooms, laboratories, and office spaces that could withstand harsh environmental conditions.",
      solution: "Designed modular units with reinforced structures, specialized HVAC systems, and corrosion-resistant materials suitable for industrial environments.",
      results: "Successfully delivered a facility that exceeded safety standards, reduced construction time by 60%, and provided significant operational cost savings.",
      stats: {
        size: "75,000 sq ft",
        timeline: "6 months",
        savings: "40% faster delivery"
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how our modular construction solutions have transformed projects across Nigeria
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
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-gray-600">{study.location}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-lg font-semibold text-gray-800 mb-6">
                      Client: {study.client}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Results:</h4>
                        <p className="text-gray-600">{study.results}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.stats.size}</div>
                        <div className="text-sm text-gray-600">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.stats.timeline}</div>
                        <div className="text-sm text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{study.stats.savings}</div>
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
            className="mt-20 bg-primary rounded-2xl p-12 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                What Our Clients Say
              </h3>
              <p className="text-xl text-white/90">
                Real feedback from satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-lg mb-4">
                  "PristiqBuild delivered our office complex ahead of schedule and under budget. The quality exceeded our expectations."
                </p>
                <div className="font-semibold">- TechCorp Nigeria CEO</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-lg mb-4">
                  "The modular approach saved us months of construction time and significantly reduced costs. Highly recommended!"
                </p>
                <div className="font-semibold">- GreenHomes Properties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <p className="text-lg mb-4">
                  "Exceptional quality and professional service. Our industrial facility was completed flawlessly."
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