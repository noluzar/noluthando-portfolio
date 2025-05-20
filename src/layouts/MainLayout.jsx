import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

const MainLayout = () => {
    return (
        <div className='bg-gray-200 flex flex-col items-cente'>
            <Navbar />
            <Profile />
        </div>

    )
}

export default MainLayout
