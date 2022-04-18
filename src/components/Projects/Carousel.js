import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import React, { useState } from 'react'

import './Carousel.css'

const Carousel = (props) => {
  const [state, setState] = useState(0);

  const list = props.list;

  const handlePrev = () => {
    setState((state - 1 + list.length) % list.length);
  }

  const handleNext = () => {
    setState((state + 1) % list.length);
  }

  const carouselStyle = (state) => {
    return {
      transition: 'transform 0.5s ease-in-out',
      transform: `translateX(-${(state * 100).toString()}%)`,
    }
  }


  return (
    <div className='h-full w-full flex flex-col items-center relative p-4 bg-slate-800 border-2 border-solid border-blue-400 rounded-lg'>
      <div className='h-full flex w-full justify-start overflow-hidden '>
        <div className={`h-full w-full flex test`} style={carouselStyle(state)}>
          {list.map((item, i) => {
            return (
              <img key={item} className={`h-full w-full snap-center rounded-md`} src={item} alt="not found" />
            )
          })}
        </div>
      </div>
      <div className='text-slate-300 absolute top-1/2 -translate-y-1/2 flex flex-row justify-between px-3 sm:px-3 md:px-4 button-wrapper'>
        <button className='p-2 hover:text-slate-400' onClick={handlePrev}><ArrowBackIosRounded className='carousel-button' /></button>
        <button className='p-2 hover:text-slate-400' onClick={handleNext}><ArrowForwardIosRounded className='carousel-button' /></button>
      </div>
    </div>
  )
}

export default Carousel