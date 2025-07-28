"use client";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Award, 
  Leaf, 
  TrendingUp, 
  Shield, 
  Heart 
} from "lucide-react";
import Link from "next/link";

const CoreValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      subtitle: "Pioneering Excellence",
      description: "We push the boundaries of construction technology, embracing cutting-edge methods and creative solutions that set new industry standards. Our innovative approach ensures we deliver projects that exceed expectations.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      delay: 0.1
    },
    {
      icon: Award,
      title: "Quality",
      subtitle: "Uncompromising Standards",
      description: "Every project reflects our unwavering commitment to excellence. From premium materials to meticulous craftsmanship, we maintain the highest quality standards that stand the test of time.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      delay: 0.2
    },
    {
      icon: Leaf,
      title: "Sustainability",
      subtitle: "Building Tomorrow",
      description: "We're committed to eco-friendly construction practices that protect our planet. Our sustainable approach reduces environmental impact while creating healthier, more efficient spaces for future generations.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full" />
          </motion.div>
          
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
            Our Foundation
          </h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Core Values That
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Drive Excellence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide every decision we make and every project we undertake, 
            ensuring we deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`${value.bgColor} rounded-2xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`w-32 h-32 bg-gradient-to-br ${value.color} rounded-full absolute -top-16 -right-16`} />
                  <div className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-full absolute -bottom-12 -left-12`} />
                </div>

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                    {value.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </motion.div>
            <h4 className="font-semibold text-gray-900 mb-2">Growth Focused</h4>
            <p className="text-sm text-gray-600">Continuous improvement in everything we do</p>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Shield className="w-6 h-6 text-green-600" />
            </motion.div>
            <h4 className="font-semibold text-gray-900 mb-2">Trust & Reliability</h4>
            <p className="text-sm text-gray-600">Building lasting relationships through transparency</p>
          </div>
          
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Heart className="w-6 h-6 text-red-600" />
            </motion.div>
            <h4 className="font-semibold text-gray-900 mb-2">Passion Driven</h4>
            <p className="text-sm text-gray-600">Love for what we do reflects in our work</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Discover Our Story</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
          
          <p className="text-gray-500 mt-4 text-sm">
            Learn more about our journey and commitment to excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
