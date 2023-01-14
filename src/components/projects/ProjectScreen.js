import React, { useEffect, useState } from 'react'

import { LayoutGroup} from 'framer-motion'

import './ProjectScreen.css'
import Projects from './ProjectData';
import ProjectCard from './ProjectCard';

const ProjectScreen = () => {
  const [currCard, setCurrCard] = useState(null)
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
    observer.observe(document.querySelector('.project-main-container'));
    // console.log(visible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currCard, visible])

  return (
    <div className='project-screen min-h-screen w-full flex flex-col items-center snap-start px-2 py-4'>
      <div className='skill-title text-red text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:w-2/3 lg:w-1/3'>PROJECTS</div>
      <div className='project-main-container flex flex-col items-center w-3/4 md:w-3/5 lg:w-2/5 2xl:w-[30%] h-fit my-4'>
        <LayoutGroup>
          {Projects.map((card, i) => {
            return (
              <ProjectCard key={card} name={card} setCurrCard={setCurrCard} currCard={currCard} i={i} visible={visible} />
            )
          })}
        </LayoutGroup>
      </div>
    </div>
  )
}

export default ProjectScreen