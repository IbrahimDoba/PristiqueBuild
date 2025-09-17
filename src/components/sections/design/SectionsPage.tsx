"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { sectionsData } from "./designData";
import Design from "./design";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";

const SectionsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, sectionsData.length - itemsPerPage),
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const currentItems = sectionsData.slice(
    currentIndex,
    currentIndex + itemsPerPage,
  );
  const totalPages = Math.ceil(sectionsData.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 px-4 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-2"
          >
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              OUR PROCESS
            </span>
          </motion.div>

          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            How Pristiq
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Builds Excellence
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Discover our systematic approach to construction that ensures
            quality, efficiency, and innovation at every stage of your project.
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`rounded-full border-2 p-3 transition-all duration-300 ${
                currentIndex === 0
                  ? "cursor-not-allowed border-gray-200 text-gray-400"
                  : "border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= sectionsData.length}
              className={`rounded-full border-2 p-3 transition-all duration-300 ${
                currentIndex + itemsPerPage >= sectionsData.length
                  ? "cursor-not-allowed border-gray-200 text-gray-400"
                  : "border-blue-200 text-blue-600 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Page Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-blue-600">
              {currentPage}
            </span>
            <span className="text-sm text-gray-500">of {totalPages}</span>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={currentIndex} // Force re-animation when page changes
          className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
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
                    transition: { duration: 0.3 },
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
          className="mb-8 h-2 w-full rounded-full bg-gray-200"
        >
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
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
            className="inline-block rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm"
          >
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Ready to Start Your Project?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
              Let&apos;s discuss how our proven process can bring your vision to
              life with the highest quality and efficiency standards.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionsPage;
