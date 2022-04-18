import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm('gmail_service', 'gmail_template', form.current, 'dDjwrXHfoHvmGkNhi')
      console.log(result);
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='flex flex-col w-full max-w-xs text-xl md:text-2xl lg:text-3xl lg:max-w-none' ref={form} onSubmit={sendEmail}>
      <div className='flex flex-col w-full justify-around items-center lg:flex-row lg:space-x-2'>
        <div className='flex flex-col items-start justify-evenly my-2 w-full'>
          <label className='text-sky-300 mb-1' htmlFor='name'>Name:</label>
          <input className='w-full caret-slate-200 outline-none rounded-sm text-slate-200 px-1 border-2 border-solid border-slate-400 bg-slate-700 bg-opacity-50 focus:border-blue-400 py-1 text-sm md:text-lg lg:text-xl' type="text" name="name" id='name' />
        </div>
        <div className='flex flex-col items-start justify-evenly my-2 w-full'>
          <label className='text-sky-300 mb-1' htmlFor='email'>Email:</label>
          <input className='w-[100%] caret-slate-200 outline-none rounded-sm text-slate-200 px-1 border-2 border-solid border-slate-400 bg-slate-700 bg-opacity-50 focus:border-blue-400 py-1 text-sm md:text-lg lg:text-xl' type="email" name="email" id='email' />
        </div>
      </div>
      <div className='flex flex-col items-start justify-evenly my-2 w-full'>
        <label className='text-sky-300 mb-1' htmlFor='message'>Message:</label>
        <textarea className='w-[100%] resize-y caret-slate-200 outline-none rounded-sm text-slate-200 px-1 border-2 border-solid border-slate-400 bg-slate-700 bg-opacity-50 focus:border-blue-400 py-1 text-sm md:text-lg lg:text-xl h-32' name="message" id='message' />
      </div>
      <input className='text-sky-400 bg-slate-700 border-2 border-solid border-sky-400 rounded-sm my-1 hover:text-pink-400 hover:border-pink-400 hover:bg-slate-700 cursor-pointer' type="submit" value="Send" />
    </form>
  );
}

export default EmailForm