import React, {useContext} from 'react';
import Link from 'next/link'
import {motion} from 'framer-motion'
import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context/appData'

export default function MenuItems() {
  const {AppState, SetAppState} = useContext(AppData)
  
  const menuItems = () =>{
    const menu = AppState.pageData.data.menuItems.menu
    const active = AppState.pageData.data.index
    return menu.map((m, i) =>{
      if(m.index === active) {
        return (
          <li className="menu-item content-center" key={i}>
            <motion.div 
              variants={Anim.MenuButton.slideMenuItems}
              className="menu-item-slider">
              <span className='active'>{m.name}</span>
            </motion.div>
          </li> )
      } else {
        return (
          <li className="menu-item content-center" key={i}>
            <motion.div 
              variants={Anim.MenuButton.slideMenuItems}
              className="menu-item-slider">
              <Link href={m.link} scroll={false}>
                <a onClick={click}>{m.name}</a>
              </Link>
            </motion.div>
          </li> )
      }
    })
  }

  const click = () => {
    Anim.Helpers.hidshowbody('hidden')
    Anim.Helpers.toggleBurgerToActive()
    SetAppState.setMenuAndButtonState({
      isOpened: !AppState.buttonMenu.isOpened
    }, {
      isOpen: false,
      isTransitioning: true,
      delay: 1600
    })
  }
  
  return (
    <ul className="menu-items-wrapper content-center font-1">
      {menuItems()}
    </ul>
  );
}
