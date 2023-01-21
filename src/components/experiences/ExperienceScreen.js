import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import Experiences from './ExperienceData'
import './ExperienceScreen.css'

const moment = require('moment');

const mainContainerVariant = {
  hidden: {

  },
  visible: {
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      delay: 0.5,
      when: 'beforeChildren'
    }
  },
  transition: {

  },
  exit: {

  },
}

const cardVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {

  },
  exit: {

  },
}

// const contentVariant = {
//   hidden: {

//   },
//   visible: {

//   },
//   transition: {

//   },
//   exit: {

//   },
// }

const getDate = (date) => {
  if (date === '-' || date === 'Ongoing') return date;
  const parsedDate = moment(date, 'MM/YYYY');
  return parsedDate.format('MMM, YYYY');
}

const ExperienceScreen = () => {
  const [visible, setVisible] = useState(false);

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible(visible => visible = true);
      }
      else {
        setVisible(visible => visible = false);
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, { threshold: [0] })

  useEffect(() => {
    observer.observe(document.querySelector('.experience-main-container'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='experience-screen min-h-screen w-full flex flex-col items-center snap-start px-2 py-4'>
      <div className='experience-main-container skill-title text-yellow text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:w-2/3 lg:w-1/3'>Experience</div>
      {visible && <motion.div
        variants={mainContainerVariant}
        initial='hidden'
        animate='visible'
        transition='transition'
        exit='exit'
        className=' flex flex-col w-[90%] md:w-3/4 lg:w-2/3 2xl:w-2/5 mt-4'
      >
        {Experiences.map((experience, i) => {
          return (
            <motion.div
              key={i}
              layout
              variants={cardVariant}
              className='flex flex-row items-center w-full h-fit experience-card'
            >
              <div className='w-2/5 h-24 md:h-28 lg:h-32 flex flex-col self-center items-center justify-center text-white-sec xs:text-sm 2xs:text-xs text-2xs lg:text-base'>
                <div className='mr-0.5 '>{getDate(experience.startDate)}</div>
                <div className='mr-0.5 leading-none w-full md:w-4/5 lg:w-3/5 my-1 h-0.5 bg-yellow'></div>
                <div className='mr-0.5 '>{getDate(experience.endDate)}</div>
              </div>

              <div className='w-1/4 self-stretch relative flex flex-col items-center justify-center'>
                <div className={(i === 0 ? 'rounded-t-full' : (i === Experiences.length - 1 ? 'rounded-b-full' : '')) + ` absolute h-full w-1 bg-yellow -z-10`}></div>
                <div className='h-4 md:h-5 lg:h-6 aspect-square rounded-sm bg-black border-2 border-solid border-yellow grid place-items-center box-content'>
                  <div className='h-3/5 aspect-square bg-yellow rounded-sm'></div>
                </div>
              </div>

              <div className='w-full flex flex-row items-start ml-2 bg-black-op rounded-sm my-1 py-1 cursor-pointer'>
                <img className='mt-2 h-12 md:h-14 lg:h-[4.5rem] object-cntain border-2 border-solid border-black rounded-sm px-1 md:px-1.5 lg:px-2' src={experience.iconLink} alt="icon-not-found" />
                <div className='self-stretch w-0.5 rounded-full flex flex-col justify-center'><div className='h-4/5 w-full bg-yellow'></div></div>
                <div className='flex-grow flex flex-col px-2 py-2 overflow-x-hidden'>
                  <div className='text-yellow text-base md:text-lg lg:text-xl xl:text-2xl break-words leading-none mb-1'>{experience.name}</div>
                  <div className='text-xs md:text-sm lg:text-base'>{experience.title}</div>
                  <div className='text-stone-400 text-xs md:text-sm lg:text-base'>
                    <span>{experience.location} </span>
                    <span className=''>&#x2022;{experience.type}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>}
    </div>
  )
}

export default ExperienceScreen