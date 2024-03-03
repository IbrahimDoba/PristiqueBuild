import Image from "next/image";
import React from "react";
import img1 from "../../../assets/logo2.jpg";

const Hero = () => {
  return (
    <div className="  w-[100%] h-screen flex justify-center items-center bg-white max-lg:h-auto">
      <div className=" flex-1  max-w-[80%] flex justify-center items-center text-txt max-lg:flex-col-reverse max-lg:mt-[6%]  max-lg:max-w-full max-lg:">

      <div className="flex  flex-1 flex-col  items-start mb-8 max-lg:mb-1 max-lg:p-5 max-lg:items-center">
        <h1 className=" w-full text-6xl text-start mb-8 max-lg:text-5xl max-lg:text-center">
          Creating Achitechtural Wonders
        </h1>
        <p className=" text-sm mb-8 text-start w-[70%] opacity-70">
          Your Ideas & Dreams are Transformed By Us Into Long Lasting, Engineerd
          Builings
        </p>
        <div className="mb-8 w-[70%] justify-between flex ">
          <button className=" w-[150px] text-txt bg-pri py-2 px-4 rounded text-xl duration-200 hover:bg-transparent border border-pri max-md:mr-3">
            Contact us
          </button>
          {/* <button className="w-[170px] text-black bg-transparent border-acc border rounded duration-200 hover:bg-pri hover:text-sec py-2 px-4 text-xl">
            Meet the team
          </button> */}
        </div>
        <span className="mb-8 opacity-90 text-md">
          All Our Projects are done by Experts
        </span>
      </div>
      <div className="flex justify-center items-center flex-col flex-1  max-lg:w-[40%] max-lg:mb-10">
        <Image
          className=" rounded-3xl max-lg:border-sec"
          src={img1}
          alt="img"
        />
        {/* <div className="absolute bg-pri bottom-[20%] right-[8%] px-5 py-3 border-pri  border-2 rounded-md max-lg:hidden">
        <h2 className="text-5xl">200+</h2>
        <p className="text-sm">Capable Engineers</p>
      </div> */}
      </div>
      </div>

    </div>
  );
};

export default Hero;
