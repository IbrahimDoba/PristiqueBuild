"use client";
import { motion } from "framer-motion";
import { Factory, Clock, Shield, Zap } from "lucide-react";

const ServiceOverview = () => {
  const highlights = [
    {
      icon: Factory,
      title: "Factory Precision",
      description: "Built in controlled environments for consistent quality",
    },
    {
      icon: Clock,
      title: "50% Faster",
      description: "Reduced construction time compared to traditional methods",
    },
    {
      icon: Shield,
      title: "Superior Quality",
      description:
        "Rigorous quality control throughout the manufacturing process",
    },
    {
      icon: Zap,
      title: "Cost Effective",
      description: "Reduced waste and optimized material usage",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
              The Future of Construction
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Prefabricated and modular construction represents a revolutionary
              approach to building that combines cutting-edge technology with
              time-tested construction principles. Our state-of-the-art
              manufacturing facilities produce precision-engineered building
              components in controlled environments, ensuring consistent quality
              while dramatically reducing construction timelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary mb-6">
                Why Choose Modular Construction?
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our modular construction process begins with comprehensive
                design and engineering, followed by precision manufacturing in
                our climate-controlled facilities. Each component is crafted to
                exact specifications, ensuring perfect fit and finish. The final
                assembly on-site is streamlined and efficient, minimizing
                disruption to surrounding areas while maximizing quality
                control.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From residential developments to commercial complexes, our
                modular solutions offer unparalleled flexibility,
                sustainability, and cost-effectiveness. We specialize in
                projects across Nigeria and West Africa, bringing world-class
                construction standards to every development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <img
                  src="/lgs/lgs2.jpeg"
                  alt="Modular Construction Factory"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
