import React from 'react'
import SmallMenuFrameSvg from '../../Svg/SmallMenuFramSvg/SmallMenuFrameSvg'
import AimanSvgContainer from '../../Svg/AimanLogo/AimanSvgContainer'
import {burgerNavClose} from '../../../helpers/headers/burgerNav'

function BurgerNav() {
  return (
    <div className="slide-navbar">
      <div className="slide-menu-card">

      <SmallMenuFrameSvg />
              
      <div className="slide-menu-list">
        <div className="slide-menu-header content-center">
          <span 
            className='slide-text'
            onClick={(e)=>{burgerNavClose(document, e)}}
              >
            <AimanSvgContainer color={'#357E7B'}/>
          </span>
        </div>
        <nav className="slide-menu-items">
          <ul className='slide-menu-wrapper'>
            <li className="slide-menu-item slide-text active">
              <a href="/" className='menu-link'>Work</a></li>
            <li className="slide-menu-item slide-text">
              <a href="/" className='menu-link'>About</a></li>
            <li className="slide-menu-item slide-text">
              <a href="/" className='menu-link'>Blogs</a></li>
            <li className="slide-menu-item slide-text">
              <a href="/" className='menu-link'>Contact</a></li>
          </ul>
        </nav>
        <div className="slide-menu-bottom">
          <span className='menu-close slide-text'>Close</span>
        </div>
        </div>
      </div>

      <div className="slide-menu-layover">
        <div className="slide-menu-background"></div>
      </div>


    </div>
  )
}

export default BurgerNav
