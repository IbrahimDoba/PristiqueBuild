"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionsData } from './designData';
import Design from './design';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md";

const SectionsPage = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const itemsPerPage = 4;

 const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
 };

 const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
 };

 const currentItems = sectionsData.slice(currentIndex, currentIndex + itemsPerPage);

 return (
    <div id='designs' className='w-[100%] bg-sec flex justify-center items-center'>
      <div className='flex w-[80%] h-auto my-[3%] flex-col justify-start items-start bg-sec text-txt'>
        <div className='mb-3'>
          <h1 className='font-semibold text-4xl text-start'>How Pristiq Builds</h1>
        </div>
        <div className='w-full  flex items-end justify-end mb-4'>
          <button onClick={handlePrev} style={{ display: currentIndex === 0 ? 'none' : 'block' }} className={`mr-4 `}><MdKeyboardArrowLeft size={40}/></button>
          <button onClick={handleNext} style={{ display: currentIndex + itemsPerPage >= sectionsData.length ? 'none' : 'block' }}><MdKeyboardArrowRight size={40}/></button>
        </div>
        <div className='flex w-full justify-around items-center max-md:justify-center'>
          <AnimatePresence>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
              {currentItems.map((section) => (
                <motion.div
                 key={section.id}
                 initial={{ opacity: 0, y: -50 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 50 }}
                 transition={{ duration: 0.5 }}
                >
                 <Design
                    id={section.id}
                    title={section.title}
                    image={section.image}
                    text={section.text}
                    link={section.link}
                 />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </div>
 );
};

export default SectionsPage;