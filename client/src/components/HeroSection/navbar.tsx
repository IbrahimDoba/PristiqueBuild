import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 h-[70px] bg-bg z-30 text-txt w-full flex justify-center m-0">
      <div className="flex w-[80%] items-center justify-center">
        <div className="flex flex-1 justify-start items-center  ">
          <h2>PRESTIQ</h2>
          <h2 className="text-pri pl-2">BUILDS</h2>
        </div>
        <div className="flex flex-1 justify-between items-center text-md pr-10">
          <p>Home</p>
          <p>Deisgns</p>
          <p>About us</p>

          <button className=" w-[150px] text-txt bg-pri py-2 px-4 rounded text-sm duration-200 hover:bg-transparent border border-pri">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
