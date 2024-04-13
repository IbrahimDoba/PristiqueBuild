"use client";
import { TbStarsFilled } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";
import { introBottomVariants } from "@/app/about/reuseComps";
import Link from "next/link";

const CoreValues = () => {
  return (
    <div className="w-full flex min-h-screen px-4 py-8 lg:py-10 justify-center items-center">
       <motion.div
          className="w-[80%] items-center justify-center flex flex-col"
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={introBottomVariants}
        >
        <h2 className="text-3xl text-acc mb-4 max-md:text-2xl">OUR CORE VALUES</h2>
        <h1 className="text-txt text-4xl">I.Q.S</h1>
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center my-10">
          <div className="flex flex-col justify-center items-center flex-1">
            <div>
              <FaUsersGear size={100} />
            </div>
            <h3 className="text-2xl font-medium my-4">Innovation</h3>
            <p className="text-center tracking-widest p-3">
              We embrace innovation as the cornerstone of our success,
              constantly seeking new ways to improve and revolutionize the
              construction industry.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <div>
              <TbStarsFilled size={100} />
            </div>
            <h3 className="text-2xl font-medium my-4">Quality</h3>
            <p className="text-center tracking-widest p-3">
              We are committed to delivering the highest quality in everything
              we do, from materials and craftsmanship to customer service and
              project management.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <div>
              <SlBadge size={100} />
            </div>
            <h3 className="text-2xl font-medium my-4">Sustainability</h3>
            <p className="text-center tracking-widest p-3">
              We prioritize sustainability in our practices, striving to
              minimize our environmental footprint and contribute to a greener
              future for generations to come.
            </p>
          </div>
        </div>
        <Link href='/about' >
        <button className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300">
          {" "}
          About us
        </button>
        </Link>
      
      </motion.div>
    </div>
  );
};

export default CoreValues;
