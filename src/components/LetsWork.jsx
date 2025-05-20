import React from 'react'
import { CopyButton, HireMeButton } from './Buttons'

const LetsWork = () => {
    return (
        <div className='py-10 space-y-4 flex flex-col items-center'>
            <h1 className='font-semibold text-2xl'>Let's work together</h1>
            <p>Creating user experience and visual appealing designs</p>
            <div className='flex space-x-2'>
                <HireMeButton onClick={() => alert("Let's work together!")} />
                <CopyButton onClick={() => console.log("Copied!")} />
            </div>
        </div>
    )
}

export default LetsWork
