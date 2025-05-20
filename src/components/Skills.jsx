import React from 'react'
import { SkillsCard } from './Cards'
import { GoDotFill } from 'react-icons/go'

const Skills = () => {
  return (
    <div className='bg-gray-200 p-6 space-y-2 rounded-md'>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex items-center space-x-1'>
          <GoDotFill className='text-gray-400 size-3' />
          <p className='text-lg font-semibold'>Skills</p>
        </div>
      </div>
      <SkillsCard
        imageSrc="./2.png"
        skillName="Portfolio Website"
      />
      <SkillsCard
        imageSrc="./2.png"
        skillName="Portfolio Website"
      />
      <SkillsCard
        imageSrc="./2.png"
        skillName="Portfolio Website"
      />
      <SkillsCard
        imageSrc="./2.png"
        skillName="Portfolio Website"
      />
    </div>
  )
}

export default Skills
