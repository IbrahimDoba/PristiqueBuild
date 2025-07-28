"use client"
import Image from "next/image";
import React from "react";
import vr1 from "../../../assets/vr1.jpg";
import vr2 from "../../../assets/vr2.jpg";
import vr3 from "../../../pagesAssets/img4.jpg";
import { motion } from "framer-motion";
import { 
  Eye, 
  Users, 
  Package, 
  Sparkles, 
  ArrowRight,
  Play
} from "lucide-react";

const FutureDesigns = () => {
  const features = [
    {
      icon: Eye,
      title: "Virtual Reality (VR)",
      subtitle: "Immersive Experience",
      description: "Step into the future with our cutting-edge VR technology. Experience your project in stunning detail before construction begins, allowing you to make informed decisions and visualize every aspect of your space.",
      image: vr1,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Client-Centric Design",
      subtitle: "Your Vision, Our Expertise",
      description: "Every design decision is guided by your unique needs and preferences. Our collaborative approach ensures that your vision becomes reality, creating spaces that perfectly reflect your lifestyle and aspirations.",
      image: vr2,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      delay: 0.2
    },
    {
      icon: Package,
      title: "Innovative Modular Design",
      subtitle: "Future of Construction",
      description: "Discover the revolutionary potential of modular construction. Our innovative approach combines efficiency, sustainability, and flexibility to create structures that adapt to your evolving needs.",
      image: vr3,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      delay: 0.3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50 py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-orange-100/80 backdrop-blur-sm rounded-full border border-orange-200"
          >
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-orange-600 text-sm font-medium">FUTURISTIC INNOVATION</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Experience the
            <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Future of Design
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step into tomorrow with our cutting-edge technologies and innovative approaches 
            that are revolutionizing the construction industry.
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
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
            >
              {/* Image Section */}
              <motion.div
                variants={imageVariants}
                className="flex-1 relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full opacity-60"
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-orange-600 font-medium">
                      {feature.subtitle}
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-700 leading-relaxed"
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
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book a consultation and discover how our innovative technologies can transform your vision into reality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-300"
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
