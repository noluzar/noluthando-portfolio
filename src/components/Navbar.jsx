import React, { useEffect, useState } from 'react';
import { RiHome6Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsMoonStars } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoFolderOutline } from "react-icons/io5";
import { HireMeButton } from './Buttons';
import { FaSun } from "react-icons/fa";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className='flex justify-between p-4 mt-2 bg-[var(--primary-color)] rounded-xl shadow-xl fixed w-[560px]'>
            <div className='flex items-center space-x-6'>
                <RiHome6Line className='size-6 text-gray-500' />
                <CgProfile className='size-6 text-gray-500' />
                <IoFolderOutline className='size-6 text-gray-500' />
                <HiOutlineShoppingBag className='size-6 text-gray-500' />
            </div>
            <div className='flex items-center space-x-6'>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <FaSun className='size-5' /> : <BsMoonStars className='size-5' />}
                </button>
                <HireMeButton onClick={() => alert("Let's work together!")} />
            </div>
        </nav>
    );
};

export default Navbar;
