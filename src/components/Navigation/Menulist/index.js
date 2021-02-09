import React, {useContext} from 'react';
import Sliders from './Sliders'
import MenuItems from './MenuItems'
import SocialIcons from './SocialIcons'
import CopyRight from './CopyRight'
import Link from 'next/link'
import {AppData} from '../../../context/appData'
import {Anim} from '../../../utils/animations'
import {motion, AnimatePresence} from 'framer-motion'
import Svg from '../../Svgs/index'

export default function MenuList() {
  const {AppState, SetAppState} = useContext(AppData)

  return (
    // <AnimatePresence>
    //   { AppState.menuTransitions.isOpen && (
    //     <motion.div 
    //       variants={Anim.TransitionSliders.showMenu}
    //       initial='initial'
    //       animate='animate'
    //       exit='exit'
    //       className="menu-wrapper">
    //       <div className="menuwrap">
    //         <Link href="/one" scroll={false}>
    //           <a onClick={()=> {
    //             Anim.Helpers.hidshowbody('hidden')
    //             SetAppState.setMenuTransitions({
    //               isOpen: false,
    //               isTransitioning: true,
    //               delay: 1600
    //             })
    //           }}
    //           >Go asdfasdfadsfsadto asdf</a>
    //         </Link>
    //       </div>
    //     </motion.div> )}
    // </AnimatePresence>

    <div className="menu-list-container">
      <Sliders />
      <div className="menu-container content-center">
        <MenuItems />
        <SocialIcons />
        <CopyRight />
      </div>
  </div>
  );
}
