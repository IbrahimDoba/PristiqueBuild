"use client";
import React from "react";
import { motion } from "framer-motion";

const VideoBgSection = ({ isVisible }: any) => {
  return (
    <header className="relative  flex items-center justify-center h-screen  overflow-hidden w-full">
      <div className="relative w-[550px] z-30 p-5 text-2xl text-txt  bg-opacity-50 rounded-xl  right-[10%] bottom-[20%]">
        <p className="text-amber-800 font-medium text-2xl">Our Story</p>
        <motion.div
          // whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 1.1 }}
          // drag="x"
          // dragConstraints={{ left: -100, right: 100 }}
        >
          <p>
            Welcome to Prestique Build, where innovation meets construction
            excellence. At Prestique Build, were not just building structures;
            were shaping the future of construction through our commitment to
            modular excellence.
          </p>
        </motion.div>
      </div>
      <div className="relative w-[550px] z-30 p-5 text-2xl text-txt  bg-opacity-50 rounded-xl left-[10%] top-[10%] ">
        <p>
          Founded with a vision to revolutionize the construction industry,
          Prestique Build stands at the forefront of cutting-edge modular
          construction solutions. With years of expertise and a passion for
          pushing boundaries, we have earned a reputation for delivering
          high-quality, sustainable, and cost-effective modular projects.
        </p>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-50"
      >
        <source src={"/videos/vid.mp4"} type="video/mp4" />
      </video>
    </header>
  );
};

export default VideoBgSection;
