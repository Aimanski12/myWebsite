import React, {useContext, useState} from 'react'
import Close from '../../Svgs/Close/Close'
import {mouseEnter, mouseOut} from '../../../utils/pageanimations/navbarmenu/menuHoverEvents'
import {openMenu, closeMenu} from '../../../utils/pageanimations/navbarmenu/menuClickEvents'
import {fadeNavbar} from '../../../utils/pageanimations/navbarmenu/navbartransition'
import {PageData} from '../../../utils/context/pageContext'
import {StateContext} from '../../../utils/context/stateContext'
import {motion} from 'framer-motion'

function NavbarMenu () {
  const {headers} = useContext(PageData)
  const {state, setState} = useContext(StateContext)

  // hover in functions and to set specific assigned colors
  const hoverIn = () => {
    state.menuIsOpen ? mouseEnter(headers.colormodes.open, 'open') :
     mouseEnter(headers.colormodes.close, 'close')
  }

  // hover out functions and to set specific assigned colors
  const hoverOut = () => {
    state.menuIsOpen ? mouseOut(headers.colormodes.open, 'open') :
      mouseOut(headers.colormodes.close, 'close')
  }

  // click events
  const click = () => {
    // fade the navbar
    fadeNavbar()
    //check if menu is not animating. if false then
    // execute the animation
    if(!state.menuIsAnimating){
      // change the global state after 200ms fade transition
      // from the navbar
      setTimeout(()=>{
        setState({
          menuIsOpen: !state.menuIsOpen,
          menuIsAnimating: true
        })
      }, 200)
      // then call the animation whether the close or open the menu
      state.menuIsOpen ? closeMenu(true) : openMenu()
      // the set timeout will make a set the menuIsAnimating
      // state back to false after 1700ms.
      setTimeout(()=>{
        setState({ menuIsAnimating: false })
      }, 1700)
    }
  }

  return (
    <div className="navbar-menu">
      <div className="front content-center">
        <motion.span className="content-center front-text"
          style={{'color': headers.colormodes.close.foreground}}
          onMouseOver={hoverIn}
          onMouseLeave={hoverOut}
          whileTap={{scale: 0.95}}
          onClick={click}>
            {state.menuIsOpen ? <Close /> : 'Menu'}</motion.span>  
      </div>
      <div className="middle content-center">
        <span className="middle-span"></span>
      </div>
      <div className="back content-center">
        <span className="back-span"></span>
      </div>
    </div>
  )
}

export default NavbarMenu