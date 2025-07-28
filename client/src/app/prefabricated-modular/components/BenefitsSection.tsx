'use client';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Shield, Leaf, Zap, Users } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "50% Faster Construction",
      description: "Reduce project timelines by up to 50% compared to traditional construction methods. Factory manufacturing runs parallel to site preparation, dramatically accelerating delivery.",
      color: "bg-blue-500"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Lower construction costs through reduced labor, minimized waste, and optimized material usage. Predictable pricing with fewer change orders and delays.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Superior Quality Control",
      description: "Factory-controlled environment ensures consistent quality standards. Rigorous testing and inspection at every stage of manufacturing guarantees excellence.",
      color: "bg-purple-500"
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description: "Reduced construction waste, lower carbon footprint, and energy-efficient materials. Modular construction is inherently more sustainable than traditional methods.",
      color: "bg-emerald-500"
    },
    {
      icon: Zap,
      title: "Reduced Site Disruption",
      description: "Minimal on-site construction activity means less noise, dust, and traffic disruption. Faster completion reduces impact on surrounding communities.",
      color: "bg-yellow-500"
    },
    {
      icon: Users,
      title: "Flexible & Scalable",
      description: "Easy to expand, modify, or relocate. Modular units can be added or removed as needs change, providing long-term flexibility for your project.",
      color: "bg-red-500"
    }
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
              Why Choose Modular Construction?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that make modular construction the smart choice for modern building projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
            className="mt-20 bg-primary rounded-2xl p-12 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Modular Construction by the Numbers
              </h3>
              <p className="text-xl text-white/90">
                Real results from our modular construction projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">50%</div>
                <p className="text-lg">Faster Construction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">30%</div>
                <p className="text-lg">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">90%</div>
                <p className="text-lg">Less Waste</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">100+</div>
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