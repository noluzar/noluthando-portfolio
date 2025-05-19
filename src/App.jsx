import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-cente'>
      <Navbar/>
      <Profile/>
    </div>
  )
}

export default App
