import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import LetsWork from '../components/LetsWork'
import Socials from '../components/Socials'

const MainLayout = () => {
    return (
        <div className='flex flex-col items-center bg-[var(--background)]'>
            <div className='pb-22 w-full flex flex-col items-center'>
                <Navbar />
            </div>
            <div className='bg-white w-[560px] pt-8 p-2 space-y-2 rounded-xl flex flex-col items-center'>
                <Profile />
                <Projects />
                <Skills />
                <LetsWork/>
                <Socials />
            </div>
        </div>

    )
};

export default MainLayout;
