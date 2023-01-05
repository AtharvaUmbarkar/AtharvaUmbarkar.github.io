import React from 'react'
import './css/Overlay.css'
import AboutPane from './side-panels/AboutPane'
import ProjectsPane from './side-panels/ProjectsPane'
import SkillsPane from './side-panels/SkillsPane'
import ExperiencePane from './side-panels/ExperiencePane'
import { Outlet } from 'react-router-dom'

const Overlay = () => {
  return (
    <div className='flex flex-col h-full'>
      <ul className='main-grid h-full'>
        <li className='blue-box'>
          <AboutPane/>
        </li>
        <li className='yellow-box'>
          <ProjectsPane/>
        </li>
        <li className='red-box'>
          <SkillsPane/>
        </li>
        <li className='green-box'>
          <ExperiencePane/>
        </li>
        <li className='outlet'>
          <Outlet/>
        </li>
      </ul>
    </div>
  )
}

export default Overlay