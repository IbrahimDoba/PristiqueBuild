import Image from "next/image";
import React from "react";
import meeting from "../../../assets/men mount.jpg";

const About = () => {
  return (
    <main>
      <section className="about text-acc mx-auto min-h-[65vh] grid place-content-center text-center bg-altBg bg-fixed">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-4">
          Pristiq Build
        </h1>
        <p className="max-w-screen-md">
          We are a team of architects and enviroment enthusiasts dedicated to
          improving our enviroment by usings renewable and eco-friendly
          materials and methods
        </p>
      </section>
      <div className="w-[100%]  justify-center items-center bg-bg flex flex-col">
        <h1 className="text-5xl font-semibold mt-5 max-lg:text-3xl max-lg:mb-5">
          About Us
        </h1>

        <div className="w-[80%] h-auto my-[4%] bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto">
          <div className="flex  flex-1">
            <Image src={meeting} alt="men mount" />
          </div>
          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <p className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%]">
              Company Overview
            </p>
            <p className="w-[70%] max-lg:my-[2%]">
              PristiqBuild is a pioneering force in{"Nigeria's"}construction
              industry, dedicated to transforming traditional building practices
              with innovative modular solutions. We blend cutting-edge
              technology with a commitment to sustainability, efficiency, and
              quality to deliver superior construction projects. Our Mission
            </p>
          </div>
        </div>
        <div className="w-[80%] h-auto my-[4%] bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto">
          <div className="flex  flex-1">
            <Image src={meeting} alt="men mount" />
          </div>
          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <p className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%]">
              Our Mission
            </p>
            <p className="w-[70%] max-lg:my-[2%]">
              PristiqBuild is a pioneering force in{"Nigeria's"}construction
              industry, dedicated to transforming traditional building practices
              with innovative modular solutions. We blend cutting-edge
              technology with a commitment to sustainability, efficiency, and
              quality to deliver superior construction projects. Our Mission
            </p>
          </div>
        </div>
        <div className="w-[80%] h-auto my-[4%] bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto">
          <div className="flex  flex-1">
            <Image src={meeting} alt="men mount" />
          </div>
          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <p className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%]">
              Our Vision
            </p>
            <p className="w-[70%] max-lg:my-[2%]">
              PristiqBuild is a pioneering force in{"Nigeria's"}construction
              industry, dedicated to transforming traditional building practices
              with innovative modular solutions. We blend cutting-edge
              technology with a commitment to sustainability, efficiency, and
              quality to deliver superior construction projects. Our Mission
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[80%] bg-bg justify-center items-center mb-[4%]">
          <h1 className="text-4xl font-semibold my-[4%]">Meet The Team</h1>
          <div className="w-full flex flex-wrap justify-around items-center ">
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-600 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full bg-red-400 w-[100px] h-[150px] justify-center items-center flex">Icon</div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-600 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full bg-red-400 w-[100px] h-[150px] justify-center items-center flex">Icon</div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-600 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full bg-red-400 w-[100px] h-[150px] justify-center items-center flex">Icon</div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
