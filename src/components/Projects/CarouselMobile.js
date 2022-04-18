import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';
import React, { useState } from 'react'

import './CarouselMobile.css'

const CarouselMobile = (props) => {
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
    <div className='h-full w-full flex flex-col items-center relative p-2 bg-slate-800 border-2 border-solid border-blue-400 rounded-lg'>
      <div className='h-full flex w-full justify-start my-2 md:my-4 overflow-hidden'>
        <div className={`h-full w-full flex`} style={carouselStyle(state)}>
          {list.map((item, i) => {
            return (
              <div key={item} className='h-full w-full flex justify-center shrink-0'>
                <img className={`h-full rounded-md`} src={item} alt="not found" />
              </div>
            )
          })}
        </div>
      </div>
      <div className='text-slate-300 absolute top-1/2 -translate-y-1/2 flex flex-row items-center justify-between px-3 sm:px-3 md:px-4 button-wrapper'>
        <button className='p-2 hover:text-slate-400' onClick={handlePrev}><ArrowBackIosRounded className='carousel-button-mobile' /></button>
        <button className='p-2 hover:text-slate-400' onClick={handleNext}><ArrowForwardIosRounded className='carousel-button-mobile' /></button>
      </div>
    </div>
  )
}

export default CarouselMobile;