import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CgArrowLongLeft } from 'react-icons/cg'
import { RiLinkM } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'

const ProjectCard = (props) => {
  const { card, setCurrCard, currCard, i, visible } = props;
  const nullCard = currCard === null;
  const sameCard = currCard === card.title;
  const cardInnerCover = 'url(../../../'.concat(card.cover.concat(')'));

  const [open, setOpen] = useState(false)

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
    setCurrCard(card.title);
  }

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    setCurrCard(null);
  }

  const cardVariant = (i) => {
    return {
      hidden: {
        x: `${i % 2 ? '-' : '+'}15%`,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
        }
      },
      exit: {
        x: `${i % 2 ? '-' : '+'}10%`,
        opacity: 0,
        transition: {
          duration: 0.25,
        }
      },
    }
  };

  const overlayVariant = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      height: 'min(80vh, 50rem)',
      transition: {
        type: 'tween',
        delay: 0.6,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    },
  }

  const contentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.25
      }
    },
    exit: {}
  }

  const emptyVariant = {
    hidden: {},
    visible: {},
    exit: {},
  }

  useEffect(() => {
    setOpen(false)
  }, [visible])


  return (
    <AnimatePresence mode='wait'>

      {
        visible && (nullCard || sameCard) && <motion.div
          key={card.title + 'close'}
          layout
          className={/* (open ? '' : 'hover:shadow-red-blurred') + */ ' h-28 md:h-32 lg:h-32 xl:h-36 2xl:h-36 w-full my-2 overscroll-contain'}
          variants={cardVariant(i)}
          exit={'exit'}
          initial={'hidden'}
          animate={'visible'}
        >

          {!open &&
            <motion.div
              key={card.title + '-close-content'}
              layout
              className='w-full h-full flex rounded-sm cursor-pointer'
              onClick={handleOpen}
              variants={emptyVariant}
              whileHover={{ scale: 1.02, boxShadow: '0px 0px 10px 1px rgba(248,21,80,1)' }}
            >

              <div className='flex flex-row items-start bg-black w-full h-full'>
                <img className='object-cover bg-blend-multiply object-left w-2/5 md:w-2/5 h-full p-1' src={card.cover} alt='project-not-found'></img>
                <div className='flex flex-col h-full w-3/5 px-2 py-1 lg:py-2 text-red justify-between'>
                  <div className=' text-lg md:text-xl lg:text-2xl w-full leading-6'>{card.title}</div>
                  <div className='project-card-desc my-1 h-1/2 overflow-y-scroll w-full text-white text-xs md:text-sm lg:text-base'>
                    {card.description}
                  </div>
                </div>
              </div>

            </motion.div>
          }

          {open &&
            <motion.div
              key={card.title + '-open-content'}
              layout
              className='w-full h-full bg-black flex flex-col items-center justify-center'

              variants={overlayVariant}
            >
              <motion.div
                layout
                key={card.title + '-open-content-project'}
                className='bg-black h-full w-full border-4 border-solid border-red'
                variants={contentVariant}
              >

                <div className='w-full h-full flex flex-col justify-between'>
                  <div className='w-full flex-grow flex flex-col p-2 md:p-3 lg:p-4'>
                    <div className='w-full text-2xl md:text-3xl lg:text-4xl font-semibold text-red mb-2 cursor-pointer hover:text-white-sec'>{card.title} <RiLinkM style={{ display: 'inline' }} /></div>
                    <div className={`w-full h-1/4 md:h-[30%] lg:h-2/5 my-2 project-card-inner-cover`} style={{ backgroundImage: cardInnerCover }}></div>
                    <div className='project-card-desc w-full min-h-[20%] h-[20cqh] max-h-28 md:h-1/6 md:max-h-96 overflow-y-scroll relative my-2'>
                      <div className='absolute text-base lg:text-lg mr-2'>
                        <span className='text-red font-normal'>Description: </span>
                        <span className='text-white'>
                          {card.description}
                        </span>
                      </div>
                    </div>
                    <div className='w-full flex flex-row flex-wrap gap-2 my-3 md:my-4 text-red-sec-2 text-sm md:text-sm lg:text-base'>
                      {card.tags.map((tag) => {
                        return (
                          <div key={tag} className='h-fit p-0.5 lg:p-1 w-fit text-center bg-black border-2 border-red-sec-2 border-solid rounded-sm'>{tag}</div>
                        )
                      })}
                    </div>
                  </div>
                  <div className='flex text-3xl m-1' >
                    <div className='cursor-pointer rounded-sm bg-red-sec p-1 mr-1 hover:bg-red flex-grow flex justify-center' onClick={handleClose}><CgArrowLongLeft /></div>
                    <a href={card.projectLink} target='_blank' rel='noreferrer' className='cursor-pointer rounded-sm bg-red-sec w-1/4 p-1 hover:bg-red flex justify-center'><AiFillGithub /></a>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          }
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default ProjectCard