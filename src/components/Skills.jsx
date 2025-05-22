import React from 'react'
import { SkillsCard } from './Cards'
import { GoDotFill } from 'react-icons/go'

const Skills = () => {
  return (
    <div className='bg-[var(--background-color)] p-6 space-y-2 rounded-md'>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex items-center space-x-1 '>
          <GoDotFill className='text-gray-400 size-3' />
          <p className='text-xl font-semibold text-[var(--text-color)]'>Skills</p>
        </div>
      </div>
      <SkillsCard
        imageSrc="./typescript.png"
        skillName="TypeScript"
      />
      <SkillsCard
        imageSrc="./react.png"
        skillName="React Js"
      />
      <SkillsCard
        imageSrc="./js.png"
        skillName="JavaScript"
      />
      <SkillsCard
        imageSrc="./node-js.png"
        skillName="Node Js"
      />
    </div>
  )
}

export default Skills
