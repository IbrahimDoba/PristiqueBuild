import Image from "next/image";
import React from "react";
import img1 from "../../../assets/building.jpg";

const Homepage = () => {
  return (
    <div className=" flex-1  w-[70%] flex bg-[#272323] justify-center items-center text-white  ">
      <div className="flex  flex-1 flex-col p-10 items-start mb-8">
        <h1 className="text-7xl text-start mb-8">
          Creating Achitechtural Wonders
        </h1>
        <p className=" text-sm mb-8 text-start w-[70%] opacity-70">
          Your Ideas & Dreams are Transformed By Us Into Long Lasting, Engineerd
          Builings
        </p>
        <div className="mb-8 w-[70%] justify-around flex ">
          <button className=" w-[150px] text-black bg-[#f0a500] py-2 px-4 rounded text-sm">
            Contact us
          </button>
          <button className="w-[150px] text-white bg-transparent border-[#f0a500] border rounded py-2 px-4 test-sm">
            Meet the team
          </button>
        </div>
        <span className="mb-8 opacity-60 text-sm">
          All Our Projects are done by Experts
        </span>
      </div>
      <div className="flex flex-col flex-1  ">
        <Image
          className="border-[#f0a500]  border-2 rounded-3xl"
          src={img1}
          alt="img"
        />
        <div className="absolute bg-[#272323] bottom-[20%] right-[12%] px-5 py-3 border-[#f0a500]  border-2 rounded-md ">
        <h2 className="text-5xl">200+</h2>
        <p className="text-sm">Capable Engineers</p>
      </div>
      </div>
      
    </div>
  );
};

export default Homepage;
