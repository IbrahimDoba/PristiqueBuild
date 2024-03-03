import React from "react";
import { TbStarsFilled } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

const CoreValues = () => {
  return (
    <div className="w-full flex h-screen justify-center items-center">
      <div className="w-[80%] items-center justify-center flex flex-col">
        <h2 className="text-3xl text-amber-700 mb-4">OUR CORE VALUES</h2>
        <h1 className="text-txt text-4xl">D.I.E</h1>
        <div className="flex justify-between items-center my-10">
          <div className="flex flex-col justify-center items-center flex-1">
            <div>
              <FaUsersGear size={100} />
            </div>
            <h3 className="text-2xl font-medium my-4"> Diligence</h3>
            <p className="text-center tracking-widest p-3">
              Going the extra mile to achieve extraordinary results is one of
              our guiding principles. From design to execution, we meticulously
              dot all i’s and cross all t’s to create masterpieces crafted to
              perfection. At Sujimoto, we dont do things 10% better, we do
              things 10 times better!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <div>
              <TbStarsFilled size={100} />
            </div>
            <h3 className="text-2xl font-medium my-4"> Integrity</h3>
            <p className="text-center tracking-widest p-3">
              With every new project, we strive to be more inventive than the
              last, through the use of latest technology, processes and a future
              forward thinking approach.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <div>
              <SlBadge size={100} />
            </div>
            <h3 className="text-2xl font-medium my-4"> Excellence</h3>
            <p className="text-center tracking-widest p-3">
              Exceeding expectations is what Sujimoto stands for. We set new
              standards and beat all records for the satisfaction of our
              clients.
            </p>
          </div>
        </div>
        <button className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300">
          {" "}
          About us
        </button>
      </div>
    </div>
  );
};

export default CoreValues;
