import Image from 'next/image';
import React from 'react';
import meeting from '../../../assets/men mount.jpg';

const About = () => {
  return (
    <main>
      <section className='about text-acc mx-auto min-h-[65vh] grid place-content-center text-center bg-altBg bg-fixed'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold uppercase mb-4'>Pristiq Build</h1>
        <p className='max-w-screen-md'>
          We are a team of architects and enviroment enthusiasts dedicated to
          improving our enviroment by usings renewable and eco-friendly
          materials and methods
        </p>
      </section>

      <div
        id='about'
        className='w-[100%] h-screen bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto'
      >
        <div className='flex  flex-1'>
          <Image src={meeting} alt='men mount' />
        </div>
        <div className='flex ml-[8%] h-[60%] flex-1 flex-col justify-around items-start max-lg:my-[4%] '>
          <p className='w-[70%]  text-5xl text-txt font-semibold max-lg:text-3xl max-lg:my-[2%]'>
            At Pristiq Build, we’re proud to build outside the box and do
            things differently.
          </p>
          <p className='w-[70%] max-lg:my-[2%]'>
            While we’re traditional about many things – good customer service,
            family values and local support – we also believe in challenging the
            norm. For more than a decade, we’ve helped to change the idea of
            modular homes, with award-winning designs that add a new dimension
            to modern living.
          </p>
          <button className='w-[150px] text-txt bg-transparent border-acc border rounded py-2 px-4 test-sm'>
            Our Process
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
