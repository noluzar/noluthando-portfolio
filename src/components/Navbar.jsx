import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoFolderOutline } from "react-icons/io5";
import { HireMeButton } from './Buttons';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-6 mt-2 bg-[var(--primary-color)] rounded-xl fixed w-[35%]'>
            <div className='flex items-center space-x-6'>
                <RiHome6Line className='size-6 text-gray-500' />
                <CgProfile className='size-6 text-gray-500' />
                <IoFolderOutline className='size-6 text-gray-500' />
                <HiOutlineShoppingBag className='size-6 text-gray-500' />
            </div>
            <div className='flex items-center space-x-6'>
                <BsMoonStars className='size-6' />
                <HireMeButton onClick={() => alert("Let's work together!")} />
            </div>
        </nav>
    )
}

export default Navbar
