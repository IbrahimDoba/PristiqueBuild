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
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
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
        className={`w-[85%] mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-10 lg:py-6 text-sm`}
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
        
        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <motion.ul className='flex items-center gap-10'>
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
                className='flex items-center gap-1 hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50'
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
                className='flex items-center gap-1 hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50'
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
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300'
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
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300'
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
                className='outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium bg-gradient-to-r from-acc to-acc/90 p-3 px-6 rounded-lg border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className={`fixed top-0 right-0 h-screen w-full bg-black/90 backdrop-blur-xl z-50 md:hidden shadow-2xl transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      >
        <div className="flex flex-col h-full bg-black/80">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/20 bg-black/60">
            <h2 className="text-white font-bold text-xl">Menu</h2>
            <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto p-6 bg-black/40">
            <ul className="space-y-6">
              <motion.li 
                className='dropdown-container'
                variants={navItemVariants}
              >
                <motion.button
                  onClick={() => {
                    setWhyPrestiqOpen(!whyPrestiqOpen);
                    setServicesOpen(false);
                  }}
                  className='flex items-center justify-between w-full text-left text-white hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                      className="mt-2 bg-white/10 rounded-lg overflow-hidden"
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.div variants={dropdownItemVariants}>
                        <Link 
                          href="/why-modular" 
                          className="block px-4 py-3 hover:bg-white/20 text-white transition-all duration-300 border-b border-white/20 last:border-b-0"
                          onClick={toggleMenu}
                        >
                          Why Modular
                        </Link>
                      </motion.div>
                      <motion.div variants={dropdownItemVariants}>
                        <Link 
                          href="/why-pristiq" 
                          className="block px-4 py-3 hover:bg-white/20 text-white transition-all duration-300"
                          onClick={toggleMenu}
                        >
                          Why PristiqBuild
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              
              <motion.li 
                className='dropdown-container'
                variants={navItemVariants}
              >
                <motion.button
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setWhyPrestiqOpen(false);
                  }}
                  className='flex items-center justify-between w-full text-left text-white hover:text-pri transition duration-300 outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                      className="mt-2 bg-white/10 rounded-lg overflow-hidden"
                      variants={dropdownVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.div variants={dropdownItemVariants}>
                        <Link 
                          href="/prefabricated-modular" 
                          className="block px-4 py-3 hover:bg-white/20 text-white transition-all duration-300 border-b border-white/20"
                          onClick={toggleMenu}
                        >
                          Prefabricated/Modular Builds
                        </Link>
                      </motion.div>
                       <motion.div variants={dropdownItemVariants}>
                        <Link 
                          href="/lgs-roofing" 
                          className="block px-4 py-3 hover:bg-white/20 text-white transition-all duration-300"
                          onClick={toggleMenu}
                        >
                          Light Gauge Steel Roofing Systems
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              
              <motion.li 
                className='hover:text-pri transition duration-300'
                variants={navItemVariants}
              >
                <Link
                  href='/projects'
                  className='block text-white outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300'
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </motion.li>
              
              <motion.li 
                className='hover:text-pri transition duration-300'
                variants={navItemVariants}
              >
                <Link
                  href='/about'
                  className='block text-white outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300'
                  onClick={toggleMenu}
                >
                  About us
                </Link>
              </motion.li>
              
              <motion.li 
                className='text-bg transition duration-300'
                variants={navItemVariants}
              >
                <Link
                  href='/contact'
                  className='block outline-2 focus-visible:outline-pri tracking-widest uppercase text-sm font-medium bg-gradient-to-r from-acc to-acc/90 p-3 px-6 rounded-lg border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition-all duration-300 shadow-lg hover:shadow-xl text-center'
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;  