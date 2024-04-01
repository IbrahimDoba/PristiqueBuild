import React from "react";
import { PropsType } from "./designData";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Design = ({ title, image, text }: PropsType) => {
  return (
    <div className="flex flex-col justify-between items-start w-[350px]  h-auto max-md:w-auto">
      <div className="w-full h-[300px] ">
        <Image
          src={image}
          alt="img1"
          style={{
            objectFit: "fill",
            height: "100%", // cover, contain, none
          }}
        />
      </div>

      <h1 className="font-bold text-2xl  my-4">{title}</h1>
      <p className="text-md  my-4 ">{text}</p>
      {/* <button className=" flex justify-center items-center group   w-[170px]  bg-transparent border-acc border rounded py-2 px-4 test-sm">
        View design{" "}
        <p className="pl-2 duration-300 opacity-0 group-hover:opacity-100 ">
          <MdOutlineKeyboardArrowRight size={30} />
        </p>
      </button> */}
    </div>
  );
};

export default Design;
