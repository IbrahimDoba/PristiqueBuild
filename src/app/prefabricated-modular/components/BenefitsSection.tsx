"use client";
import { motion } from "motion/react";
import { Clock, DollarSign, Shield, Leaf, Zap, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "50% Faster Construction",
      description:
        "Reduce project timelines by up to 50% compared to traditional construction methods. Factory manufacturing runs parallel to site preparation, dramatically accelerating delivery.",
      color: "bg-blue-500",
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description:
        "Lower construction costs through reduced labor, minimized waste, and optimized material usage. Predictable pricing with fewer change orders and delays.",
      color: "bg-green-500",
    },
    {
      icon: Shield,
      title: "Superior Quality Control",
      description:
        "Factory-controlled environment ensures consistent quality standards. Rigorous testing and inspection at every stage of manufacturing guarantees excellence.",
      color: "bg-purple-500",
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description:
        "Reduced construction waste, lower carbon footprint, and energy-efficient materials. Modular construction is inherently more sustainable than traditional methods.",
      color: "bg-emerald-500",
    },
    {
      icon: Zap,
      title: "Reduced Site Disruption",
      description:
        "Minimal on-site construction activity means less noise, dust, and traffic disruption. Faster completion reduces impact on surrounding communities.",
      color: "bg-yellow-500",
    },
    {
      icon: Users,
      title: "Flexible & Scalable",
      description:
        "Easy to expand, modify, or relocate. Modular units can be added or removed as needs change, providing long-term flexibility for your project.",
      color: "bg-red-500",
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
              Why Choose Modular Construction?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Discover the advantages that make modular construction the smart
              choice for modern building projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full transform rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-100">
                  <div
                    className={`h-16 w-16 ${benefit.color} mb-6 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-primary mb-4 text-2xl font-bold">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-primary mt-20 rounded-2xl p-12 text-white"
          >
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold md:text-4xl">
                Modular Construction by the Numbers
              </h3>
              <p className="text-xl text-white/90">
                Real results from our modular construction projects
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-yellow-500 md:text-5xl">
                  50%
                </div>
                <p className="text-lg">Faster Construction</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-yellow-500 md:text-5xl">
                  30%
                </div>
                <p className="text-lg">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-yellow-500 md:text-5xl">
                  90%
                </div>
                <p className="text-lg">Less Waste</p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-yellow-500 md:text-5xl">
                  100+
                </div>
                <p className="text-lg">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
