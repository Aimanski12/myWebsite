import React from 'react'

import SlideMenuSvg from '../Svg/SlideMenuSvg/SlideMenuSvg'




export default function SlideMenu() {
  return (
    <div className="slide-navbar">
      <div className="slide-menu-card">

      {/* slide menu frame svg */}
      <SlideMenuSvg />
              
      {/* slide menu navs */}
      <div className="slide-menu-list">
        <div className="slide-menu-header">
          <span className='slide-text'>AIMAN ADLAWAN</span>
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

      {/* slide menu background */}
      <div className="slide-menu-layover">
        <div className="slide-menu-background"></div>
      </div>


    </div>
  )
}
