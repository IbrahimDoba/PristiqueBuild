import React from 'react'
import { PropsType } from './SectionData'
import Image from 'next/image'

const SectionComp  = ({title, image, text}:PropsType) => {
  return (
    <div className="flex flex-col justify-between items-start w-[300px] m-[1%] h-auto ">
          <Image src={image} alt="img1" width={700} />
          <h1 className="font-bold text-3xl  my-6">{title}</h1>
          <p className="text-md  my-6 ">
          {text}
          </p>
          <button className="w-[150px]  bg-transparent border-acc border rounded py-2 px-4 test-sm">
            View design
          </button>
        </div>
  )
}

export default SectionComp
