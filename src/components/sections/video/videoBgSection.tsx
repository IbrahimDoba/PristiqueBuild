"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const VideoBgSection = ({ isVisible }: any) => {
  return (
    <header className="relative flex h-screen w-full items-center justify-center overflow-hidden max-lg:hidden">
      <div className="text-txt bg-opacity-50 relative right-[20%] bottom-[0%] z-30 mr-[15%] w-[650px] rounded-xl p-5 text-2xl max-md:ml-5 max-md:w-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start from the left with some opacity
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and center
          transition={{ duration: 0.5 }} // Duration of the animation
          className="mb-8 flex flex-1 flex-col items-start max-lg:mb-1 max-lg:items-start max-lg:justify-center max-lg:p-3 max-lg:pl-[15%]"
        >
          <h1 className="mb-8 w-[90%] text-start text-6xl max-lg:text-center max-lg:text-5xl max-md:w-[70%] max-md:text-start max-md:text-xl max-md:font-bold">
            Building {"Nigeria's"} future, One module at a time.{" "}
          </h1>
          <p className="mb-8 w-[80%] text-start text-lg leading-loose max-lg:text-sm max-md:hidden">
            Leading The Way In High Tech Modular Construction In Nigeria
          </p>
        </motion.div>
      </div>

      <video
        autoPlay
        muted
        loop
        className="absolute z-10 mb-[10%] min-h-full w-auto max-w-none min-w-full max-md:h-auto max-md:w-[50%]"
      >
        <source src={"/videos/logovid.mp4"} type="video/mp4" />
      </video>
    </header>
  );
};

export default VideoBgSection;
