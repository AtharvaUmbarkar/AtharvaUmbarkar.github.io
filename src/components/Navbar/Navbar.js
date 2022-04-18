import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './Navbar.css'

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const toggleOpen = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <nav className={`flex flex-row h-full fixed top-0 ${navOpen ? 'w-full' : 'w-0'} backdrop-blur-sm navbar z-10`}>
        <div className='w-1/2 bg-slate-900 bg-opacity-90'>
          <ul className={`flex flex-col space-y-2 mx-1.5 mt-12 text-lg text-blue-400 ${navOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <Link to={'/home'} onClick={toggleOpen} className='first-letter:text-blue-600 hover:first-letter:text-blue-300 hover:text-blue-300 hover:bg-slate-900 hover:bg-opacity-40 px-1.5 whitespace-nowrap w-full cursor-pointer'>Home</Link>
            <Link to={'/skills'} onClick={toggleOpen} className='first-letter:text-blue-600 hover:first-letter:text-blue-300 hover:text-blue-300 hover:bg-slate-900 hover:bg-opacity-40 px-1.5 whitespace-nowrap w-full cursor-pointer'>Skills</Link>
            <Link to={'/projects'} onClick={toggleOpen} className='first-letter:text-blue-600 hover:first-letter:text-blue-300 hover:text-blue-300 hover:bg-slate-900 hover:bg-opacity-40 px-1.5 whitespace-nowrap w-full cursor-pointer'>Projects</Link>
            <Link to={'/socials'} onClick={toggleOpen} className='first-letter:text-blue-600 hover:first-letter:text-blue-300 hover:text-blue-300 hover:bg-slate-900 hover:bg-opacity-40 px-1.5 whitespace-nowrap w-full cursor-pointer'>Socials</Link>
          </ul>
        </div>
        <div className='w-1/2 bg-slate-900 bg-opacity-70' onClick={toggleOpen}></div>
      </nav>
      <nav className={`flex flex-row items-center justify-start bg-slate-900 bg-opacity-80 sticky top-0 z-10`}>
        <div onClick={toggleOpen} className='z-[100] relative sm:hidden cursor-pointer'>
          {navOpen ?
            <CloseRoundedIcon className='m-2' sx={{ color: '#dbeafe' }} /> :
            <MenuRoundedIcon className='m-2' sx={{ color: '#3b82f6' }} />
          }
        </div>
        <div className='text-slate-50 text-xl my-2 mx-1 sm:my-2.5 sm:mx-4 lg:mx-12 md:text-2xl lg:text-3xl xl:text-4xl'>
          <p className='first-letter:text-blue-500 inline-block first-letter:font-bold'>Atharva</p>
          <span> </span>
          <p className='first-letter:text-blue-500 inline-block first-letter:font-bold'>Umbarkar</p>
        </div>
        <ul className='hidden flex-row justify-end space-x-3 mr-8 grow text-lg text-blue-400 sm:flex md:text-xl lg:text-2xl xl:text-3xl md:space-x-4 lg:space-x-5 xl:space-x-6 lg-nav-list'>
          <NavLink to={'/home'} className={({ isActive }) => (!isActive ? "" : "nav_active ") + 'p-1 first-letter:text-blue-600 hover:first-letter:text-blue-400 hover:text-slate-300'}>Home</NavLink>
          <NavLink to={'/skills'} className={({ isActive }) => (!isActive ? "" : "nav_active ") + 'p-1 first-letter:text-blue-600 hover:first-letter:text-blue-400 hover:text-slate-300'}>Skills</NavLink>
          <NavLink to={'/projects'} className={({ isActive }) => (!isActive ? "" : "nav_active ") + 'p-1 first-letter:text-blue-600 hover:first-letter:text-blue-400 hover:text-slate-300'}>Projects</NavLink>
          <NavLink to={'/socials'} className={({ isActive }) => (!isActive ? "" : "nav_active ") + 'p-1 first-letter:text-blue-600 hover:first-letter:text-blue-400 hover:text-slate-300'}>Socials</NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Navbar