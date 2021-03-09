import React, {useContext} from 'react';
import {motion, AnimatePresence} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'

import CopyRight from './CopyRight'
import MenuItems from './MenuItems'
import Sliders from './Sliders'
import Socials from './SocialIcons'

export default function MenuList({data}) {
  const {AppState} = useContext(AppData)

  return (
    <AnimatePresence>
       { AppState.menuTransitions.isOpen && (
        <motion.div 
          animate='animate'
          className="menu-list-container content-center"
          exit='exit'
          initial='initial'
          variants={Anim.MenuButton.showMenu} >
          <Sliders />
          <div className="menu-container content-center">
            <MenuItems 
              data={data.menuItems.menu} 
              current={data.index}/>
            <Socials data={data.menuItems.socialIcons}/>
            <CopyRight />
          </div>
        </motion.div> ) }
    </AnimatePresence>
  );
}
