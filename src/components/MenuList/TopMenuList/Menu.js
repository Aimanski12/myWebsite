import React, {useContext} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {StateContext} from '../../../utils/context/stateContext'
import {checkRoute} from '../../../utils/common/common'
import {mouseEnter, mouseOut} from '../../../utils/pageanimations/navbarmenu/menuListEvents'
import {setTransitionState} from '../../../utils/pageanimations/motion/common'
import { closeMenu } from '../../../utils/pageanimations/navbarmenu/menuClickEvents'
import {fadeNavbar} from '../../../utils/pageanimations/navbarmenu/navbartransition'

function Menu() {
  let menus = ['home', 'about', 'projects', 'contacts']
  const { state, setState, setActiveRoute } = useContext(StateContext)
  const currentRoute = checkRoute(useRouter().pathname)

  // set active route to the current route
  setTimeout(()=>{
    setActiveRoute(currentRoute)
  },300)

  // click events
  const click = () => {
    fadeNavbar()
    closeMenu()
    setState({
      menuIsOpen: !state.menuIsOpen,
      isTransitioning: setTransitionState(state.isTransitioning),
      exitMode: 'topExit',
      animation: 'topAnimation'
    })
  }


  const menuList = () => {
  return menus.map((menu, i )=>{
    return (
      <li className='menu-list' key={i}>
        <div className='menu-list-container'>
          <div className={`content-center list-front
            ${menu === state.activeRoute ? 'active' : ''}`}>
            <Link 
              key={menu === 'home' ? '/' : `/${menu}`}
              href={menu === 'home' ? '/' : `/${menu}`}
              as={menu === 'home' ? '/' : `/${menu}`}>
              <a>
                <span className='menu-list-text'
                  onMouseEnter={(e)=>mouseEnter(e, 'hoverIn')}
                  onMouseOut={(e)=>mouseOut(e)} 
                  onClick={click}>{menu}</span>
              </a>
            </Link>
          </div>
          <div className={`content-center list-back 
            ${menu === state.activeRoute ? 'active' : ''}`}>
            <span className='menu-list-backer'>{menu}</span>
          </div>
        </div>
      </li> )
    })
  }
  
  return (
    <nav>
      <ul>{menuList()}</ul>
    </nav>
  )
}

export default Menu;
