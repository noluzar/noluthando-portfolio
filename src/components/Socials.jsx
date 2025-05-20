import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaDiscord } from "react-icons/fa";

const Socials = () => {
    return (
        <div className='bg-[var(--background-color)] flex justify-between p-6 rounded-md'>
            <div className='flex items-center space-x-1'>
                <GoDotFill className='text-gray-400 size-3' />
                <p className='text-lg font-semibold text-[var(--text-color)]'>Follow Me</p>
            </div>
            <div className='flex items-center space-x-4'>
                <FaGithub size={30} className='bg-[var(--primary-color)] p-1 rounded-full cursor-pointer shadow shadow-gray-400' />
                <FaLinkedinIn size={30} className='bg-[var(--primary-color)] p-1 rounded-full cursor-pointer shadow shadow-gray-400' />
                <FaWhatsapp size={30} className='bg-[var(--primary-color)] p-1 rounded-full cursor-pointer shadow shadow-gray-400' />
                <FaDiscord size={30} className='bg-[var(--primary-color)] p-1 rounded-full cursor-pointer shadow shadow-gray-400' />
            </div>
        </div>
    )
}

export default Socials
