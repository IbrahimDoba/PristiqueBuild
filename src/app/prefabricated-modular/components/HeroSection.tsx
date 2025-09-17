"use client";
import { motion } from "motion/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lgs/lgs1.jpeg"
          alt="Modular Construction"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-5xl leading-tight font-bold md:text-7xl"
        >
          Prefabricated & Modular
          <br />
          <span className="text-yellow-500">Construction Solutions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-3xl text-xl text-white/90 md:text-2xl"
        >
          Revolutionizing construction with factory-built precision, faster
          delivery, and superior quality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="transform rounded-lg bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600">
            Explore Our Solutions
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-2 h-3 w-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
