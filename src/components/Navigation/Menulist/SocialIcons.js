import React, {useContext} from 'react';
import {AppData} from '../../../context/appData'
import Icons from '../../GlobalComponents/SocialIcons'
import {motion} from 'framer-motion'

export default function SocialIcons() {
  const {AppState} = useContext(AppData)
  
  const icons = () => {
    const icon = AppState.pageData.data.menuItems.socialIcons
    return icon.socials.map((l, i) => {
      return <li className="menu-socials" key={i}>
        <motion.div  variants={slideUp}>
          <a href={l.link} 
            target='_blank'
            rel="noreferrer noopener">
            <Icons svg={l.svg} front={icon.front} back={icon.back}/>
          </a>
        </motion.div>
      </li> }
    )
  }

  return (
    <ul className="menu-socials-container">
      {icons()}
    </ul>
  );
}

const slideUp = {
  initial: {
    y: 46
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 65,
      mass: 0.4,
      damping: 8,
      ease:'easeInOut',
      duration: 0.4
    }
  }, 
  exit: {
    opacity: 0,
    transition: {
      type: 'easeInOut',
      duration: 0.3
    }
  }
}