'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuButton from './MenuButton';
import { BsChevronDown } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stickToTop, setStickToTop] = useState(false);
  const [whyPrestiqOpen, setWhyPrestiqOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdowns = () => {
    setWhyPrestiqOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setStickToTop(true);
      } else {
        setStickToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as Element).closest('.dropdown-container')) {
      closeDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex w-full justify-center items-center bg-white sticky top-0 z-40 transition duration-500 ${
        stickToTop ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <header
        className={`w-[85%] mx-auto grid grid-cols-[auto,_auto] md:flex justify-between items-center py-4 px-4 md:px-8 lg:px-10 lg:py-6 text-sm`}
      >
        <div>
          <Link href='/'>
            <h1 className='text-acc flex font-bold'>
              <span>PRISTIQ</span>
              <span className='self-end ml-2'>BUILD</span>
            </h1>
          </Link>
        </div>
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        <nav>
          <ul
            id='navbar-menu'
            className={`max-md:min-h-screen max-md:absolute flex items-center flex-col gap-6 min-w-full py-20 px-8 top-0 right-0 z-20 text-main bg-black/80 backdrop-blur-xl md:flex-row md:justify-evenly md:gap-10 md:bg-transparent md:p-0 transition duration-500 ${
              isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
            }`}
          >
           
            <li className='dropdown-container relative'>
              <button
                onClick={() => {
                  setWhyPrestiqOpen(!whyPrestiqOpen);
                  setServicesOpen(false);
                }}
                className='flex items-center gap-1 hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
              >
                Why Pristiq <BsChevronDown className={`transition-transform ${whyPrestiqOpen ? 'rotate-180' : ''}`} />
              </button>
              {whyPrestiqOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden min-w-[200px]">
                  <Link href="/why-modular" className="block px-4 py-2 hover:bg-gray-100 text-main">
                    Why Modular
                  </Link>
                  <Link href="/why-pristiq" className="block px-4 py-2 hover:bg-gray-100 text-main">
                    Why PristiqBuild
                  </Link>
                </div>
              )}
            </li>
            <li className='dropdown-container relative'>
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setWhyPrestiqOpen(false);
                }}
                className='flex items-center gap-1 hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
              >
                Services <BsChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden min-w-[200px]">
                  <Link href="/lgs-roofing" className="block px-4 py-2 hover:bg-gray-100 text-main">
                    LGS Roofing
                  </Link>
                </div>
              )}
            </li>
            <li className='hover:text-pri transition duration-300'>
              <Link
                href='/projects'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
              >
                Projects
              </Link>
            </li>
            <li className='hover:text-pri transition duration-300'>
              <Link
                href='/blogs'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
              >
                Blogs
              </Link>
            </li>
            <li className='hover:text-pri transition duration-300'>
              <Link
                href='/about'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium'
              >
                About us
              </Link>
            </li>
            <li className='text-bg transition duration-300'>
              <Link
                href='/contact'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300'
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