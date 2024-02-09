import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 h-[70px] bg-bg z-10 text-txt w-full flex justify-center m-0">
      <div className="flex w-[80%] items-center justify-center">
        <div className="flex flex-1 justify-start items-center   pl-10">
          <h2>PRESTIQUE</h2>
          <h2 className="text-pri pl-2">BUILDS</h2>
        </div>
        <div className="flex flex-1 justify-between items-center text-md pr-10">
          <p>Deisgns</p>
          <p>Services</p>
          <p>About us</p>

          <button className=" w-[150px] text-txt bg-pri py-2 px-4 rounded text-sm">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
