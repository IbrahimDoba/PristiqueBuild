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
    }, 6000); // Change image every 3 seconds

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
            className={`absolute text-bg font-bold text-7xl w-[70%] ml-[10%] p-2 top-[500px] max-md:top-[300px] z-10 left-0 right-0 pl-[12%]  transition-opacity duration-1000 max-lg:text-4xl ${
              index === currentImageIndex ? "opacity-100" : "opacity-0 "
            }`}style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            {Data.title}
          </p>

          <p
            className={`absolute text-sec w-[70%] text-2xl top-[600px] ml-[10%] p-2 max-md:top-[380px] z-10 left-0 right-0 pl-[12%]  transition-opacity duration-1000 max-lg:text-xl ${
              index === currentImageIndex ? "opacity-100" : "opacity-0 "
            }`}style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            {Data.text}
          </p>
        </div>
      ))}
   
    </div>
  );
};

export default SliderComp;
