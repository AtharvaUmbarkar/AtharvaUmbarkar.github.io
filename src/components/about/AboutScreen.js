import React, { useEffect, useState } from 'react'

import './AbourScreen.css'

import { CgPiano } from 'react-icons/cg'
import { MdMenuBook } from 'react-icons/md'
import { IoLogoGameControllerB } from 'react-icons/io'
import { IoIosMusicalNotes } from 'react-icons/io'


import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const AboutScreen = () => {

  const [aniFlag, setAniFlag] = useState(false)

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setAniFlag(aniFlag => aniFlag = true);
      }
      else setAniFlag(aniFlag => aniFlag = false);
    });
  }

  const observer = new IntersectionObserver(observerCallback, { threshold: [0.2] })

  useEffect(() => {
    observer.observe(document.querySelector('.about-card-container'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aniFlag])

  const hobbies = [
    <CgPiano />,
    <MdMenuBook />,
    <IoLogoGameControllerB />,
    <IoIosMusicalNotes />
  ]

  const hobbySlide = (i) => {
    return aniFlag ? `hobby-slide-in 0.5s ease-out ${hobbies.length - (2 + i * 0.3)}s forwards` : '';
  }

  return (
    <div id='about-screen' className='about-screen min-h-screen w-full flex flex-col items-center snap-start px-2 py-4'>

      <div className='about-title text-green text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:w-2/3 lg:w-1/3'>ABOUT ME</div>

      <div className='about-card-container h-64 w-40 lg:h-80 lg:w-52 relative my-12'>
        <div className={(aniFlag ? ' about-card-open-1 ' : ' about-card-close-1 rotate-[18deg] ') + 'h-full w-full absolute bg-teal-200 rounded-lg'}></div>
        <div className={(aniFlag ? ' about-card-open-2 ' : ' about-card-close-2 rotate-12 ') + 'h-full w-full absolute bg-teal-300 rounded-lg'}></div>
        <div className={(aniFlag ? ' about-card-open-3 ' : ' about-card-close-3 rotate-6 ') + 'h-full w-full absolute bg-teal-400 rounded-lg'}></div>
        <img className={(aniFlag ? ' about-card-open-4 ' : ' about-card-close-4 rotate-0 ') + 'about-image h-full w-full absolute bg-teal-500 rounded-lg border-2 border-teal-500 object-cover'} src='./images/about-pic-cropped.jpg' alt='about pic not found'></img>
      </div>

      <div className='w-3/4 text-sm mb-2  md:w-2/3 lg:w-1/3'>
        <span className='text-green text-lg mr-1 md:mr-2 lg:mr-3 font-semibold leading-5 md:text-xl lg:text-2xl'>Hi,</span>
        <span className='about-description text-white md:text-lg lg:text-xl'>I am Atharva Umbarkar, a 21 year old software engineer with primary interest in full stack development and everything else.</span>
      </div>

      <div className='flex flex-row items-center justify-between w-3/4 md:w-2/3 lg:w-1/3 my-4 mt-6 py-2 px-1 backdrop-blur-md select-none'>
        <div className='text-green pr-[6vw] md:pr-[12vw] lg:pr-[6vw] text-xl md:text-2xl lg:text-3xl'>Hobbies:</div>
        <ul className='flex flex-row items-center justify-between text-3xl flex-grow text-teal-300 md:text-4xl lg:text-[3vw]'>
          {hobbies.map((hobby, i) => {
            return (
              <li key={i} className='relative opacity-0 cursor-pointer' style={{ animation: hobbySlide(i) }}>{hobby}</li>
            )
          })}
        </ul>
      </div>

      <div className='flex flex-row items-center justify-between w-3/4 md:w-2/3 lg:w-1/3 my-4 py-2 px-1 backdrop-blur-md select-none'>
        <ul className='flex flex-row items-center justify-between mx-[10vw] md:mx-24 lg:mx-12 text-2xl flex-grow text-white-sec md:text-3xl lg:text-[2.75vw]'>
          <a href='https://www.linkedin.com/in/atharva-umbarkar/' target='_blank' rel='noreferrer' className='hover:text-green hover:backdrop-blur-3xl hover:cursor-pointer hover:scale-110'><AiFillLinkedin /></a>
          <a href='https://github.com/AtharvaUmbarkar' target='_blank' rel='noreferrer' className='hover:text-green hover:backdrop-blur-3xl hover:cursor-pointer hover:scale-110'><AiFillGithub /></a>
          <a href='https://www.facebook.com/atharva.umbarkar.351' target='_blank' rel='noreferrer' className='hover:text-green hover:backdrop-blur-3xl hover:cursor-pointer hover:scale-110'><AiFillFacebook /></a>
          <a href='https://www.instagram.com/atum_20/' target='_blank' rel='noreferrer' className='hover:text-green hover:backdrop-blur-3xl hover:cursor-pointer hover:scale-110'><AiFillInstagram /></a>
          <a href='mailto: atharvaumbarkar1@gmail.com' target='_blank' rel='noreferrer' className='hover:text-green hover:backdrop-blur-3xl hover:cursor-pointer hover:scale-110'><AiFillMail /></a>
        </ul>
        {/* <div className='text-green pl-[8vw] md:pl-[8vw] text-xl md:text-2xl lg:text-3xl'>Socials</div> */}
      </div>

    </div>
  )
}

export default AboutScreen