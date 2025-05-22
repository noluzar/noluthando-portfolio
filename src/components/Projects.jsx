import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import {ProjectCards} from './Cards'

const Projects = () => {
  return (
    <div className='bg-[var(--background-color)] p-6 rounded-xl'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-1'>
          <GoDotFill className='text-gray-400 size-3' />
          <p className='text-xl font-semibold text-[var(--text-color)]'>Projects</p>
        </div>
        <div className='flex items-center space-x-2 bg-[var(--primary-color)] p-2 font-semibold text-sm text-[var(--text-color)] rounded-md shadow cursor-pointer'>
          <p>View All</p>
          <FaArrowRight />
        </div>
      </div>
      <div className='mt-6 space-y-3'>
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
    </div>
  )
}

export default Projects
