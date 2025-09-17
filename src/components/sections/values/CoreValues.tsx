"use client";
import { motion } from "motion/react";
import {
  Lightbulb,
  Award,
  Leaf,
  TrendingUp,
  Shield,
  Heart,
} from "lucide-react";
import Link from "next/link";

const CoreValues = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      subtitle: "Pioneering Excellence",
      description:
        "We push the boundaries of construction technology, embracing cutting-edge methods and creative solutions that set new industry standards. Our innovative approach ensures we deliver projects that exceed expectations.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      delay: 0.1,
    },
    {
      icon: Award,
      title: "Quality",
      subtitle: "Uncompromising Standards",
      description:
        "Every project reflects our unwavering commitment to excellence. From premium materials to meticulous craftsmanship, we maintain the highest quality standards that stand the test of time.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      delay: 0.2,
    },
    {
      icon: Leaf,
      title: "Sustainability",
      subtitle: "Building Tomorrow",
      description:
        "We're committed to eco-friendly construction practices that protect our planet. Our sustainable approach reduces environmental impact while creating healthier, more efficient spaces for future generations.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
          </motion.div>

          <h2 className="mb-4 text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Our Foundation
          </h2>

          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Core Values That
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Drive Excellence
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            These fundamental principles guide every decision we make and every
            project we undertake, ensuring we deliver exceptional results that
            exceed expectations.
          </p>
        </motion.div>

        {/* Values Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div
                className={`${value.bgColor} relative h-full overflow-hidden rounded-2xl border border-gray-100 p-8 shadow-lg transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className={`h-32 w-32 bg-gradient-to-br ${value.color} absolute -top-16 -right-16 rounded-full`}
                  />
                  <div
                    className={`h-24 w-24 bg-gradient-to-br ${value.color} absolute -bottom-12 -left-12 rounded-full`}
                  />
                </div>

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className={`h-16 w-16 bg-gradient-to-br ${value.color} mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium tracking-wider text-gray-500 uppercase">
                    {value.subtitle}
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
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
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100"
            >
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </motion.div>
            <h4 className="mb-2 font-semibold text-gray-900">Growth Focused</h4>
            <p className="text-sm text-gray-600">
              Continuous improvement in everything we do
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
            >
              <Shield className="h-6 w-6 text-green-600" />
            </motion.div>
            <h4 className="mb-2 font-semibold text-gray-900">
              Trust & Reliability
            </h4>
            <p className="text-sm text-gray-600">
              Building lasting relationships through transparency
            </p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
            >
              <Heart className="h-6 w-6 text-red-600" />
            </motion.div>
            <h4 className="mb-2 font-semibold text-gray-900">Passion Driven</h4>
            <p className="text-sm text-gray-600">
              Love for what we do reflects in our work
            </p>
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
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
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

          <p className="mt-4 text-sm text-gray-500">
            Learn more about our journey and commitment to excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
