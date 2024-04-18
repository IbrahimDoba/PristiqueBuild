"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const VideoBgSection = ({ isVisible }: any) => {
  const [windowWidth, setWindowWidth] = useState(1110); // Initialize with a default value

  useEffect(() => {
     // Check if window is defined (i.e., we're in the browser)
     if (typeof window !== 'undefined') {
       const handleResize = () => setWindowWidth(window.innerWidth);
       window.addEventListener('resize', handleResize);
 
       // Cleanup function to remove the event listener
       return () => window.removeEventListener('resize', handleResize);
     }
  }, []);
  return (
    <header
      className={`${
        windowWidth < 1000
          ? "hidden"
          : "relative  flex items-center justify-center h-screen  overflow-hidden w-full"
      } `}
    >
      <div className="relative w-[650px] z-30 p-5 text-2xl text-txt  bg-opacity-50 rounded-xl  right-[20%] mr-[15%] bottom-[0%] max-md:ml-5 max-md:w-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start from the left with some opacity
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and center
          transition={{ duration: 0.5 }} // Duration of the animation
          className="flex  flex-1 flex-col  items-start mb-8 max-lg:mb-1 max-lg:p-3 max-lg:items-start max-lg:justify-center max-lg:pl-[15%]    "
        >
          <h1 className=" w-[90%] text-6xl text-start mb-8 max-lg:text-5xl max-lg:text-center max-md:text-start max-md:w-[70%] max-md:text-xl max-md:font-bold">
            Building {"Nigeria's"} future, One module at a time.{" "}
          </h1>
          <p className=" text-lg leading-loose mb-8 text-start w-[80%] max-lg:text-sm  max-md:hidden">
            Leading The Way In High Tech Modular Construction In Nigeria
          </p>
        </motion.div>
      </div>

      <video
        autoPlay
        muted
        loop
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none  mb-[10%] max-md:w-[50%] max-md:h-auto"
      >
        <source src={"/videos/logovid.mp4"} type="video/mp4" />
      </video>
    </header>
  );
};

export default VideoBgSection;
