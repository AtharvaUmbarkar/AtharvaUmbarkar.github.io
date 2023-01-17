import React, { useEffect, useState } from 'react'

import { LayoutGroup, motion } from 'framer-motion'

import './ProjectScreen.css'
import Projects from './ProjectData';
import ProjectCard from './ProjectCard';


const PageControl = (props) => {
  const { handlePageChange, page } = props;

  const handlePageControl = (i) => {
    handlePageChange(i);
  }

  return (
    <motion.div layout className='flex flex-col items-center h-fit w-[90%] md:w-2/3 lg:w-2/5 mb-2 mt-2 md:mt-auto'>
      <div className='project-nav-btn-container w-2/3 relative flex flex-col justify-center'>
        {/* <div className='absolute top-1/2 -translate-y-1/2 h-[5%] w-full bg-red'></div> */}
        <ul className='flex flex-row justify-center h-2/3 w-full'>
          {Projects.map((project, i) => {
            return (
              <motion.li className={(page === i ? 'bg-red shadow-red-blurred' : '') + ' hover:shadow-red-blurred h-full aspect-square backdrop-blur-sm rounded-sm border-[3px] border-red border-solid bg-black cursor-pointer mx-2'} key={i} onClick={() => handlePageControl(i)}></motion.li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

const ProjectScreen = () => {
  const [currCard, setCurrCard] = useState(null)
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(0);

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisible(visible => visible = true);
      }
      else {
        setVisible(visible => visible = false);
        setCurrCard(null);
      }
    });
  }
  const observer = new IntersectionObserver(observerCallback, { threshold: [0] })


  const handlePageChange = (newPage) => {
    if (newPage !== page) setPage(newPage);
  }

  useEffect(() => {
    observer.observe(document.querySelector('.project-main-container'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currCard])

  return (
    <div className='project-screen min-h-screen w-full flex flex-col items-center snap-start px-2 pt-4'>
      <div className=' text-red text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:w-2/3 lg:w-1/3'>PROJECTS</div>
      <div className='project-main-container flex flex-col items-center w-4/5 md:w-3/5 lg:w-2/5 2xl:w-[30%] h-fit mt-4 mb-4 lg:mb-0'>
        <LayoutGroup>
          {Projects.map((section, j) => {
            return (j === page) && section.map((card, i) => {
              return (
                <ProjectCard key={card.title} setCurrCard={setCurrCard} currCard={currCard} i={i} visible={visible} card={card} />
              )
            })
          })}
        </LayoutGroup>
      </div>
      {currCard === null && <PageControl handlePageChange={handlePageChange} page={page} />}
    </div>
  )
}

export default ProjectScreen