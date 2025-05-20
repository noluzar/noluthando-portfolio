import React from 'react'
import { FaRegCopy } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import Projects from './Projects';

const Profile = () => {
    return (
        <div className='bg-[var(--primary-color)] mt-22 w-[35%] rounded-md'>
            <div className='p-6 py-8 mx-2'>
                <div className='flex justify-between items-center '>
                    <div className='flex items-center space-x-2 text-gray-600 text-lg font-semibold'>
                        <GoDotFill className=' text-gray-400 size-3' />
                        <p className='text-xl'>Software Developer</p>
                    </div>
                    <div className='flex items-center space-x-2 bg-green-200 p-1 rounded-full text-[10px] text-green-900 font-semibold cursor-pointer'>
                        <GoDotFill className='text-green-600' />
                        <p>AVAILABLE FOR WORK</p>
                    </div>
                </div>
                <div className='py-4 space-y-4 flex items-center space-x-20 pt-10'>
                    <div className='text-lg'>
                        <h1 className='text-[34px] font-bold'>I'm Noluthando Ndlovu</h1>
                        <p>Software Developer from Johannesburg, South Africa.</p>
                        <p>Currently a Learner at CAPACITI</p>
                        <div>
                        </div>
                        <div className='space-x-4 pt-4 flex items-center'>
                            <div className='p-2 flex items-center space-x-2 bg-black text-white cursor-pointer rounded-md text-sm'>
                                <IoIosAddCircleOutline />
                                <button>Hire me</button>
                            </div>
                            <div className='bg-gray-300 p-2 flex items-center space-x-2 cursor-pointer rounded-md text-sm'>
                                <FaRegCopy />
                                <button>Copy Email</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] rounded-full bg-gray-400'>
                        <img
                            src='./1.jpg'
                            className='rounded-full w-full h-full p-2'
                        />
                    </div>
                </div>
            </div>
            <Projects />
        </div>
    )
}

export default Profile
