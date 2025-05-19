import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const Projects = () => {
  return (
    <div className='bg-gray-200 p-2 space-y-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-1'>
          <GoDotFill className='text-gray-400' />
          <p className='text-lg font-semibold'>Projects</p>
        </div>
        <div className='flex items-center space-x-2 bg-[var(--primary-color)] p-2 font-semibold shadow-2xl cursor-pointer'>
          <p>View All</p>
          <FaArrowRight />
        </div>
      </div>
      <div className='flex justify-between items-center bg-[var(--primary-color)] p-2 rounded-md'>
        <div className='flex items-center'>
            <img
            src='./2.png'
            className='rounded-full w-[15%]'
             />
          <div className='space-y-2'>
            <h2>Project Name</h2>
            <p>HTML, Tailwind, React, JavaScript</p>
          </div>
        </div>
        <IoIosArrowForward />
      </div>
    </div>
  )
}

export default Projects
