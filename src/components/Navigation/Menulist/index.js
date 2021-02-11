import React, {useContext} from 'react';
import Sliders from './Sliders'
import MenuItems from './MenuItems'
import SocialIcons from './SocialIcons'
import CopyRight from './CopyRight'
import {AppData} from '../../../context/appData'
import {motion, AnimatePresence} from 'framer-motion'

export default function MenuList() {
  const {AppState} = useContext(AppData)

  return (
    <AnimatePresence>
       { AppState.menuTransitions.isOpen && (
        <motion.div 
          variants={showmenu}
          initial='initial'
          animate='animate'
          exit='exit'
          className="menu-list-container content-center">
          <Sliders />
          <div className="menu-container content-center">
            <MenuItems />
            <SocialIcons />
            <CopyRight />
          </div>
        </motion.div> )
      }
    </AnimatePresence>
  );
}

// please take note to check and remove the framer snowmenu function
// incase you are not using that function

const showmenu = {
  initial:{
    opacity: 1
  }, 
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1
    }
  },
  exit: {
    transition: {
      delay: .7,
    }
  }
}
