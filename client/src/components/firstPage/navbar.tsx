import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[70px] bg-[#272323] text-white w-full flex justify-center   m-0">
      <div className="flex w-[70%] items-center justify-center">
        <div className="flex flex-1 justify-start items-center   pl-10">
          <h2>LOGO</h2>
          <h2 className="text-[#f0a500] pl-2">LOGO</h2>
        </div>
        <div className="flex flex-1 justify-between items-center text-md pr-10">
          <p>About us</p>
          <p>Project</p>
          <p>Services</p>
          <button className=" w-[150px] text-black bg-[#f0a500] py-2 px-4 rounded text-sm">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
