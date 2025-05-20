import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import LetsWork from '../components/LetsWork'
import Socials from '../components/Socials'

const MainLayout = () => {
    return (
        <div >
            <div className='pb-26'>
                <Navbar />
            </div>
            <div className='bg-white w-[35%] px-2 space-y-1 rounded-md flex flex-col items-cente'>
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
