import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
      <Navbar/>
      <Profile/>
    </div>
  )
}

export default App
