import React from "react";
import { PropsType } from "./SectionData";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SectionComp = ({ title, image, text }: PropsType) => {
  return (
    <div className="flex flex-col justify-between items-start w-[350px] m-[1%] h-auto max-lg:my-4">
      <Image
        src={image}
        alt="img1"

        style={{
          objectFit: "fill",
          height:"300px" // cover, contain, none
        }}
      />
      <h1 className="font-bold text-3xl  my-6">{title}</h1>
      <p className="text-md  my-6 ">{text}</p>
      <button className=" flex justify-center items-center group   w-[170px]  bg-transparent border-acc border rounded py-2 px-4 test-sm">
        View design <p className="pl-2 duration-300 opacity-0 group-hover:opacity-100 "><MdOutlineKeyboardArrowRight size={30} /></p>
      </button>
    </div>
  );
};

export default SectionComp;
