"use client"
import Image from "next/image";
import React from "react";
import vr1 from "../../../assets/vr1.jpg";
import vr2 from "../../../assets/vr2.jpg";
import vr3 from "../../../assets/vr3.jpg";
import { motion } from "framer-motion";
import { introLeftVariants, introRightVariants } from "@/app/about/page";

const FutureDesigns = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-10 h-auto bg-white">
      <h1 className="text-4xl font-semibold my-10">Futureistic Designs</h1>
      <div className="flex w-[80%] min-h-[500px] justify-center items-center max-lg:flex-col">
        <motion.div
          className="flex flex-1  "
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introLeftVariants}
        >
          <Image
            width={600}
            src={vr1}
            className="rounded-xl"
            alt="virtual reaclity used by a woman"
          />
        </motion.div>
        <div className="flex flex-1  flex-col justify-center items-start max-lg:items-center max-lg:mt-4">
          <h2 className="text-3xl text-start mb-4 max-md:text-xl max-md:font-semibold">
            {" "}
            Virtual Reality (VR)
          </h2>
          <p className="text-lg w-[80%] max-md:text-base">
            Immerse yourself in our designs with cutting-edge VR technology,
            allowing you to visualize and experience your project before it is
            even built.
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse w-[80%] min-h-[500px] justify-center items-center my-10  max-lg:flex-col">
        <motion.div
          className="flex flex-1  "
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introRightVariants}
        >
          <Image
            width={600}
            src={vr2}
            className="rounded-xl"
            alt="virtual reaclity used by a woman"
          />
        </motion.div>
        <div className="flex flex-1  flex-col justify-center items-start max-lg:items-center max-lg:mt-4">
          <h2 className="text-3xl text-start mb-4 max-md:text-xl max-md:font-semibold">
            Client-Centric Design
          </h2>
          <p className="text-lg w-[80%]  max-md:text-base">
            Our client-centric approach ensures that your needs and preferences
            are at the forefront of every design decision, resulting in spaces
            that are tailored to your unique requirements.
          </p>
        </div>
      </div>
      <div className="flex w-[80%] justify-center min-h-[500px] items-center max-lg:flex-col">
        <motion.div
          className="flex flex-1  "
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introLeftVariants}
        >
          <Image
            width={600}
            src={vr3}
            className="rounded-xl"
            alt="virtual reaclity used by a woman"
          />
        </motion.div>
        <div className="flex flex-1  flex-col justify-center items-start max-lg:items-center max-lg:mt-4">
          <h2 className="text-3xl text-start mb-4 max-md:text-xl max-md:font-semibold">
            Innovative Modular Design
          </h2>
          <p className="text-lg w-[80%]  max-md:text-base">
            Experience the versatility and efficiency of modular construction
            firsthand, as we showcase how this innovative approach is shaping
            the future of construction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureDesigns;
