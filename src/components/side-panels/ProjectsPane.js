import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/ProjectsPane.css'

const ProjectsPane = () => {
  return (
    <div className='flex flex-row items-center justify-start h-full w-full p-4 relative'>
      <div className='absolute h-[5%] w-[calc(100%-2rem)] bg-yellow rounded-md'></div>
      <div className='h-full px-2 grid place-items-center border-2 border-solid border-yellow bg-black z-10 text-yellow text-6xl'>PROJECTS</div>
      <ul className='flex flex-row items-center justify-start h-full w-full'>
        <NavLink to={'/projects/1'} className={({isActive}) => isActive ? 'projects-pane-button-active' : 'projects-pane-button projects-pane-button-hover'}>I</NavLink>
        <NavLink to={'/projects/2'} className={({isActive}) => isActive ? 'projects-pane-button-active' : 'projects-pane-button projects-pane-button-hover'}>II</NavLink>
        <NavLink to={'/projects/3'} className={({isActive}) => isActive ? 'projects-pane-button-active' : 'projects-pane-button projects-pane-button-hover'}>III</NavLink>
        <NavLink to={'/projects/4'} className={({isActive}) => isActive ? 'projects-pane-button-active' : 'projects-pane-button projects-pane-button-hover'}>IV</NavLink>
      </ul>
    </div>
  )
}

export default ProjectsPane