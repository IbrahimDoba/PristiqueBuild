import Image from "next/image";
import React from "react";
import meeting from "../../../assets/men mount.jpg";
import { FaUsersGear } from "react-icons/fa6";
import { TbStarsFilled } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import Link from "next/link";

const About = () => {
  return (
    <main>
      <section className="about text-black mx-auto min-h-[65vh] grid place-content-center text-center bg-altBg bg-fixed">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-4">
          ABOUT US
        </h1>
        <p className="max-w-screen-md">
          At Pristiq Build, we are pioneers in revoluonizing the construction
          industry with our forward-thinking approach.
        </p>
      </section>
      <section className="w-[100%]  justify-center items-center bg-bg flex flex-col">
        <div className="flex justify-end items-center w-[80%]  my-5">
          <h1 className=" w-[50%] text-xl font-semibold  max-lg:text-md max-lg:w-full">
            While we cherish meless values like top-notch customer service,
            family-oriented principles, and unwavering community support, we
            thrive on defying norms. With over a decade of experience, we have
            consistently sha ered expecta ons in the realm of modular homes,
            introducing cutting-edge designs that re-define the essence of
            modern living.
          </h1>
        </div>
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
              quality to deliver superior construction projects.
            </p>
          </div>
        </div>
        <div className="w-[80%] h-auto my-[4%] bg-bg flex flex-row-reverse justify-center items-center max-lg:flex-col max-lg:h-auto">
          <div className="flex  flex-1">
            <Image src={meeting} alt="men mount" />
          </div>
          <div className="flex ml-[8%]  flex-1 flex-col justify-around items-start max-lg:my-[4%] ">
            <p className="w-[70%]  text-4xl mb-10 text-txt font-semibold max-lg:text-2xl max-lg:my-[2%]">
              Our Mission
            </p>
            <p className="w-[70%] max-lg:my-[2%]">
              At PristiqBuild, our mission is clear, to revolutionize Nigeria's
              construction industry with innovative modular solutions. We are
              commited to delivering sustainable, efficient, and high-quality
              construction . projects that meet the evolving needs of our
              clients.
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
              PristiqBuild doesn't just build structures, we're sculpturing a
              future where innovation, efficiency, and precision unite. As a
              Nigerian construction company, our vision extends beyond
              conventional practices . We aspire to lead the charge towards
              ecological and cost-effective solutions, impacting communities
              across Nigeria.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full items-center justify-center flex flex-col my-8">
        <div className="w-[80%] items-center justify-center flex flex-col">
          <h2 className="text-3xl text-acc mb-4">OUR CORE VALUES</h2>
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center my-10">
            <div className="flex flex-col justify-center items-center flex-1">
              <div>
                <FaUsersGear size={100} />
              </div>
              <h3 className="text-2xl font-medium my-4">Innovation</h3>
              <p className="text-center tracking-widest p-3">
                We embrace innovation as the cornerstone of our success,
                constantly seeking new ways to improve and revolutionize the
                construction industry.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div>
                <TbStarsFilled size={100} />
              </div>
              <h3 className="text-2xl font-medium my-4">Quality</h3>
              <p className="text-center tracking-widest p-3">
                We are committed to delivering the highest quality in everything
                we do, from materials and craftsmanship to customer service and
                project management.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <div>
                <SlBadge size={100} />
              </div>
              <h3 className="text-2xl font-medium my-4">Sustainability</h3>
              <p className="text-center tracking-widest p-3">
                We prioritize sustainability in our practices, striving to
                minimize our environmental footprint and contribute to a greener
                future for generations to come.
              </p>
            </div>
          </div>
          <button className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300">
            {" "}
            About us
          </button>
        </div>
      </section>
      <section className="flex flex-col w-full bg-bg justify-center items-center pb-[4%]">
        <div className="flex flex-col w-[80%] justify-center items-center">
          <h1 className="text-4xl font-semibold my-[4%]">Meet The Team</h1>
          <div className="w-full flex flex-wrap justify-around items-center ">
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-300 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full bg-red-400 w-[100px] h-[150px] justify-center items-center flex">
                Icon
              </div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-300 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full bg-red-400 w-[100px] h-[150px] justify-center items-center flex">
                Icon
              </div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
            <div className="flex flex-col w-[300px] h-[250px] justify-between items-center border border-gray-300 shadow-xl rounded-2xl p-2 m-4">
              <div className="rounded-full bg-red-400 w-[100px] h-[150px] justify-center items-center flex">
                Icon
              </div>
              <h3 className="text-3xl text-center my-[2%]">CEO: Silverfangs</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full my-6 justify-center items-center flex">
        <div className="w-[80%] flex  items-center justify-between max-lg:flex-col">
          <div className="w-[40%] h-[300px] p-4 border shadow-lg flex m-6  flex-col items-start justify-center max-lg:mb-5">
            <h3 className="font-semibold text-3xl">Careers Link</h3>
            <p className=" my-4">
              Join the Pristiq team and embark on a rewarding career in the
              construction industry. Explore opportunities to contribute your
              skills and expertise to our dynamic team.
            </p>
            <button className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300">
              View Openings
            </button>
          </div>

          <div className="w-[40%] h-[300px] p-4 border shadow-lg flex  flex-col items-start justify-center max-lg:mb-5">
              <h3 className="font-semibold text-3xl">Make Inquiries</h3>
              <p className=" my-4">
                Have questions or inquiries? Get in touch with us to discuss
                your construction needs and discover how PristiqBuild can bring
                your vision to life.
              </p>
              <Link
                href="/contact"
                className="outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm text-white max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          
        </div>
      </section>
    </main>
  );
};

export default About;
