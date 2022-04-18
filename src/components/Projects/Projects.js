import React, { useState } from 'react'

import projects from '../Data/projects'
import Carousel from './Carousel'
import CarouselMobile from './CarouselMobile'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import './Projects.css'

const Projects = () => {

  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const [info3, setInfo3] = useState(false);

  const toggleInfo1 = () => {
    setInfo1(!info1);
  }

  const toggleInfo2 = () => {
    setInfo2(!info2);
  }
  const toggleInfo3 = () => {
    setInfo3(!info3);
  }

  return (
    <>
      <div className='flex flex-col justify-start w-full px-4 mt-4 sm:px-6 sm:mt-6 md:px-8 md:mt-8 lg:px-12 lg:mt-10 xl:mt-12 xl:mb-6 md:mb-2'>
        <h1 className='text-2xl font-bold text-pink-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Projects:</h1>
        <p className='text-xs text-slate-300 sm:text-sm md:text-base lg:text-lg xl:text-xl lg:mt-2'>some of the projects I have worked on</p>
      </div>
      <div className='w-full flex flex-col my-4 items-center px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='w-full flex flex-col sm:flex-row sm:items-start items-center justify-start sm:justify-between sm:my-2 sm:mb-3 lg:mb-6'>
          <div className='self-start flex flex-row sm:flex-col sm:items-start items-center'>
            <a href={projects[0].link} target="_blank" rel="noopener noreferrer">
              <div className='text-xl font-bold text-sky-400 hover:text-sky-300 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{projects[0].name}:</div>
            </a>
            <span className='sm:hidden mx-1 sm:mx-0 text-slate-300'>{info1 ? <CloseRoundedIcon onClick={toggleInfo1} className='info-icon' /> : <InfoOutlinedIcon onClick={toggleInfo1} className='info-icon' />}</span>
            <div className=' mt-2 hidden sm:block text-slate-300 sm:w-[13rem] md:w-[16rem] lg:w-[20rem] xl:w-[25rem] md:text-base lg:text-lg xl:text-xl'>{projects[0].description}</div>
          </div>
          <div className='relative w-full sm:hidden'>
            <div className={`${info1 ? 'block' : 'hidden'} absolute z-10 sm:hidden text-slate-300 text-sm bg-slate-900 p-3 border border-solid border-blue-400 my-1 rounded`}>{projects[0].description}</div>
          </div>
          <div className='grow flex flex-col items-center'>
            <div className='w-[16rem] sm:w-[23rem] md:w-[28rem] lg:w-[35rem] xl:w-[40rem] h-[10rem] sm:h-[14rem] md:h-[18rem] lg:h-[22rem] xl:h-[24rem] flex flex-col justify-center items-center mt-2 mb-6'>
              <Carousel list={projects[0].images} />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col sm:flex-row items-center justify-start sm:justify-between sm:my-2 sm:mb-3 lg:mb-6'>
          <div className='self-start flex flex-row sm:flex-col sm:items-start items-center'>
            <a href={projects[1].link} target="_blank" rel="noopener noreferrer">
              <div className='text-xl font-bold text-sky-400 hover:text-sky-300 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{projects[1].name}:</div>
            </a>
            <span className='sm:hidden mx-1 sm:mx-0 text-slate-300'>{info2 ? <CloseRoundedIcon onClick={toggleInfo2} className='info-icon' /> : <InfoOutlinedIcon onClick={toggleInfo2} className='info-icon' />}</span>
            <div className=' mt-2 hidden sm:block text-slate-300 sm:w-[13rem] md:w-[16rem] lg:w-[20rem] xl:w-[25rem] md:text-base lg:text-lg xl:text-xl'>{projects[1].description}</div>
          </div>
          <div className='relative w-full sm:hidden'>
            <div className={`${info2 ? 'block' : 'hidden'} absolute z-10 sm:hidden text-slate-300 text-sm bg-slate-900 p-3 border border-solid border-blue-400 my-1 rounded`}>{projects[1].description}</div>
          </div>
          <div className='grow flex flex-col items-center'>
            <div className='w-[16rem] sm:w-[23rem] md:w-[28rem] lg:w-[35rem] xl:w-[40rem] h-[10rem] sm:h-[14rem] md:h-[18rem] lg:h-[22rem] xl:h-[24rem] flex flex-col justify-center items-center mt-2 mb-6'>
              <Carousel list={projects[1].images} />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col sm:flex-row items-center justify-start sm:justify-between sm:my-2 sm:mb-3 lg:mb-6'>
          <div className='self-start flex flex-row sm:flex-col sm:items-start items-center'>
            <a href={projects[2].link} target="_blank" rel="noopener noreferrer">
              <div className='text-xl font-bold text-sky-400 hover:text-sky-300 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{projects[2].name}:</div>
            </a>
            <span className='sm:hidden mx-1 sm:mx-0 text-slate-300'>{info3 ? <CloseRoundedIcon onClick={toggleInfo3} className='info-icon' /> : <InfoOutlinedIcon onClick={toggleInfo3} className='info-icon' />}</span>
            <div className=' mt-2 hidden sm:block text-slate-300 sm:w-[13rem] md:w-[16rem] lg:w-[20rem] xl:w-[25rem] md:text-base lg:text-lg xl:text-xl'>{projects[2].description}</div>
          </div>
          <div className='relative w-full sm:hidden'>
            <div className={`${info3 ? 'block' : 'hidden'} absolute z-10 sm:hidden text-slate-300 text-sm bg-slate-900 p-3 border border-solid border-blue-400 my-1 rounded`}>{projects[2].description}</div>
          </div>
          <div className='grow flex flex-col items-center'>
            <div className='w-[16rem] sm:w-[23rem] md:w-[28rem] lg:w-[35rem] xl:w-[40rem] h-[10rem] sm:h-[14rem] md:h-[18rem] lg:h-[22rem] xl:h-[24rem] flex flex-col justify-center items-center mt-2 mb-6'>
              <CarouselMobile list={projects[2].images} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects