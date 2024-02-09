const Footer = () => {
  return (
    <div className="bg-ftbg w-full h-[250px] text-sec justify-center items-center flex  max-lg:h-auto ">
      <div className="flex w-[80%] justify-between items-start h-[50%]  flex-wrap my-7">
        <div className="flex-1 items-start  m-[1%]">Logo</div>
        <div className="flex-1 flex flex-col items-start justify-between h-full m-[1%]">
          <a className="font-semibold text-md h-full">Home</a>
          <a>Designs</a>
          <a>Displays</a>
          <a>Discover</a>
          <a>Contact</a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-between  m-[1%]">
          <h2 className="text-md font-semibold">The Preistique Builds</h2>
          <a>Fox modular</a>
          <a>The Flats</a>
          <a>Fox Transofrmables</a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-between   m-[1%]">
          <h2 className="text-md font-semibold">Policys</h2>
          <a>Privacy Policy</a>
          <a>Terms & Conditions</a>
        </div>
        <div className="flex-1 flex flex-col items-start justify-between  m-[1%]">
          <h2 className="text-md font-semibold">Get in Touch</h2>
          <a>Enquires (+234) 813 728 12</a>
          <a>Email: PreistiqueBuild@gmail.com</a>
          <a>social icons</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
