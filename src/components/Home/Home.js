import React from 'react'

import './Home.css'

import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import PianoRoundedIcon from '@mui/icons-material/PianoRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center grow text-slate-100'>
      <section className='w-5/6 h-[65vh] flex flex-col justify-center items-center my-4 sm:my-8 md:my-12 lg:my-16 xl:my-24 backdrop-blur-lg sm:py-3 md:py-4 lg:py-8 xl:py-12 border-4 border-slate-300 rounded-xl intro'>
        <div className='text-4xl my-2 text-blue-300 font-semibold hello sm:text-5xl md:text-6xl lg:text-7xl sm:py-1 md:py-2 lg:py-3 xl:py-4 tracking-wide'>Hello,</div>
        <div className='text-center text-lg px-2 sm:px-3 md:px-4 lg:px-8 xl:px-12 mb-4 sm:text-xl md:text-2xl lg:text-3xl description'>I am Atharva Umbarkar a web/app development enthusiast who just happens to hold a degree in Aerospace Engineering</div>
      </section>

      <section className='w-5/6 flex flex-col justify-start items-center my-3 mb-4 backdrop-blur-lg'>
        <h1 className='text-2xl mb-2 sm:text-3xl md:text-[2rem] lg:text-[2.5rem] tracking-wide sm:mt-4 md:mt-6 lg:mt-8 sm:mb-3 md:mb-6 lg:mb-7 xl:mb-8 text-sky-300 font-semibold'>Interests</h1>
        <div className='flex flex-col justify-evenly items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-xl md:text-2xl lg:text-3xl w-full space-y-2'>
          <div className='grow flex flex-row items-center justify-between px-12 py-2 sm:flex-col sm:px-1 md:py-4 lg:py-8 w-full border-[1.5px] border-slate-400 rounded-xl'>
            <div className='first-letter:text-blue-400 first-letter:font-semibold sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-wide'>Development</div>
            <div><WebRoundedIcon sx={{ color: '#3b82f6' }} /></div>
          </div>
          <div className='grow flex flex-row items-center justify-between px-12 py-2 sm:flex-col sm:px-1 md:py-4 lg:py-8 w-full border-[1.5px] border-slate-400 rounded-xl'>
            <div className='first-letter:text-blue-400 first-letter:font-semibold sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-wide'>Robotics</div>
            <div><PrecisionManufacturingRoundedIcon sx={{ color: '#3b82f6' }} /></div>
          </div>
          <div className='grow flex flex-row items-center justify-between px-12 py-2 sm:flex-col sm:px-1 md:py-4 lg:py-8 w-full border-[1.5px] border-slate-400 rounded-xl'>
            <div className='first-letter:text-blue-400 first-letter:font-semibold sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-wide'>Coding</div>
            <div><CodeRoundedIcon sx={{ color: '#3b82f6' }} /></div>
          </div>
        </div>
      </section>

      <section className='w-5/6 flex flex-col justify-start items-center my-3 backdrop-blur-lg'>
        <h1 className='text-2xl mb-2 sm:text-3xl md:text-[2rem] lg:text-[2.5rem] tracking-wide sm:mt-4 md:mt-6 lg:mt-8 sm:mb-3 md:mb-6 lg:mb-7 xl:mb-8 text-sky-300 font-semibold'>Hobbies</h1>
        <div className='flex flex-col justify-evenly items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-xl md:text-2xl lg:text-3xl w-full space-y-2'>
          <div className='grow flex flex-row items-center justify-between px-12 py-2 sm:flex-col sm:px-1 md:py-4 lg:py-8 w-full border-[1.5px] border-slate-400 rounded-xl'>
            <div className='first-letter:text-blue-400 first-letter:font-semibold sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-wide'>Piano</div>
            <div><PianoRoundedIcon sx={{ color: '#3b82f6' }} /></div>
          </div>
          <div className='grow flex flex-row items-center justify-between px-12 py-2 sm:flex-col sm:px-1 md:py-4 lg:py-8 w-full border-[1.5px] border-slate-400 rounded-xl'>
            <div className='first-letter:text-blue-400 first-letter:font-semibold sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-wide'>Books</div>
            <div><MenuBookRoundedIcon sx={{ color: '#3b82f6' }} /></div>
          </div>
          <div className='grow flex flex-row items-center justify-between px-12 py-2 sm:flex-col sm:px-1 md:py-4 lg:py-8 w-full border-[1.5px] border-slate-400 rounded-xl'>
            <div className='first-letter:text-blue-400 first-letter:font-semibold sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 tracking-wide'>Games</div>
            <div><SportsEsportsRoundedIcon sx={{ color: '#3b82f6' }} /></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home