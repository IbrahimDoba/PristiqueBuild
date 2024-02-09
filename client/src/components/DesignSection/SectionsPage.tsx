import Image from "next/image";
import React from "react";
import { sectionsData } from "./SectionData";
import SectionComp from "./SectionComp";
import img1 from "../../../assets/fox-modular-family-2.jpg";
import img2 from "../../../assets/fox-modular-family-4.jpg";
import img3 from "../../../assets/fox-modular-family-12.jpg";
import img4 from "../../../assets/fox-modular-family-32.jpg";

const SectionsPage = () => {
  return (
    <div className="flex w-[80%] h-auto my-[8%] flex-col justify-start items-start  text-txt">
      <div className="mb-10">
        {" "}
        <h1 className=" font-semibold text-4xl text-start">The Pristique Builds</h1>
      </div>
      <div className="flex w-full justify-between items-center flex-wrap max-md:justify-center   ">
        {sectionsData.map((section) => (
          <SectionComp
            key={section.id}
            id={section.id}
            title={section.title}
            image={section.image}
            text={section.text}
            link={section.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionsPage;
