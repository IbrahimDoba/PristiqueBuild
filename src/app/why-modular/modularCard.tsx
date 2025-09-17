import React from "react";
import type { modularDProps } from "./modularData";
import { motion } from "motion/react";
import { introBottomVariants } from "../about/reuseComps";

const ModularCard = ({ id, text, title, icon: Icon }: modularDProps) => {
  const textItems = text.split(",").map((item: string, index: number) => (
    <React.Fragment key={index}>
      {item.trim()}
      {index < text.split(",").length - 1 && <br />}
    </React.Fragment>
  ));
  const numbers = "0" + id;

  return (
    <motion.div
      className="m-7 flex h-[300px] w-[300px] flex-col items-start justify-around p-4 shadow-md"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introBottomVariants}
    >
      <div className="flex items-center space-x-2">
        <Icon className="h-6 w-6" />
        <h2 className="text-3xl font-semibold">{numbers}</h2>
      </div>
      <h2 className="flex flex-1 text-2xl font-semibold">{title}</h2>
      <p className="flex flex-1 text-start opacity-80">{textItems}</p>
    </motion.div>
  );
};

export default ModularCard;
