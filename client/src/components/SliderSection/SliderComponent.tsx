"use client";
import React, { useState, useEffect, useCallback } from "react";
import { SliderPropsType } from "./SliderData";
import { SliderData } from "./SliderData";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaCircle, FaRegCircle } from "react-icons/fa6";

const SliderComp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to move to the next slide
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
  }, []);

  // Function to move to the previous slide
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + SliderData.length) % SliderData.length
    );
  }, []);

  // Function to go to specific slide
  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(index);
  }, [currentImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Main Slider */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentImageIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <Image
            src={SliderData[currentImageIndex].image}
            alt={`Slide ${currentImageIndex}`}
            fill
            className="object-cover"
            priority={currentImageIndex === 0}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {SliderData[currentImageIndex].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed"
              >
                {SliderData[currentImageIndex].text}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 group"
      >
        <FaArrowLeft className="text-white text-lg md:text-xl group-hover:text-gray-200 transition-colors" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 group"
      >
        <FaArrowRight className="text-white text-lg md:text-xl group-hover:text-gray-200 transition-colors" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {SliderData.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className="p-2"
          >
            {index === currentImageIndex ? (
              <motion.div
                layoutId="activeDot"
                className="w-3 h-3 bg-white rounded-full"
              />
            ) : (
              <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white/75 transition-colors" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/50 z-20"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        key={currentImageIndex}
      />

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white text-sm font-medium">
          {currentImageIndex + 1} / {SliderData.length}
        </span>
      </div>
    </div>
  );
};

export default SliderComp;
