"use client";
import React, { useState, useEffect } from "react";
import { SliderPropsType } from "./SliderData";
import { SliderData } from "./SliderData";
import Image from "next/image";

const SliderComp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [SliderData]);

  return (
    <div className="relative">
      {SliderData.map((Data, index) => (
        <div key={index}>
          <Image
            src={Data.image}
            alt={`Slide ${index}`}
            className={` absolute  top-0 right-0 w-full h-[80vh] object-cover transition-opacity duration-1000 border border-txt ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
          <p
            className={`absolute text-acc font-bold text-7xl top-[500px] max-md:top-[300px] z-10 left-0 right-0 pl-[12%]  transition-opacity duration-1000 max-lg:text-4xl ${
              index === currentImageIndex ? "opacity-100" : "opacity-0 "
            }`}
          >
            {Data.title}
          </p>

          <p
            className={`absolute text-sec text-2xl top-[600px] max-md:top-[380px] z-10 left-0 right-0 pl-[12%]  transition-opacity duration-1000 max-lg:text-xl ${
              index === currentImageIndex ? "opacity-100" : "opacity-0 "
            }`}
          >
            {Data.text}
          </p>
        </div>
      ))}
      <button className=" absolute z-10 top-[600px] bottom-0 right-0 mr-[8%] w-[auto] h-[65px] text-txt bg-sec p-4 border border-pri text-2xl max-lg:text-xl max-lg:top-[650px] max-lg:mr-0 max-lg:left-0 max-md:top-[500px] max-md:rounded-2xl">
        Lets Build Something Unique 
      </button>
    </div>
  );
};

export default SliderComp;
