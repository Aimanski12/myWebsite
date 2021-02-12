import React, {useContext} from 'react';
import Sliders from './Sliders'
import MenuItems from './MenuItems'
import SocialIcons from './SocialIcons'
import CopyRight from './CopyRight'
import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context/appData'
import {motion, AnimatePresence} from 'framer-motion'

export default function MenuList() {
  const {AppState} = useContext(AppData)

  return (
    <AnimatePresence>
       { AppState.menuTransitions.isOpen && (
        <motion.div 
          variants={Anim.MenuButton.showMenu}
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
        </motion.div> ) }
    </AnimatePresence>
  );
}
