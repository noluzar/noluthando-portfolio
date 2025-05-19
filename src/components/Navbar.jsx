import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFolderCopy } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";
import { IoIosAddCircleOutline } from 'react-icons/io';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 mt-2 bg-[var(--primary-color)] rounded-xl fixed w-[40%]'>
            <div className='flex items-center space-x-4'>
                <RiHome6Line className='size-7 text-gray-300' />
                <CgProfile className='size-7 text-gray-300' />
                <GiSkills className='size-7 text-gray-300' />
                <MdOutlineFolderCopy className='size-7 text-gray-300' />
            </div>
            <div className='flex items-center space-x-4'>
                <BsMoonStars className='size-6' />
                <div className='p-2 flex items-center space-x-2 bg-black text-white cursor-pointer'>
                    <IoIosAddCircleOutline />
                    <button className=''>Hire me</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
