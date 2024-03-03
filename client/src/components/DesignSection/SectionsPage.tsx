import React from 'react';
import { sectionsData } from './designData';
import Design from './design';

const SectionsPage = () => {
  return (
    <div
      id='designs'
      className='w-[100%] bg-sec  flex justify-center items-center'
    >
      <div className='flex w-[80%] h-auto my-[8%] flex-col justify-start items-start bg-sec text-txt'>
        <div className='mb-10'>
          {' '}
          <h1 className=' font-semibold text-4xl text-start'>
            how Pristiq Builds
          </h1>
        </div>
        <div className='flex w-full justify-between items-center flex-wrap max-md:justify-center   '>
          {sectionsData.map((section) => (
            <Design
              key={section.id}
              id={section.id}
              title={section.title}
              image={section.image}
              text={section.text}
              link={section.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionsPage;
