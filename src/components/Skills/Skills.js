import React from 'react'

import skills from '../Data/skills'
import courses from '../Data/courses'

import './Skills.css'

const Skills = () => {
  return (
    <div className='text-slate-50'>
      <div className='flex flex-col justify-start w-full px-4 mt-4 sm:px-6 sm:mt-6 md:px-8 md:mt-8 lg:px-12 lg:mt-10 xl:mt-12'>
        <h1 className='text-2xl font-bold text-pink-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Technologies:</h1>
        <p className='text-xs text-slate-300 sm:text-sm md:text-base lg:text-lg xl:text-xl lg:mt-2'>applications and frameworks I have experience in</p>
      </div>

      <section className='flex flex-col px-4 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
        <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Web Development</h2>
        <div className='self-center grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-1 sm:gap-2 place-items-center place-content-center mt-2 md:mt-4'>
          {skills.web_development.map((skill, i) => {
            return (
              <div key={skill.name} className='p-2 backdrop-blur backdrop-brightness-110 w-full h-full border border-solid border-transparent hover:border hover:border-solid hover:border-slate-400 hover:backdrop-brightness-95 rounded-sm'>
                <a className='flex flex-col items-center' href={skill.link} target="_blank" rel="noopener noreferrer">
                  <div className='h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-[4.5rem] xl:w-[4.5rem]'>
                    <img className='h-full' src={skill.image} alt="not-found" />
                  </div>
                  <div className='hidden sm:block text-slate-200 mt-2 lg:text-xl lg:mt-3'>
                    {skill.name}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className='flex flex-col px-4 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
        <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Programming</h2>
        <div className='self-center grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 grid-flow-row gap-1 sm:gap-2 place-items-center place-content-center mt-2 md:mt-4'>
          {skills.programming.map((skill, i) => {
            return (
              <div key={skill.name} className='p-2 backdrop-blur backdrop-brightness-110 w-full h-full border border-solid border-transparent hover:border hover:border-solid hover:border-slate-400 hover:backdrop-brightness-95 rounded-sm'>
                <a className='flex flex-col items-center' href={skill.link} target="_blank" rel="noopener noreferrer">
                  <div className='h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-[4.5rem] xl:w-[4.5rem]'>
                    <img className='h-full' src={skill.image} alt="not-found" />
                  </div>
                  <div className='hidden sm:block text-slate-200 mt-2 lg:text-xl lg:mt-3'>
                    {skill.name}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className='flex flex-col px-4 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
        <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Robotics</h2>
        <div className='self-center grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 grid-flow-row gap-1 sm:gap-2 place-items-center place-content-center mt-2 md:mt-4'>
          {skills.robotics.map((skill, i) => {
            return (
              <div key={skill.name} className='p-2 backdrop-blur backdrop-brightness-110 w-full h-full border border-solid border-transparent hover:border hover:border-solid hover:border-slate-400 hover:backdrop-brightness-95 rounded-sm'>
                <a className='flex flex-col items-center' href={skill.link} target="_blank" rel="noopener noreferrer">
                  <div className='h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-[4.5rem] xl:w-[4.5rem]'>
                    <img className='h-full' src={skill.image} alt="not-found" />
                  </div>
                  <div className='hidden sm:block text-slate-200 mt-2 lg:text-xl lg:mt-3'>
                    {skill.name}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <section className='flex flex-col px-4 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
        <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Others</h2>
        <div className='self-center grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-1 sm:gap-2 place-items-center place-content-center mt-2 md:mt-4'>
          {skills.others.map((skill, i) => {
            return (
              <div key={skill.name} className='p-2 backdrop-blur backdrop-brightness-110 w-full h-full border border-solid border-transparent hover:border hover:border-solid hover:border-slate-400 hover:backdrop-brightness-95 rounded-sm'>
                <a className='flex flex-col items-center' href={skill.link} target="_blank" rel="noopener noreferrer">
                  <div className='h-10 w-10 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-[4.5rem] xl:w-[4.5rem]'>
                    <img className='h-full' src={skill.image} alt="not-found" />
                  </div>
                  <div className='hidden sm:block text-slate-200 mt-2 lg:text-xl lg:mt-3'>
                    {skill.name}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      <div className='flex flex-col justify-start w-full px-4 mt-4 sm:px-6 sm:mt-6 md:px-8 md:mt-8 lg:px-12 lg:mt-10 xl:mt-12'>
        <h1 className='text-2xl font-bold text-pink-400 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Courses:</h1>
        <p className='text-xs text-slate-300 sm:text-sm md:text-base lg:text-lg xl:text-xl lg:mt-2'>some of the courses I've completed</p>
      </div>

      <div className='xl:flex xl:flex-row xl:items-start xl:justify-evenly'>
        <section className='flex flex-col items-center px-2 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
          <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>General</h2>
          <div className='flex flex-col items-center px-0.5 space-y-1'>
            {courses.general.map((course, i) => {
              return (
                <div key={course.name} className='flex flex-row justify-start items-center text-sm w-full mt-1  rounded-sm backdrop-brightness-90 py-1.5 px-2 sm:text-base md:text-lg lg:text-xl xl:text-xl hover:w-[110%] course'>
                  <span className='text-slate-400 font-bold'>-</span>
                  <span className='mx-1 text-pink-400'>{course.code}:</span>
                  <span>{course.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className='flex flex-col items-center px-2 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
          <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Aerospace</h2>
          <div className='flex flex-col items-center px-0.5 space-y-1'>
            {courses.aerospace.map((course, i) => {
              return (
                <div key={course.name} className='flex flex-row justify-start items-center text-sm w-full mt-1  rounded-sm backdrop-brightness-90 py-1.5 px-2 sm:text-base md:text-lg lg:text-xl xl:text-xl hover:w-[110%] course'>
                  <span className='text-slate-400 font-bold'>-</span>
                  <span className='mx-1 text-pink-400'>{course.code}:</span>
                  <span>{course.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className='flex flex-col items-center px-2 mt-2 sm:px-6 sm:mt-4 md:px-8 md:mt-6 lg:px-12 lg:mt-8 xl:mt-10 mb-4'>
          <h2 className='text-base text-sky-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>Online</h2>
          <div className='flex flex-col items-center px-0.5 space-y-1'>
            {courses.online.map((course, i) => {
              return (
                <div key={course.name} className='flex flex-row justify-start items-center text-sm w-full mt-1  rounded-sm backdrop-brightness-90 py-1.5 px-2 sm:text-base md:text-lg lg:text-xl xl:text-xl hover:w-[110%] course'>
                  <span className='text-slate-400 font-bold'>-</span>
                  <span className='mx-1 text-pink-400'>{course.code}:</span>
                  <span>{course.name}</span>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Skills