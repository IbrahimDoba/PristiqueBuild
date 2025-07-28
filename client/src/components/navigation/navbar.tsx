'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuButton from './MenuButton';
import { BsChevronDown } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Animation variants
  const navbarVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const navItemVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const dropdownVariants = {
    initial: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const dropdownItemVariants = {
    initial: { x: -10, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -10, opacity: 0 }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={navbarVariants}
      className={`flex w-full justify-center items-center bg-white/95 backdrop-blur-md sticky top-0 z-40 transition-all duration-500 ${
        stickToTop ? 'shadow-lg border-b border-gray-100' : 'shadow-none'
      }`}
    >
      <header
        className={`w-[85%] mx-auto grid grid-cols-[auto,_auto] md:flex justify-between items-center py-4 px-4 md:px-8 lg:px-10 lg:py-6 text-sm`}
      >
        <motion.div
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href='/'>
            <h1 className='text-acc flex font-bold text-xl lg:text-2xl'>
              <span>PRISTIQ</span>
              <span className='self-end ml-2'>BUILD</span>
            </h1>
          </Link>
        </motion.div>
        
        <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        
        <nav>
          <motion.ul
            id='navbar-menu'
            variants={isOpen ? mobileMenuVariants : {}}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className={`max-md:min-h-screen max-md:absolute flex items-center flex-col gap-6 min-w-full py-20 px-8 top-0 right-0 z-20 text-main bg-black/90 backdrop-blur-xl md:flex-row md:justify-evenly md:gap-10 md:bg-transparent md:p-0 transition duration-500 ${
              isOpen ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
            }`}
          >
            <motion.li 
              className='dropdown-container relative'
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <motion.button
                onClick={() => {
                  setWhyPrestiqOpen(!whyPrestiqOpen);
                  setServicesOpen(false);
                }}
                className='flex items-center gap-1 hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-50 max-md:hover:bg-white/10'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Why Pristiq 
                <motion.div
                  animate={{ rotate: whyPrestiqOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsChevronDown />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {whyPrestiqOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-xl overflow-hidden min-w-[220px] border border-gray-100"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/why-modular" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300 border-b border-gray-50 last:border-b-0"
                      >
                        Why Modular
                      </Link>
                    </motion.div>
                    <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/why-pristiq" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300"
                      >
                        Why PristiqBuild
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            
            <motion.li 
              className='dropdown-container relative'
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <motion.button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setWhyPrestiqOpen(false);
                }}
                className='flex items-center gap-1 hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-50 max-md:hover:bg-white/10'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Services 
                <motion.div
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <BsChevronDown />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-xl overflow-hidden min-w-[280px] border border-gray-100"
                    variants={dropdownVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/prefabricated-modular" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300 border-b border-gray-50"
                      >
                        Prefabricated/Modular Builds
                      </Link>
                    </motion.div>
                     <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/lgs-roofing" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300"
                      >
                        Light Gauge Steel Roofing Systems
                      </Link>
                    </motion.div>
                    {/* <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/real-estate-development" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300 border-b border-gray-50"
                      >
                        Real Estate Development & Project Management
                      </Link>
                    </motion.div>
                    <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/design-build-manufacture" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300 border-b border-gray-50"
                      >
                        Complete Design-Build/Manufacture
                      </Link>
                    </motion.div>
                    <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/custom-builds" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300 border-b border-gray-50"
                      >
                        Custom Builds/Hybrid Construction
                      </Link>
                    </motion.div>
                    <motion.div variants={dropdownItemVariants}>
                      <Link 
                        href="/light-gauge-steel-framing" 
                        className="block px-4 py-3 hover:bg-gradient-to-r hover:from-pri/10 hover:to-transparent text-main transition-all duration-300 border-b border-gray-50"
                      >
                        Light Gauge Steel Framing
                      </Link>
                    </motion.div> */}
                   
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            
            <motion.li 
              className='hover:text-pri transition duration-300'
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <Link
                href='/projects'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-50 max-md:hover:bg-white/10 transition-all duration-300'
              >
                Projects
              </Link>
            </motion.li>
            
            <motion.li 
              className='hover:text-pri transition duration-300'
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <Link
                href='/about'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium px-3 py-2 rounded-lg hover:bg-gray-50 max-md:hover:bg-white/10 transition-all duration-300'
              >
                About us
              </Link>
            </motion.li>
            
            <motion.li 
              className='text-bg transition duration-300'
              variants={navItemVariants}
              whileHover={{ y: -2 }}
            >
              <Link
                href='/contact'
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm max-md:text-white font-medium bg-gradient-to-r from-acc to-acc/90 p-3 px-6 rounded-lg border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
      </header>
    </motion.div>
  );
};

export default Navbar;  