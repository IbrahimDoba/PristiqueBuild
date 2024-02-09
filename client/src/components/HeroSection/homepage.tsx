import Image from "next/image";
import React from "react";
import img1 from "../../../assets/building.jpg";

const Homepage = () => {
  return (
    <div className="  w-[100%] h-screen flex justify-center items-center bg-sec max-lg:h-auto">
      <div className=" flex-1  max-w-[80%] flex justify-center items-center text-txt max-lg:flex-col-reverse max-lg:mt-[6%]  max-lg:max-w-full max-lg:">

      <div className="flex  flex-1 flex-col p-10 items-start mb-8 max-lg:mb-1">
        <h1 className="text-7xl text-start mb-8 max-lg:text-5xl">
          Creating Achitechtural Wonders
        </h1>
        <p className=" text-sm mb-8 text-start w-[70%] opacity-70">
          Your Ideas & Dreams are Transformed By Us Into Long Lasting, Engineerd
          Builings
        </p>
        <div className="mb-8 w-[70%] justify-between flex ">
          <button className=" w-[150px] text-txt bg-pri py-2 px-4 rounded text-sm max-md:mr-3">
            Contact us
          </button>
          <button className="w-[150px] text-txt bg-transparent border-acc border rounded py-2 px-4 test-sm">
            Meet the team
          </button>
        </div>
        <span className="mb-8 opacity-60 text-sm">
          All Our Projects are done by Experts
        </span>
      </div>
      <div className="flex  flex-col flex-1  max-lg:w-[100%] max-lg:">
        <Image
          className="border-pri  border-2 rounded-3xl max-lg:border-sec"
          src={img1}
          alt="img"
          

        />
        <div className="absolute bg-pri bottom-[20%] right-[8%] px-5 py-3 border-pri  border-2 rounded-md max-lg:hidden">
        <h2 className="text-5xl">200+</h2>
        <p className="text-sm">Capable Engineers</p>
      </div>
      </div>
      </div>

    </div>
  );
};

export default Homepage;
