import Image from 'next/image'
import React from 'react'
import meeting from '../../../assets/men mount.jpg';
import Link from 'next/link';


const Aboutus = () => {
  return (
    <div
        id='about'
        className='w-[100%] h-screen bg-bg flex justify-center items-center max-lg:flex-col max-lg:h-auto'
      >
        <div className='flex  flex-1'>
          <Image src={meeting} alt='men mount' />
        </div>
        <div className='flex ml-[8%] h-[60%] flex-1 flex-col justify-around items-start max-lg:my-[4%] '>
          <p className='w-[70%]  text-5xl text-txt font-semibold max-lg:text-3xl max-lg:my-[2%] max-md:text-lg'>
            At Pristiq Build, we’re proud to build outside the box and do
            things differently.
          </p>
          <p className='w-[70%] max-lg:my-[2%] max-md:w-[90%]'>
            While we’re traditional about many things – good customer service,
            family values and local support – we also believe in challenging the
            norm. For more than a decade, we’ve helped to change the idea of
            modular homes, with award-winning designs that add a new dimension
            to modern living.
          </p>
          <Link href="/about">
          <button className='w-[150px] text-txt bg-transparent border-acc border rounded py-2 px-4 test-sm'>
            More About us
          </button>
          </Link>
        </div>
      </div>
  )
}

export default Aboutus
