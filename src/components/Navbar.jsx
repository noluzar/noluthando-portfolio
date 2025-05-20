import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoFolderOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 mt-2 bg-[var(--primary-color)] rounded-xl fixed w-[35%]'>
            <div className='flex items-center space-x-6'>
                <RiHome6Line className='size-6 text-gray-500' />
                <CgProfile className='size-6 text-gray-500' />
                <IoFolderOutline className='size-6 text-gray-500' />
                <HiOutlineShoppingBag className='size-6 text-gray-500' />
            </div>
            <div className='flex items-center space-x-6'>
                <BsMoonStars className='size-6' />
                <div className='p-2 flex items-center space-x-2 bg-black text-white cursor-pointer rounded-md text-sm'>
                    <IoIosAddCircleOutline />
                    <button className=''>Hire me</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
