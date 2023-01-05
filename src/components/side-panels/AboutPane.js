import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import NameBox from '../NameBox'

import '../css/AboutPane.css'

const AboutPane = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-start p-4 relative'>
      <div className='absolute h-[calc(100%-2rem)] w-[5%] bg-blue rounded-md opacity-50'></div>
      <Link to={'/'} className='w-full aspect-square border-2 border-solid border-blue bg-black z-10 rounded-sm'>
        <NameBox/>
      </Link>
      <ul className='flex flex-col items-center justify-start w-full h-full'>
        <NavLink end to={'/about'} className={({isActive}) => isActive ? 'about-pane-button-active' : 'about-pane-button about-pane-button-hover'}>About</NavLink>
        <NavLink to={'/about/socials'} className={({isActive}) => isActive ? 'about-pane-button-active' : 'about-pane-button about-pane-button-hover'}>Socials</NavLink>
        <NavLink to={'/about/contact'} className={({isActive}) => isActive ? 'about-pane-button-active' : 'about-pane-button about-pane-button-hover'}>Contact</NavLink>
      </ul>
    </div>
  )
}

export default AboutPane