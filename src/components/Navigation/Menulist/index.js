import React, {useContext} from 'react';
import Sliders from './Sliders'
import MenuItems from './MenuItems'
import Socials from './SocialIcons'
import CopyRight from './CopyRight'
import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'
import {motion, AnimatePresence} from 'framer-motion'

export default function MenuList({data}) {
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
            <MenuItems data={data.menuItems.menu} current={data.index}/>
            <Socials data={data.menuItems.socialIcons}/>
            <CopyRight />
          </div>
        </motion.div> ) }
    </AnimatePresence>
  );
}
