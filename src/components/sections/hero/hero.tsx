"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/assets/logo2.jpg";
import { motion, AnimatePresence } from "motion/react";
const Hero = () => {
  return (
    <div className="hidden h-screen w-[100%] items-center justify-center bg-white max-lg:flex">
      <div className="text-txt flex max-w-[80%] flex-1 items-center justify-center max-lg:mt-[6%] max-lg:max-w-full max-lg:flex-col-reverse">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start from the left with some opacity
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and center
          transition={{ duration: 0.5 }} // Duration of the animation
          className="mb-8 flex flex-1 flex-col items-start max-lg:mb-1 max-lg:items-start max-lg:justify-center max-lg:p-3 max-lg:pl-[15%]"
        >
          <h1 className="mb-8 w-[90%] text-start text-6xl max-lg:text-center max-lg:text-5xl max-md:w-full max-md:text-start max-md:text-2xl max-md:font-bold">
            Building {"Nigeria's"} future, One module at a time.{" "}
          </h1>
          <p className="mb-8 w-[80%] text-start text-lg leading-loose max-lg:text-sm">
            Leading The Way In High Tech Modular Construction In Nigeria
          </p>
          {/* <div className="mb-8 w-[70%] justify-between flex ">
          <button className=" w-[150px] text-txt bg-acc py-2 px-4 rounded text-xl duration-200 hover:bg-transparent border border-pri max-md:mr-3">
            Contact us
          </button>
          {/* <button className="w-[170px] text-black bg-transparent border-acc border rounded duration-200 hover:bg-pri hover:text-sec py-2 px-4 text-xl">
            Meet the team
          </button> */}
          {/* </div>
        <span className="mb-8 opacity-90 text-md">
          All Our Projects are done by Experts
        </span> */}
        </motion.div>
        <div className="flex flex-1 flex-col items-center justify-center max-lg:mb-10 max-lg:w-[70%]">
          <Image
            className="max-lg:border-sec rounded-3xl"
            src={img1}
            alt="img"
          />
          {/* <div className="absolute bg-pri bottom-[20%] right-[8%] px-5 py-3 border-pri  border-2 rounded-md max-lg:hidden">
        <h2 className="text-5xl">200+</h2>
        <p className="text-sm">Capable Engineers</p>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
