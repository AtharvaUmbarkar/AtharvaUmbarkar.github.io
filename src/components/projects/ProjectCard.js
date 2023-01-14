import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ProjectCard = (props) => {
  const { name, setCurrCard, currCard, i, visible } = props;
  // console.log(visible);

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
    setCurrCard(name);
  }

  const handleClose = () => {
    setOpen(false);
    setCurrCard(null);
  }

  const nullCard = currCard === null;
  const sameCard = currCard === name;

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

  return (
    <AnimatePresence mode='wait'>

      {
        visible && (nullCard || sameCard) && <motion.div
          key={name + 'close'}
          layout
          className={/* (open ? 'h-full' : 'h-32') + */ ' h-28 md:h-32 lg:h-36 w-full my-2'}
          variants={cardVariant(i)}
          exit={'exit'}
          initial={'hidden'}
          animate={'visible'}
        >

          {!open &&
            <motion.div
              key={name + '-close-content'}
              layout
              className='w-full h-full bg-red flex'
              onClick={handleOpen}
              variants={emptyVariant}
            >
              {/* {name} */}
            </motion.div>
          }

          {open &&
            <motion.div
              key={name + '-open-content'}
              layout
              className='w-full h-full bg-black flex flex-col items-center justify-center'
              onClick={handleClose}
              variants={overlayVariant}
            >
              <motion.div
                layout
                key={name + '-open-content-project'}
                className='bg-black h-full w-full border-4 border-solid border-red'
                variants={contentVariant}
              >
                {/* {name} */}
              </motion.div>
            </motion.div>
          }
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default ProjectCard