import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/SkillsPane.css'

const SkillsPane = () => {
  return (
    <div className='h-full w-full flex flex-col-reverse items-center justify-start p-4 relative'>
      <div className='absolute h-[calc(100%-2rem)] w-[5%] bg-red rounded-md opacity-50'></div>
      <div className='skills w-full grid place-items-center border-2 border-solid border-red bg-black z-10 text-red text-6xl py-2'>SKILLS</div>
      <ul className='flex flex-col items-center justify-end w-full h-full'>
        <NavLink to={'/skills/frontend'} className={({isActive}) => isActive ? 'skills-pane-button-active' : 'skills-pane-button skills-pane-button-hover'}>FrontEnd</NavLink>
        <NavLink to={'/skills/backend'} className={({isActive}) => isActive ? 'skills-pane-button-active' : 'skills-pane-button skills-pane-button-hover'}>BackEnd</NavLink>
        <NavLink to={'/skills/other'} className={({isActive}) => isActive ? 'skills-pane-button-active' : 'skills-pane-button skills-pane-button-hover'}>Others</NavLink>
      </ul>
    </div>
  )
}

export default SkillsPane