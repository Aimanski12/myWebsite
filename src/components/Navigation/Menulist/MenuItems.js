import React, {useContext} from 'react';
import {motion} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'

import Link from 'next/link'

export default function MenuItems({data, current}) {
  const {SetAppState} = useContext(AppData)

  const menuItems = () =>{
    return data.map((m, i) =>{
      if(m.index === current) {
        return (
          <li className="menu-item content-center" key={i}>
            <motion.div 
              className="menu-item-slider"
              variants={Anim.MenuButton.slideMenuItems} >
              <span className='active'>{m.name}</span>
            </motion.div>
          </li> )
      } else {
        return (
          <li className="menu-item content-center" key={i}>
            <motion.div 
              className="menu-item-slider"
              variants={Anim.MenuButton.slideMenuItems} >
              <Link href={m.link} scroll={false}>
                <a 
                  onClick={()=>{
                    SetAppState.setToCloseAndTransition()
                  }}>{m.name}</a>
              </Link>
            </motion.div>
          </li> )
      }
    })
  }
  
  return (
    <ul className="menu-items-wrapper content-center font-1">
      {menuItems()}
    </ul>
  );
}
