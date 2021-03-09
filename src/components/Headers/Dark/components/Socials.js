import React from 'react'
import {motion} from 'framer-motion'

import Icon from '../../../GlobalComponents/SocialIcons'

export default function Socials({data}) {
  return (
    <motion.ul 
      variants={showMenu}
      initial = 'initial'
      animate = 'animate'
      className="header-socials content-center">
      { data.socials.icons.map((s, i) => {
        return (
          <li key={i}>
            <motion.div
              variants={slideIcons}>
              <a href={s.link} target='_blank' rel="noreferrer noopener">
              <Icon svg={s.svg} 
                front={data.socials.front} 
                back={data.socials.back}/>
              </a>
            </motion.div>
          </li> )
        })
      }
      </motion.ul>
  )
}

  const showMenu = {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  // framer animation for social icons
  const slideIcons = {
    initial: {
      y: 46
    },
    animate: {
      y: 0,
      transition: {
        damping: 8,
        delay: .85,
        duration: 0.4,
        ease:'easeInOut',
        mass: 0.4,
        stiffness: 65,
        type: 'spring',
      }
    }
  }