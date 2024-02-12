import Image from "next/image";
import logo from "../../../assets/logob2.png"

const Footer = () => {
  return (
    <div className="bg-ftbg w-full h-[250px] text-sec justify-center items-center flex  max-lg:h-auto ">
      <div className="flex w-[80%] justify-between items-start h-[50%]  flex-wrap my-7">
        <div className=" flex-1 items-start min-w-[50px]  m-[1%]">
        <Image src={logo} alt="logo" width={150}  />
        </div>
        <div className="flex-1 flex flex-col items-start justify-between h-full m-[1%]">
          <a className="font-semibold text-md h-full mb-4 border-b w-[50%]" >Home</a>
          <a>Designs</a>
          <a>Displays</a>
          <a>Discover</a>
          <a>Contact</a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-between  m-[1%]">
          <h2 className="text-md font-semibold  mb-4 border-b w-[70%]">The Preistique Builds</h2>
          <a>Fox modular</a>
          <a>The Flats</a>
          <a>Fox Transofrmables</a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-between   m-[1%]">
          <h2 className="text-md font-semibold  mb-4 border-b w-[50%]">Policys</h2>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-between  m-[1%]">
          <h2 className="text-md font-semibold  mb-4 border-b w-[50%]">Get in Touch</h2>
          <a>Enquires (+234) 813 728 12</a>
          <a>Email: PreistiqueBuild@gmail.com</a>
          <a>social icons</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
