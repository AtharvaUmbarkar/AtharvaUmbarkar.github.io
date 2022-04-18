import React from 'react'

import './socials.css'

import EmailForm from './EmailForm'
import contacts from '../Data/contacts'

import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';

const Socials = () => {
  return (
    <div className='flex flex-col items-center m-6 min-h-[80vh]'>
      <h1 className='text-4xl font-bold text-pink-400 sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mb-6'>Contact Me</h1>
      <section className='flex md:flex-row md:justify-between items-start w-3/4 flex-col justify-start'>
        <div className='md:w-1/2 w-full flex flex-col items-center mb-4'>
          <EmailForm />
        </div>
        <div className='md:w-1/2 w-full flex flex-col justify-start items-center md:items-end mt-4'>
          <ul className='md:w-3/5 flex flex-col max-w-xs md:max-w-none'>
            <li className='mb-4 lg:mb-6'>
              <div className='text-pink-400 text-xl md:text-2xl lg:text-3xl mb-1'>Email:</div>
              <div className='flex flex-row items-center space-x-1 text-slate-200 text-sm'>
                <EmailIcon className='text-sky-400 socials' />
                <div className='text-sm sm:text-base md:text-base lg:text-lg'>{contacts.email[0]}</div>
              </div>
              <div className='flex flex-row items-center space-x-1 text-slate-200 text-sm'>
                <SchoolIcon className='text-sky-400 socials' />
                <div className='text-sm sm:text-base md:text-base lg:text-lg'>{contacts.email[1]}</div>
              </div>
            </li>
            <li className='mb-4 lg:mb-6'>
              <div className='text-pink-400 text-xl md:text-2xl lg:text-3xl mb-1'>Phone:</div>
              <div className='flex flex-row items-center space-x-1 text-slate-200 text-sm'>
                <PhoneAndroidIcon className='text-sky-400 socials' />
                <div className='text-sm sm:text-base md:text-base lg:text-lg'>{contacts.phone[0]}</div>
              </div>
              <div className='flex flex-row items-center space-x-1 text-slate-200 text-sm'>
                <PhoneAndroidIcon className='text-sky-400 socials' />
                <div className='text-sm sm:text-base md:text-base lg:text-lg'>{contacts.phone[1]}</div>
              </div>
            </li>
            <li className='mb-4 lg:mb-6'>
              <div className='text-pink-400 text-xl md:text-2xl lg:text-3xl mb-1'>Address:</div>
              <div className='flex flex-row items-center space-x-1 text-slate-200 text-sm'>
                <HomeIcon className='text-sky-400 socials' />
                <div className='text-sm sm:text-base md:text-base lg:text-lg'>{contacts.address}</div>
              </div>
            </li>
            <li className='mb-4 lg:mb-6'>
              <div className='text-pink-400 text-xl md:text-2xl lg:text-3xl mb-1'>Socials</div>
              <div className='flex flex-row text-sky-400 space-x-2'>
                {contacts.socials.map((social, i) => {
                  return (
                    <a href={social.link} target='_blank' rel="noreferrer">
                      {social.icon}
                    </a>
                  )
                })}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Socials