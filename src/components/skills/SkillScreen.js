import React, { useEffect, useState } from 'react'

import './SkillScreen.css'
import skillData from './SkillData';

const PageName = (props) => {
  const { title, visible, inView } = props;
  return (
    <ul className={(visible && inView ? 'skill-letters-container-in' : 'skill-letters-container-out') + ' h-full flex flex-col justify-between text-transparent bg-clip-text text-6xl font-semibold'}>
      {title.map((letter) => {
        return (
          <li className='skill-title-letters' key={letter}>{letter[0]}</li>
        )
      })}
    </ul>
  )
}

const PageSkills = (props) => {
  const { title, skills, page, name } = props;
  const [visible, setVisible] = useState(false);

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible(visible => visible = true);
      }
      else setVisible(visible => visible = false);
    });
  }
  const observer = new IntersectionObserver(observerCallback, { threshold: [0] })

  useEffect(() => {
    observer.observe(document.querySelector('.skill-main-container'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  const cardSlide = (i) => {
    if (visible) return `slide-in 0.5s ease-out ${0.1 + i * 0.1}s 1 forwards`;
    else return '';
  };

  return (
    <div className={(page === name ? 'flex' : 'hidden') + ' w-full h-full flex-row items-start justify-between py-2'}>
      <PageName title={title} visible={visible} inView={page === name} />
      <div className='flex flex-row flex-grow justify-center w-full h-full'>
        <ul className='flex flex-col items-start text-lg lg:text-xl space-y-4 w-1/2'>
          {skills.map((skill, i) => {
            return (
              <li className='skill-card relative opacity-0 w-full rounded-sm flex flex-row cursor-pointer' style={{ animation: cardSlide(i) }} key={skill}>
                <div className='w-3 lg:w-4 h-full bg-blue-sec rounded-tl-sm rounded-bl-sm py-0.5 lg:py-1'></div>
                <div className='px-2 py-0.5 lg:py-1'>{skill}</div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const PageControl = (props) => {
  const { handlePageChange, page } = props;

  const [newPage, setNewPage] = useState(page)
  const [playAni, setPlayAni] = useState(true)

  const handlePageControl = (name) => {
    handlePageChange(name);
    setNewPage(newPage => newPage = name)
  }

  const handleMouseIn = (name) => {
    setNewPage(newPage => newPage = name)
    if (name !== page) setPlayAni(true)
  }

  const handleMouseOut = (name) => {
    setNewPage(newPage => newPage = page)
    if (name !== page) setPlayAni(false)
  }

  return (
    <div className='flex flex-col items-center min-h-[15vh] w-[90%] md:w-2/3 lg:w-2/5 my-4'>
      <div className='skill-nav-btn-container w-2/3 relative flex flex-col justify-center'>
        <div className='absolute top-1/2 -translate-y-1/2 h-[5%] w-full bg-blue'></div>
        <ul className='flex flex-row justify-between h-2/3 w-full'>
          {skillData.map((section) => {
            return (
              <li className={(page === section[0] ? 'bg-blue shadow-blue-blurred' : '') + ' hover:shadow-blue-blurred h-full aspect-square backdrop-blur-sm rounded-sm border-[3px] border-blue border-solid bg-black cursor-pointer'} key={section[0]} onClick={() => handlePageControl(section[0])} onMouseEnter={() => handleMouseIn(section[0])} onMouseLeave={() => handleMouseOut(section[0])}></li>
            )
          })}
        </ul>
      </div>
      <div className='flex-grow flex flex-row items-center justify-center w-full'>
        <div className={(playAni ? 'skill-new-page-in' : 'skill-new-page-out') + ' text-blue md:text-xl lg:text-2xl w-2/3 uppercase border-2 border-blue border-solid backdrop-blur-md rounded-md text-center py-1 md:my-3'}>{newPage}</div>
      </div>
    </div>
  )
}



const SkillScreen = () => {
  const [page, setPage] = useState(skillData[0][0]);

  const handlePageChange = (newPage) => {
    if (newPage !== page) setPage(newPage);
  }

  return (
    <div className='skill-screen min-h-screen w-full flex flex-col items-center snap-start px-2 py-4'>
      <div className='skill-title text-blue text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:w-2/3 lg:w-1/3'>SKILLS</div>
      <div className='flex flex-col flex-grow items-center w-full h-full justify-between'>
        <div className='skill-main-container w-full backdrop-blur-sm rounded-sm h-fit py-4 my-4 md:w-4/5 lg:w-1/2'>
          {skillData.map((section) => {
            return (
              <PageSkills key={section[0]} title={section[1]} skills={section[2]} page={page} name={section[0]} />
            )
          })}
        </div>
        <PageControl handlePageChange={handlePageChange} page={page} />
      </div>
    </div>
  )
}

export default SkillScreen