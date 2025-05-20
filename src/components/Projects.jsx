import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import {ProjectCards} from './Cards'

const Projects = () => {
  return (
    <div className='bg-gray-200 p-6 space-y-2 rounded-md'>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex items-center space-x-1'>
          <GoDotFill className='text-gray-400 size-3' />
          <p className='text-lg font-semibold'>Projects</p>
        </div>
        <div className='flex items-center space-x-2 bg-[var(--primary-color)] p-2 font-semibold text-sm rounded-md shadow-2xl cursor-pointer'>
          <p>View All</p>
          <FaArrowRight />
        </div>
      </div>
      <ProjectCards
        imageSrc="./2.png"
        projectName="Portfolio Website"
        techStack="HTML, Tailwind, React, JavaScript"
      />
       <ProjectCards
        imageSrc="./2.png"
        projectName="Portfolio Website"
        techStack="HTML, Tailwind, React, JavaScript"
      />
       <ProjectCards
        imageSrc="./2.png"
        projectName="Portfolio Website"
        techStack="HTML, Tailwind, React, JavaScript"
      />
    </div>
  )
}

export default Projects
