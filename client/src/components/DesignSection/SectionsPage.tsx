"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionsData } from './designData';
import Design from './design';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ArrowRight 
} from "lucide-react";

const SectionsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, sectionsData.length - itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const currentItems = sectionsData.slice(currentIndex, currentIndex + itemsPerPage);
  const totalPages = Math.ceil(sectionsData.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.1,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 rounded-full border border-blue-200"
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 text-sm font-medium">OUR PROCESS</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How Pristiq
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Builds Excellence
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our systematic approach to construction that ensures quality, 
            efficiency, and innovation at every stage of your project.
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                currentIndex === 0 
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= sectionsData.length}
              className={`p-3 rounded-full border-2 transition-all duration-300 ${
                currentIndex + itemsPerPage >= sectionsData.length
                  ? 'border-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Page Indicator */}
          <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-blue-600">{currentPage}</span>
            <span className="text-sm text-gray-500">of {totalPages}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentIndex} // Force re-animation when page changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {currentItems.map((section, index) => (
              <motion.div
                key={`${section.id}-${currentIndex}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="h-full"
                >
                  <Design
                    id={section.id}
                    title={section.title}
                    image={section.image}
                    text={section.text}
                    link={section.link}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full bg-gray-200 rounded-full h-2 mb-8"
        >
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentPage / totalPages) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our proven process can bring your vision to life with 
              the highest quality and efficiency standards.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionsPage;