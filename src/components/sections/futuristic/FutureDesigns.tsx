"use client";
import Image from "next/image";
import vr1 from "@/assets/vr1.jpg";
import vr2 from "@/assets/vr2.jpg";
import vr3 from "@/assets/page/img4.jpg";
import { motion } from "motion/react";
import { Eye, Users, Package, Sparkles, ArrowRight, Play } from "lucide-react";

const FutureDesigns = () => {
  const features = [
    {
      icon: Eye,
      title: "Virtual Reality (VR)",
      subtitle: "Immersive Experience",
      description:
        "Step into the future with our cutting-edge VR technology. Experience your project in stunning detail before construction begins, allowing you to make informed decisions and visualize every aspect of your space.",
      image: vr1,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      delay: 0.1,
    },
    {
      icon: Users,
      title: "Client-Centric Design",
      subtitle: "Your Vision, Our Expertise",
      description:
        "Every design decision is guided by your unique needs and preferences. Our collaborative approach ensures that your vision becomes reality, creating spaces that perfectly reflect your lifestyle and aspirations.",
      image: vr2,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      delay: 0.2,
    },
    {
      icon: Package,
      title: "Innovative Modular Design",
      subtitle: "Future of Construction",
      description:
        "Discover the revolutionary potential of modular construction. Our innovative approach combines efficiency, sustainability, and flexibility to create structures that adapt to your evolving needs.",
      image: vr3,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 px-4 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 animate-pulse rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 animate-pulse rounded-full bg-amber-200/20 blur-3xl delay-1000" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-yellow-200/10 blur-2xl delay-500" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-orange-600">
              FUTURISTIC INNOVATION
            </span>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
            Experience the
            <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Future of Design
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Step into tomorrow with our cutting-edge technologies and innovative
            approaches that are revolutionizing the construction industry.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <motion.div
                variants={imageVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group relative flex-1"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Play Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
                      <Play className="ml-1 h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-80"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 h-6 w-6 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 opacity-60"
                />
              </motion.div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`h-16 w-16 bg-gradient-to-r ${feature.color} flex items-center justify-center rounded-2xl shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="font-medium text-orange-600">
                      {feature.subtitle}
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg leading-relaxed text-gray-700"
                >
                  {feature.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block rounded-2xl border border-orange-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Experience the Future?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
              Book a consultation and discover how our innovative technologies
              can transform your vision into reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureDesigns;
