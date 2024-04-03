"use client";

import Image from "next/image";
import React from "react";
import meeting from "../../../assets/men mount.jpg";
import { FaUsersGear } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import Link from "next/link";
import img1 from "../../../pagesAssets/img1.jpg";
import img6 from "../../../pagesAssets/img6.jpg";
import img7 from "../../../pagesAssets/img7.jpg";
import img10 from "../../../pagesAssets/img10.png";
import img11 from "../../../pagesAssets/img11.jpg";
import { CardSection, introBottomVariants, introLeftVariants, introRightVariants } from "./reuseComps";
import { motion } from "framer-motion";
import CoreValues from "@/components/CoreValues/CoreValues";



const About = () => {
  return (
    <main className="overflow-x-hidden">
      <section className="about text-black mx-auto min-h-[65vh] grid place-content-center text-center bg-altBg bg-fixed ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-4">
          ABOUT US
        </h1>
        <p className="max-w-screen-md">
          At Pristiq Build, we are pioneers in revoluonizing the construction
          industry with our forward-thinking approach.
        </p>
      </section>
      <section className="w-[100%]  justify-center items-center bg-bg flex flex-col">
        <div className="flex justify-end items-center w-[80%]  my-5">
          <h1 className=" w-[50%] text-xl font-semibold  max-lg:text-md max-lg:w-full">
            While we cherish meless values like top-notch customer service,
            family-oriented principles, and unwavering community support, we
            thrive on defying norms. With over a decade of experience, we have
            consistently sha ered expecta ons in the realm of modular homes,
            introducing cutting-edge designs that re-define the essence of
            modern living.
          </h1>
        </div>
        <div className="w-[80%] h-auto my-[4%] bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto">
          <motion.div
            className="flex flex-1"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introLeftVariants}
          >
            {" "}
            <Image src={img1} alt="men mount" />
          </motion.div>

          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <h3 className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%] max-lg:w-full">
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
        <div className="w-[80%] h-auto my-[4%] bg-bg flex flex-row-reverse justify-center items-center max-lg:flex-col max-lg:h-auto">
          <motion.div
            className="flex flex-1"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introRightVariants}
          >
            <Image src={img6} alt="men mount" />
          </motion.div>
          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <h3 className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%] max-lg:w-full">
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
        <div className="w-[80%] h-auto my-[4%] bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto">
          <motion.div
            className="flex flex-1"
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={introLeftVariants}
          >
            <Image src={img7} alt="men mount" />
          </motion.div>
          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <h3 className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%] max-lg:w-full">
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
      <section className="w-full items-center justify-center flex flex-col my-8">
        <motion.div
          className="w-[80%] items-center justify-center flex flex-col"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introBottomVariants}
        >
          <CoreValues />
        </motion.div>
      </section>
      <section className="flex flex-col w-full bg-bg justify-center items-center pb-[4%]">
        <div className="flex flex-col w-[80%] justify-center items-center">
          <h1 className="text-4xl font-semibold my-[4%]">Meet The Team</h1>
          <div className="w-full flex flex-wrap justify-around items-center ">
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-300 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full  w-[100px] h-[150px] justify-center items-center flex">
                <Image className="rounded-full" src={img10} alt="ceoImage" />
              </div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-300 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full w-[100px] h-[150px] justify-center items-center flex">
                <Image className="rounded-full" src={img11} alt="ceoImage" />
              </div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-300 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full  w-[100px] h-[150px] justify-center items-center flex">
                <Image className="rounded-full" src={img10} alt="ceoImage" />
              </div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
          </div>
        </div>
      </section>
      <CardSection />
    </main>
  );
};

export default About;
