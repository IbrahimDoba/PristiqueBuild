import Image from "next/image";
import React from "react";
import vr1 from "../../../assets/vr1.jpg";
import vr2 from "../../../assets/vr2.jpg";
import vr3 from "../../../assets/vr3.jpg";

const FutureDesigns = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-10 h-auto bg-white">
        <h1 className="text-4xl font-semibold my-10">Futureistic Designs</h1>
      <div className="flex w-[80%] min-h-[500px] justify-center items-center max-lg:flex-col">
        <div className="flex flex-1  ">
          <Image width={600}  src={vr1} className="rounded-xl" alt="virtual reaclity used by a woman" />
        </div>
        <div className="flex flex-1  flex-col justify-center items-start max-lg:items-center max-lg:mt-4">
          <h2 className="text-3xl text-start mb-4 max-md:text-xl max-md:font-semibold">One Modular At A Time!</h2>
          <p className="text-lg w-[80%] max-md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            aliquam. Perspiciatis quisquam veniam sed adipisci? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ab molestiae officiis
            expedita repellendus dignissimos nesciunt!
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse w-[80%] min-h-[500px] justify-center items-center my-10  max-lg:flex-col">
        <div className="flex flex-1 ">
          <Image width={600} src={vr2} className="rounded-xl" alt="virtual reaclity used by a woman" />
        </div>
        <div className="flex flex-1  flex-col justify-center items-start max-lg:items-center max-lg:mt-4">
          <h2 className="text-3xl text-start mb-4 max-md:text-xl max-md:font-semibold">An Emercing Experience!</h2>
          <p className="text-lg w-[80%]  max-md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            aliquam. Perspiciatis quisquam veniam sed adipisci? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ab molestiae officiis
            expedita repellendus dignissimos nesciunt!
          </p>
        </div>
      </div>
      <div className="flex w-[80%] justify-center min-h-[500px] items-center max-lg:flex-col">
        <div className="flex flex-1 ">
          <Image width={600} src={vr3} className="rounded-xl" alt="virtual reaclity used by a woman" />
        </div>
        <div className="flex flex-1  flex-col justify-center items-start max-lg:items-center max-lg:mt-4">
          <h2 className="text-3xl text-start mb-4 max-md:text-xl max-md:font-semibold">Virtual reality is Here!</h2>
          <p className="text-lg w-[80%]  max-md:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
            aliquam. Perspiciatis quisquam veniam sed adipisci? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ab molestiae officiis
            expedita repellendus dignissimos nesciunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureDesigns;
