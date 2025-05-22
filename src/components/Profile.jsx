import React from 'react'
import { GoDotFill } from "react-icons/go";
import { CopyButton, HireMeButton } from './Buttons';

const Profile = () => {
    return (
        <div className='w-full rounded-lg'>
            <div className=''>
                <div className='flex justify-between items-center px-6'>
                    <div className='flex items-center space-x-2 text-[var(--text-color)] font-semibold'>
                        <GoDotFill className=' text-gray-400 size-3' />
                        <p className='text-xl'>Software Developer</p>
                    </div>
                    <div className='flex items-center space-x-2 bg-green-200 p-1 rounded-full text-[12px] text-green-900 font-semibold cursor-pointer'>
                        <GoDotFill className='text-green-600' />
                        <p>AVAILABLE FOR WORK</p>
                    </div>
                </div>
                <div className='flex items-center space-x-20 py-10 px-6'>
                    <div className='text-lg font-light'>
                        <h1 className='text-[34px] font-semibold text-[var(--accent-color)]'>I'm Noluthando Ndlovu</h1>
                        <p>Software Developer from Johannesburg, South Africa.</p>
                        <p>Currently a Learner at CAPACITI</p>
                        <div>
                        </div>
                        <div className='space-x-4 pt-4 flex items-center'>
                            <HireMeButton onClick={() => alert("Let's work together!")} />
                            <CopyButton onClick={() => console.log("Copied!")} />
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
        </div>
    )
}

export default Profile
