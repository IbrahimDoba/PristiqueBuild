"use client";

import Image from "next/image";
import React from "react";
import meeting from "@/assets/men mount.jpg";
import { FaUsersGear } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import Link from "next/link";
import img1 from "@/assets/page/img1.jpg";
import img6 from "@/assets/page/img6.jpg";
import img7 from "@/assets/page/img7.jpg";
import img10 from "@/assets/page/img10.png";
import img11 from "@/assets/page/img11.jpg";
import img12 from "@/assets/page/cep.jpg";
import {
  CardSection,
  introBottomVariants,
  introLeftVariants,
  introRightVariants,
} from "./reuseComps";
import { motion } from "motion/react";
import CoreValues from "@/components/sections/values/CoreValues";
import { Metadata } from "next";

const About = () => {
  const metadata: Metadata = {
    title: "About Pristiq Build",
    description: "Learn more about PristiqBuild. Build Smart. Build Modular.",
  };

  return (
    <main className="overflow-x-hidden">
      <section className="about bg-altBg mx-auto grid min-h-[85vh] place-content-center bg-fixed text-center text-black">
        <h1 className="bg-opacity-60 mb-4 rounded-xl bg-white p-2 text-2xl font-bold text-black md:text-4xl lg:text-6xl">
          ABOUT US
        </h1>
        <p className="max-w-screen-md font-semibold">
          At Pristiq Build, we are pioneers in revoluonizing the construction
          industry with our forward-thinking approach.
        </p>
      </section>
      <section className="bg-bg flex w-[100%] flex-col items-center justify-center">
        <div className="my-5 flex w-[80%] items-center justify-end"></div>
        <div className="bg-bg my-[4%] flex h-auto w-[80%] items-center justify-center max-lg:h-auto max-lg:flex-col">
          <motion.div
            className="flex flex-1"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introLeftVariants}
            transition={{ duration: 1 }}
          >
            {" "}
            <Image src={img1} alt="men mount" />
          </motion.div>

          <div className="ml-[8%] flex flex-1 flex-col items-start justify-around max-lg:my-[4%]">
            <h3 className="text-txt mb-10 w-[70%] text-4xl font-semibold max-lg:my-[2%] max-lg:w-full max-lg:text-2xl">
              Company Overview
            </h3>
            <p className="w-[70%] max-lg:my-[2%] max-lg:w-full">
              PristiqBuild is a pioneering force in {"Nigeria's"} construction
              industry, dedicated to transforming traditional building practices
              with innovative modular solutions. We blend cutting-edge
              technology with a commitment to sustainability, efficiency, and
              quality to deliver superior construction projects.
            </p>
          </div>
        </div>
        <div className="bg-bg my-[4%] flex h-auto w-[80%] flex-row-reverse items-center justify-center max-lg:h-auto max-lg:flex-col">
          <motion.div
            className="flex flex-1"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introRightVariants}
            transition={{ duration: 1 }}
          >
            <Image src={img6} alt="men mount" />
          </motion.div>
          <div className="ml-[8%] flex flex-1 flex-col items-start justify-around max-lg:my-[4%]">
            <h3 className="text-txt mb-10 w-[70%] text-4xl font-semibold max-lg:my-[2%] max-lg:w-full max-lg:text-2xl">
              Our Mission
            </h3>
            <p className="w-[70%] max-lg:my-[2%] max-lg:w-full">
              At PristiqBuild, our mission is clear, to revolutionize{" "}
              {"Nigeria's"}
              construction industry with innovative modular solutions. We are
              commited to delivering sustainable, efficient, and high-quality
              construction . projects that meet the evolving needs of our
              clients.
            </p>
          </div>
        </div>
        <div className="bg-bg my-[4%] flex h-auto w-[80%] items-center justify-center max-lg:h-auto max-lg:flex-col">
          <motion.div
            className="flex flex-1"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introLeftVariants}
            transition={{ duration: 1 }}
          >
            <Image src={img7} alt="men mount" />
          </motion.div>
          <div className="ml-[8%] flex flex-1 flex-col items-start justify-around max-lg:my-[4%]">
            <h3 className="text-txt mb-10 w-[70%] text-4xl font-semibold max-lg:my-[2%] max-lg:w-full max-lg:text-2xl">
              Our Vision
            </h3>
            <p className="w-[70%] max-lg:my-[2%] max-lg:w-full">
              PristiqBuild dose not just build structures, we are sculpturing a
              future where innovation, efficiency, and precision unite. As a
              Nigerian construction company, our vision extends beyond
              conventional practices . We aspire to lead the charge towards
              ecological and cost-effective solutions, impacting communities
              across Nigeria.
            </p>
          </div>
        </div>
      </section>
      <section className="my-8 flex w-full flex-col items-center justify-center">
        <motion.div
          className="flex w-[80%] flex-col items-center justify-center"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introBottomVariants}
          transition={{ duration: 1 }}
        >
          <CoreValues />
        </motion.div>
      </section>
      <section className="bg-bg flex w-full flex-col items-center justify-center pb-[4%]">
        <div className="flex w-[80%] flex-col items-center justify-center">
          <h1 className="my-[4%] text-4xl font-semibold">Meet The Team</h1>
          <div className="flex w-full flex-wrap items-center justify-around">
            <div className="m-4 flex h-[250px] w-[300px] flex-col items-center justify-between rounded-2xl border border-gray-300 p-2 shadow-xl">
              <div className="flex h-[150px] w-[100px] items-center justify-center rounded-full">
                <Image className="rounded-full" src={img10} alt="ceoImage" />
              </div>
              <div className="my-[2%] flex flex-col">
                <h3 className="text-center text-xl font-semibold">
                  ABDULAZEEZ
                </h3>
                <h3 className="text-center text-2xl">CO-FOUNDER AND COO</h3>
              </div>
            </div>
            <div className="m-4 flex h-[250px] w-[300px] flex-col items-center justify-between rounded-2xl border border-gray-300 p-2 shadow-xl">
              <div className="flex h-[150px] w-[100px] items-center justify-center rounded-full">
                <Image className="rounded-full" src={img12} alt="ceoImage" />
              </div>
              <div className="my-[2%] flex flex-col">
                <h3 className="text-center text-xl font-semibold">YUSUF</h3>
                <h3 className="text-center text-2xl">FOUNDER AND CEO</h3>
              </div>
            </div>
            <div className="m-4 flex h-[250px] w-[300px] flex-col items-center justify-between rounded-2xl border border-gray-300 p-2 shadow-xl">
              <div className="flex h-[150px] w-[100px] items-center justify-center rounded-full">
                <Image className="rounded-full" src={img11} alt="ceoImage" />
              </div>
              <div className="my-[2%] flex flex-col">
                <h3 className="text-center text-xl font-semibold">NAJIBU</h3>
                <h3 className="text-center text-2xl">CO-FOUNDER AND CTO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardSection />
    </main>
  );
};

export default About;
