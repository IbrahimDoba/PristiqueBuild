import React from "react";
// import modularVid from ""

const VideoBgSection = () => {
  return (
    <header className="relative  flex items-center justify-center h-screen mb-12 overflow-hidden w-full">
      <div className="relative w-[40%] z-30 p-5 text-2xl text-txt  bg-opacity-50 rounded-xl  right-[20%] top-[15%]">
        <p className="text-amber-800 font-medium text-2xl">Our Story</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          perspiciatis.
        </p>
      </div>
      <div>

      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-50"
      >
        <source src={"/videos/vid.mp4"} type="video/mp4" />
      </video>
    </header>
  );
};

export default VideoBgSection;
