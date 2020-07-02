import React from 'react'
import './NavbarMenu.css'
import {mouseOut, mouseEnter} from '../../../utils/common/navbarMenu'
import Close from '../../../components/Svgs/Close/Close'

function NavbarMenu(props) {

  function click() {
    console.log('click')
  }


  return (
    <div className="navbar-menu">
      <div className="front content-center">
        {props.clicked ? <Close /> : 
          <span className="front-text"
            onMouseOut={mouseOut}
            onClick={click}
            onMouseEnter={mouseEnter}>Menu</span>}
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
