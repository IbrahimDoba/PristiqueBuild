"use client";
import Image from "next/image";
import React from "react";
import meeting from "@/assets/men mount.jpg";
import Link from "next/link";
import { motion } from "motion/react";
import { introLeftVariants } from "@/app/about/reuseComps";

const Aboutus = () => {
  return (
    <div
      id="about"
      className="bg-bg flex h-screen w-[100%] items-center justify-center max-lg:h-auto max-lg:flex-col"
    >
      <motion.div
        className="flex flex-1"
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introLeftVariants}
      >
        <Image src={meeting} alt="men mount" />
      </motion.div>
      <div className="ml-[8%] flex h-[60%] flex-1 flex-col items-start justify-around max-lg:my-[4%]">
        <p className="text-txt w-[70%] text-5xl font-semibold max-lg:my-[2%] max-lg:text-3xl max-md:text-lg">
          At Pristiq Build, we’re proud to build outside the box and do things
          differently.
        </p>
        <p className="w-[70%] max-lg:my-[2%] max-md:w-[90%]">
          While we’re traditional about many things – good customer service,
          family values and local support – we also believe in challenging the
          norm. For more than a decade, we’ve helped to change the idea of
          modular homes, with award-winning designs that add a new dimension to
          modern living.
        </p>
        <Link href="/about">
          <button className="focus-visible:outline-pri bg-acc hover:text-primary hover:border-acc rounded-md border-2 border-transparent p-2 px-3 text-sm font-medium tracking-widest text-white uppercase outline-2 transition duration-300 hover:bg-transparent max-md:text-white">
            {" "}
            More About us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aboutus;
