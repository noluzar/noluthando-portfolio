import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaDiscord } from "react-icons/fa";

const Socials = () => {
    return (
        <div className='bg-[var(--background-color)] flex justify-between p-6 rounded-md'>
            <div className='flex items-center space-x-1'>
                <GoDotFill className='text-gray-400 size-3' />
                <p className='text-lg font-semibold'>Projects</p>
            </div>
            <div className='flex items-center space-x-4'>
                <FaGithub size={35} className='bg-[var(--primary-color)] p-2 rounded-full cursor-pointer' />
                <FaLinkedinIn size={35} className='bg-[var(--primary-color)] p-2 rounded-full cursor-pointer' />
                <FaWhatsapp size={35} className='bg-[var(--primary-color)] p-2 rounded-full cursor-pointer' />
                <FaDiscord size={35} className='bg-[var(--primary-color)] p-2 rounded-full cursor-pointer' />
            </div>
        </div>
    )
}

export default Socials
