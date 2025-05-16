import React from 'react'
import { LuDot } from "react-icons/lu";
import { RiRadioButtonLine } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";

const Profile = () => {
    return (
        <div className='bg-[var(--primary-color)] p-4 mt-24'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center text-gray-600 text-xl font-semibold'>
                    <LuDot className='size-10 text-gray-400' />
                    <p>Software Developer</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <RiRadioButtonLine className='text-green-600' />
                    <p>AVAILABLE FOR WORK</p>
                </div>
            </div>
            <div className='py-4 space-y-4 flex items-center space-x-20'>
                <div className='text-cente space-y-1 text-lg'>
                    <h1 className='text-4xl font-bold'>I am Noluthando Ndlovu</h1>
                    <p>Software Developer from Johannesburg, South Africa.</p>
                    <p>Currently a Learner at CAPACITI</p>
                    <div>
                    </div>
                    <div className='space-x-4 pt-8 flex items-center'>
                        <div className='p-2 flex items-center space-x-2 bg-black text-white cursor-pointer'>
                            <IoIosAddCircleOutline />
                            <button className=''>Hire me</button>
                        </div>
                        <div className='bg-gray-300 p-2 flex items-center space-x-2'>
                            <FaRegCopy />
                            <button className='cursor-pointer'>Copy Email</button>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] rounded-full bg-gray-400'>
                    <img
                        src='./1.jpg'
                        className='rounded-full w-full h-full p-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile
