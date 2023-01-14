import React from 'react'

import './LandingScreen.css'

const Profession = () => {
  return (
    <div className='landing-profession w-fit text-justify text-red font-semibold flex flex-col leading-none lg:ml-2'>
      <ul className='flex flex-row justify-between'>
        <li>F</li>
        <li>U</li>
        <li>L</li>
        <li>L</li>
      </ul>
      <ul className='flex flex-row justify-between'>
        <li>S</li>
        <li>T</li>
        <li>A</li>
        <li>C</li>
        <li>K</li>
      </ul>
      <ul className='flex flex-row justify-between'>
        <li>D</li>
        <li>E</li>
        <li>V</li>
        <li>E</li>
      </ul>
      <ul className='flex flex-row justify-between'>
        <li>L</li>
        <li>O</li>
        <li>P</li>
        <li>E</li>
        <li>R</li>
      </ul>
    </div>
  )
}

const Name = () => {
  return (
    <div className='landing-name min-h-screen text-yellow font-bold leading-none text-center flex flex-row my-2 mx-1'>
      <ul className='flex flex-row mb-4 flex-grow justify-evenly'>
        <li>A</li>
        <li>T</li>
        <li>H</li>
        <li>A</li>
        <li>R</li>
        <li>V</li>
        <li>A</li>
      </ul>
      <ul className='flex flex-row flex-grow justify-evenly'>
        <li>U</li>
        <li>M</li>
        <li>B</li>
        <li>A</li>
        <li>R</li>
        <li>K</li>
        <li>A</li>
        <li>R</li>
      </ul>
    </div>
  )
}
const LandingAnimation = () => {
  return (
    <ul className='landing-texture flex flex-row min-w-full h-[5vh]'>
      <li className='flex-grow bg-blue'></li>
      <li className='flex-grow bg-green'></li>
      <li className='flex-grow bg-yellow'></li>
      <li className='flex-grow bg-orange'></li>
      <li className='flex-grow bg-red'></li>
    </ul>
  )
}



const LandingScreen = () => {
  return (
    <div className='landing-screen h-full w-full flex snap-start'>
      <div className='landing-wrapper h-full items-center w-full flex flex-row justify-center p-1'>
        <Name />
        <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-around lg:h-fit w-fit lg:w-full mx-auto lg:mx-0 h-full px-10 lg:pr-6 pt-2 pb-10 lg:pb-2'>
          <Profession />
          <div className='flex flex-col items-center h-full min-w-fit lg:min-w-min lg:mx-12'>
            <div className='landing-welcome my-4 flex-shrink text-white font-bold'>Welcome to my portfolio website</div>
            <div className='landing-buttons flex flex-row w-full flex-wrap justify-start lg:justify-evenly items-center text-green font-semibold'>
              <a href='https://drive.google.com/file/d/1bQJFL6dd3Y4riA8gkgmwx1WZc1aJaH1x/view?usp=share_link' target="_blank" className='text-center border-2 backdrop-blur-md rounded-sm flex-grow border-green border-solid mb-4 hover:border-slate-300 hover:text-slate-300 mr-2' rel="noreferrer">CV</a>
              <button className='text-center border-2 backdrop-blur-md rounded-sm flex-grow border-green border-solid mb-4 hover:border-slate-300 hover:text-slate-300'>Lets Talk</button>
            </div>
            <LandingAnimation/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingScreen