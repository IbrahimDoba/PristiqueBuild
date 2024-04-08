import Link from 'next/link';
import React from 'react';

function Projects() {
  return (
    <main>
      <section className='min-h-[90vh] grid place-content-center text-center px-6 lg:px-10'>
        <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>No Projects to be Displayed At The Moment</h1>
        {/* <p>Our projects are top notch and we are proud of them</p>
        <p>Explore </p> */}
      </section>
      <section className='px-6 lg:px-10 py-14 flex flex-col gap-4 lg:gap-8 bg-altBg'>
        {/* First project */}
        {/* <div className='grid md:grid-cols-2 gap-5'>
          <div className='h-[200px] lg:h-[500px] bg-acc flex items-center justify-center md:order-2'>
            Project Image
          </div>
          <div className='p-4 flex flex-col gap-4'>
            <h2 className='text-3xl'>Paradise acres Maitama</h2>
            <p>
              This is a 5 bedroom modular apartment with a swimming pool. It is a 2 storey building
            </p>
            <Link
              href='#'
              className='w-fit text-white outline-2 focus-visible:outline-pri focus-visible:bg-transparent focus-visible:text-pri tracking-widest uppercase text-sm max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300'
            >
              Project details
            </Link>
          </div>
        </div> */}
        {/* second project */}
        {/* <div className='grid md:grid-cols-2 gap-5'>
          <div className='h-[200px] lg:h-[500px] bg-acc flex items-center justify-center'>
            Project Image
          </div>
          <div className='p-4 flex flex-col gap-4'>
            <h2 className='text-3xl'>Wano kuni Jabi</h2>
            <p>
              This is a 2 bedroom fox Transformable with a swimming pool and a spacious kitchen
            </p>
            <p>Built us</p>
            <Link
              href='#'
              className='w-fit text-white outline-2 focus-visible:outline-pri focus-visible:bg-transparent focus-visible:text-pri tracking-widest uppercase text-sm max-md:text-white font-medium bg-acc p-2 px-3 rounded-md border-2 border-transparent hover:text-acc hover:bg-transparent hover:border-acc transition duration-300'
            >
              Project details
            </Link>
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default Projects;
