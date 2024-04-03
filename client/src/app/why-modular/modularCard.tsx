import React from "react";
import { modularDProps } from "./modularData";
import { motion } from "framer-motion";
import { introBottomVariants } from "../about/reuseComps";

const ModularCard = ({ id, text, title }: modularDProps) => {
  const textItems = text.split(",").map((item: string, index: number) => (
    <React.Fragment key={index}>
      {item.trim()}
      {index < text.split(",").length - 1 && <br />}
    </React.Fragment>
  ));
  const numbers = "0" + id;

  return (
    <motion.div
      className="h-[300px] w-[300px] flex justify-around items-start flex-col m-7"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introBottomVariants}
    >
      <h2 className=" flex flex-1 text-3xl font-semibold">{numbers}</h2>
      <h2 className="flex flex-1  text-2xl font-semibold">{title}</h2>
      <p className="flex flex-1 opacity-80">{textItems}</p>
    </motion.div>
  );
};

export default ModularCard;
