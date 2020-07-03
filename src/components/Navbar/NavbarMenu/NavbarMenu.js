import React from 'react'
import './NavbarMenu.css'
import Close from '../../../components/Svgs/Close/Close'

function NavbarMenu(props) {

  return (
    <div className="navbar-menu">
      <div className="front content-center">
        <span className="content-center front-text"
          onMouseOver={()=>props.mouseEnter(props.open)}
          onMouseLeave={()=>props.mouseOut(props.open)}
          onClick={props.clicked} >
            {props.open ? <Close /> : 'Menu'}</span>  
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
