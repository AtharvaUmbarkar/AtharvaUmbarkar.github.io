import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/ExperiencesPane.css'

const ExperiencePane = () => {
  return (
    <div className='flex flex-row-reverse items-center justify-start h-full w-full p-4 relative'>
      <div className='absolute h-[5%] w-[calc(100%-2rem)] bg-green rounded-md'></div>
      <div className='h-full px-2 grid place-items-center border-2 border-solid border-green bg-black z-10 text-green text-6xl'>EXPERIENCE</div>
      <ul className='flex flex-row-reverse items-center justify-start h-full w-full'>
        <NavLink to={'/experiences/1'} className={({isActive}) => isActive ? 'experiences-pane-button-active' : 'experiences-pane-button experiences-pane-button-hover'}>I</NavLink>
        <NavLink to={'/experiences/2'} className={({isActive}) => isActive ? 'experiences-pane-button-active' : 'experiences-pane-button experiences-pane-button-hover'}>II</NavLink>
        {/* <NavLink to={'/experiences/3'} className={({isActive}) => isActive ? 'experiences-pane-button-active' : 'experiences-pane-button experiences-pane-button-hover'}>III</NavLink> */}
        {/* <NavLink to={'/experiences/4'} className={({isActive}) => isActive ? 'experiences-pane-button-active' : 'experiences-pane-button experiences-pane-button-hover'}>IV</NavLink> */}
      </ul>
    </div>
  )
}

export default ExperiencePane