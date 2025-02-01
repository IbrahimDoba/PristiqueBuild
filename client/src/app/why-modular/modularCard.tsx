import React from "react"
import type { modularDProps } from "./modularData"
import { motion } from "framer-motion"
import { introBottomVariants } from "../about/reuseComps"

const ModularCard = ({ id, text, title, icon: Icon }: modularDProps) => {
  const textItems = text.split(",").map((item: string, index: number) => (
    <React.Fragment key={index}>
      {item.trim()}
      {index < text.split(",").length - 1 && <br />}
    </React.Fragment>
  ))
  const numbers = "0" + id

  return (
    <motion.div
      className="h-[300px] w-[300px] flex justify-around items-start flex-col m-7 p-4 shadow-md"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introBottomVariants}
    >
      <div className="flex items-center space-x-2">
        <Icon className="w-6 h-6" />
        <h2 className="text-3xl font-semibold">{numbers}</h2>
      </div>
      <h2 className="flex flex-1 text-2xl font-semibold">{title}</h2>
      <p className="flex flex-1 text-start opacity-80">{textItems}</p>
    </motion.div>
  )
}

export default ModularCard

