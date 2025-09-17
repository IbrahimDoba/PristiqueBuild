"use client";
import { motion } from "motion/react";
import { Factory, Clock, Shield, Zap } from "lucide-react";
import Image from "next/image";

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
    <section className="bg-white py-20">
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
              The Future of Construction
            </h2>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
              Prefabricated and modular construction represents a revolutionary
              approach to building that combines cutting-edge technology with
              time-tested construction principles. Our state-of-the-art
              manufacturing facilities produce precision-engineered building
              components in controlled environments, ensuring consistent quality
              while dramatically reducing construction timelines.
            </p>
          </motion.div>

          <div className="mb-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary mb-6 text-3xl font-bold">
                Why Choose Modular Construction?
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Our modular construction process begins with comprehensive
                design and engineering, followed by precision manufacturing in
                our climate-controlled facilities. Each component is crafted to
                exact specifications, ensuring perfect fit and finish. The final
                assembly on-site is streamlined and efficient, minimizing
                disruption to surrounding areas while maximizing quality
                control.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
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
              <div className="relative flex h-96 items-center justify-center rounded-2xl bg-gray-100 p-8">
                <Image
                  src="/lgs/lgs2.jpeg"
                  alt="Modular Construction Factory"
                  fill
                  className="rounded-xl object-cover"
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
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-gray-50 p-6 text-center transition-all duration-300 hover:bg-gray-100"
              >
                <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-primary mb-2 text-xl font-bold">
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
