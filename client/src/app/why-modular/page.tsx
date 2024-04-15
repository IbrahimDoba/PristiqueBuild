"use client"

import React from "react";
import { modularData } from "./modularData";
import ModularCard from "./modularCard";
import img4 from "../../../pagesAssets/img4.jpg";
import img3 from "../../../assets/card2.jpg";
import img14 from "../../../pagesAssets/img14.jpg";
import img13 from "../../../pagesAssets/img13.jpeg";
import Image from "next/image";
import { CardSection } from "../about/reuseComps";

function WhyModular() {
  return (
    <main className="overflow-x-hidden">
      <section className="why-modular mx-auto min-h-[65vh] grid place-content-center text-center bg-bg ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3 uppercase text-black bg-white bg-opacity-60 p-2 rounded-xl">
          Why Modular?
        </h1>
        {/* <p className="text-xl text-black bg-slate-200">
          Here are some insights as to why modular buildings are better and the
          future
        </p> */}
      </section>

      <section className=" w-full justify-center items-center flex  py-6  bg-bg">
        <div className="w-[70%] justify-center items-center flex flex-col ">
          <h1 className="text-3xl my-7 max-md:text-2xl font-semibold">What is Modular Construction </h1>
          <div className="flex flex-row-reverse w-full mt-[3%] mb-[10%] h-auto justify-center items-center max-lg:flex-col ">
          <p className=" flex flex-1 my-3 mb-6 leading-loose ml-7 max-lg:mt-[5%]">
            Modular construction represents a groundbreaking approach to
            building construction, where building components are prefabricated
            in a factory-controlled environment before being transported to the
            construction site for assembly. This method involves the precise
            fabrication of modules or sections, which are then seamlessly
            integrated to form a complete structure. Unlike traditional
            construction methods, modular construction offers greater
            efficiency, quality control, and sustainability, revolutionizing the
            way buildings are designed and built.
          </p>
          <div className="flex flex-1">
            <Image className="" width={700} src={img3} alt="modualar constuct" />
          </div>
          </div>
          <div className="w-full h-auto justify-center items-center flex flex-col">

          
          <h3 className="text-3xl my-3  max-lg:text-2xl">Modular vs Traditional</h3>
          <p className="my-[3%] font-semibold">
            Modular construction revolutionizes the traditional building process
            by prefabricating components off- site, offering numerous advantages
            over conventional construction methods. This comparison outlines the
            distinct characteristics of modular and traditional construction
            approaches, shedding light on their respective benefits and
            drawbacks.
          </p>
          <div className="flex  justify-center items-center w-full max-lg:flex-col">
            {" "}
            <div className="flex flex-1 m-3">
            <Image
              className=" mr-10 max-lg:mr-0"
              width={500}
              height={500}
              src={img13}
              alt="modualar constuct"
            />
            </div>
            <div className="flex flex-1 m-3">
            <Image
              className=" mr-10 max-lg:mr-0"
              width={500}
              height={500}
              src={img14}
              alt="modualar constuct"
            />
            </div>
           
          
          </div>
        </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center my-8">
        <table className="w-[70%] border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border border-gray-200">Aspect</th>
              <th className="py-2 px-4 border border-gray-200">
                Modular Construction
              </th>
              <th className="py-2 px-4 border border-gray-200">
                Traditional Construction
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Construction Approach
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Prefabrication of components off-site
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Sequential on-site processes
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">Disruptions</td>
              <td className="py-2 px-4 border border-gray-200">
                Minimizes on-site disruptions
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Potential for delays and disruptions
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Waste Generation
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Reduces construction waste
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Generates higher levels of waste
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Quality Control
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Ensures consistent quality throughout
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Quality control may vary
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Project Timelines
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Enables faster project delivery
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Typically involves longer timelines
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Design Flexibility
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Offers greater flexibility in design
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Limited flexibility in design
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="w-full justify-center items-center flex-col flex my-[5%]">
        <h1 className="text-4xl font-semibold my-10 max-lg:text-2xl">
          Benefits Of Modular Construction
        </h1>
        <div className="w-[80%] justify-center items-center flex flex-wrap">
          {modularData.map((data, index) => (
            <ModularCard
              id={data.id}
              title={data.title}
              text={data.text}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="w-full justify-center items-center flex-col flex my-[5%] bg-bg">
        <h1 className="text-4xl font-semibold my-10 max-lg:text-xl max-lg:text-center">
          Detailed comparison of light steel gauge construction and reinforced
          concrete construction
        </h1>

        <table className="w-[70%] border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border border-gray-200">Aspect</th>
              <th className="py-2 px-4 border border-gray-200">
                Light Steel Gauge Construction
              </th>
              <th className="py-2 px-4 border border-gray-200">
                Reinforced Concrete Construction
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Insulation Properties
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Provides excellent insulation due to continuous insulation
                materials, resulting in high R-values and lower energy costs.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Concrete acts as a heat sink, absorbing heat readily, leading to
                higher energy costs for temperature regulation.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">Initial Cost</td>
              <td className="py-2 px-4 border border-gray-200">
                Initial cost may be higher.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Initial cost may be lower.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Long-Term Returns
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Long-term returns are significant due to lower energy costs and
                efficient insulation properties.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Long-term energy costs can be higher due to poor insulation
                properties.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">Labour Cost</td>
              <td className="py-2 px-4 border border-gray-200">
                Requires fewer laborers for assembly, leading to lower labor
                costs.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Labor costs are typically higher, constituting around 30% of
                material costs.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Fireproof Properties
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Can achieve fire ratings based on design and materials used.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Can achieve fire ratings based on design and materials used.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Sound Absorption
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Can be designed with sound insulation materials, providing good
                sound insulation.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Concrete itself is not a good sound insulator.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Comfort in Seasons
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Provides comfort in both rainy and dry seasons due to insulation
                properties.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Can absorb heat in summer and dissipate warmth in rainy seasons.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Seismic Reaction
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Less likely to collapse during earthquakes due to lighter
                weight.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Poorly designed structures can collapse during earthquakes due
                to mass.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">Foundation</td>
              <td className="py-2 px-4 border border-gray-200">
                Requires simpler shallow foundations.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Requires deeper and more complex foundations.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Future Expansion
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Allows for easier future expansions.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Future expansions can be more challenging.
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border border-gray-200">
                Construction Time
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Typically faster, about one-third of the time compared to
                concrete.
              </td>
              <td className="py-2 px-4 border border-gray-200">
                Longer construction time due to heavier materials and more
                labor-intensive processes.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <CardSection/>

    </main>
  );
}

export default WhyModular;








