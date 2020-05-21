import React from 'react'
import NavLogo from '../Svg/NavLogoSvg/NavLogo'
function Navigation () {



  return (
    // menu display for screen over 768px
    <div className='navigation'>

      <nav className="menu">
        <div className="menu_list">
          <ul>
            <li className='active'><a href="/">Work</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="menu_burger">
          <div className="icon_burger">
            <svg className='btn-menu-burger' width="80" height="63" viewBox="0 0 80 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="10" rx="5" fill="#5EA19E" />
              <rect y="27" width="80" height="10" rx="5" fill="#5EA19E" />
              <rect y="53" width="80" height="10" rx="5" fill="#5EA19E" />
            </svg>
          </div>
        </div>
      </nav>


      <div className="logo-wrapper">
        <h1 className='logo'>
          <a href="/">
            {/* svg start */}
            <NavLogo />
            {/* svg ends */}
          </a>
        </h1>
      </div>
    </div>  
  )
}

export default Navigation
