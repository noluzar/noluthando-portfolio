import React from 'react'
import { RiHome6Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFolderCopy } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsMoonStars } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className='flex justify-between p-6 bg-[var(--primary-color)] rounded-xl fixed w-full'>
            <div className='flex items-center space-x-4'>
                <RiHome6Line />
                <CgProfile />
                <GiSkills />
                <MdOutlineFolderCopy />
            </div>
            <div className='flex items-center space-x-4'>
                <BsMoonStars />
                <button>Hire me</button>
            </div>
        </nav>
    )
}

export default Navbar
