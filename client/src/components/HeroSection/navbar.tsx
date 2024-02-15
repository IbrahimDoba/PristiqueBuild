'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuButton from '../MenuButton/MenuButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickToTop, setStickToTop] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
       // Check how many pixels user scrolled from the top and stick the navbar to the top
       if (window.scrollY > 60) {
          setStickToTop(true);
       } else {
          setStickToTop(false);
       }
    };

    // Listen for scroll when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
       window.removeEventListener('scroll', handleScroll);
    };
 }, []);

  return (
    <div className={`flex w-full justify-center items-center ${stickToTop && 'sticky top-0 backdrop-blur-2xl z-40'}`}>
    <header className={`w-[85%] grid grid-cols-[auto,_auto] md:flex justify-between items-center py-4 px-6 md:px-8 lg:px-20 `}>
      <div>
      
        <Link href='#top'>
          <h1 className='text-pri flex items-center gap-1 font-bold text-xl'>
            PRISTIQ
            <span className='text-txt text-sm'>BUILDS</span>
          </h1>
        </Link>
      </div>
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav>
        <ul
          id='navbar-menu'
          className={`max-md:min-h-screen max-md:absolute flex flex-col gap-6 min-w-full py-20 px-8 top-0 right-0 z-20 text-main bg-black/80 backdrop-blur-xl md:flex-row md:justify-evenly md:gap-10 md:bg-transparent md:p-0 transition duration-500 ${
            isOpen ? 'max-md:tranxlate-x-0' : 'max-md:-translate-x-full'
          }`}
        >
          <li className='hover:text-pri transition duration-300'>
            <Link
              href='#top'
              className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
            >
              Home
            </Link>
          </li>
          <li className='hover:text-pri transition duration-300'>
            <Link
              href='#designs'
              className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
            >
              Designs
            </Link>
          </li>
          <li className='hover:text-pri transition duration-300'>
            <Link
              href='#about'
              className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
            >
              About us
            </Link>
          </li>
          <li className='hover:text-pri transition duration-300'>
            <Link
              href='#contact'
              className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
    </div>
  );
};

export default Navbar;
