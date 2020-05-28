import React from 'react'
import AimanSvgLogo from '../../Svg/AimanLogo/AimanSvgContainer'
import {burgerNavOpen} from '../../../helpers/headers/burgerNav'
import {Link} from 'react-router-dom'
import {hoverInAnimate, hoverOutAnimate} from '../../../helpers/headers/topNav'


function TopNav (props) {
  return (
    // menu display for screen over 768px
    <div className='navigation'>

      <nav className="menu">
        <div className="menu_list">
          <ul>
            <li className='active'>
              <Link to='/'>Work</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/'>Blogs</Link>
            </li>
            <li>
              <Link to='/contact'>Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="menu_burger">
          <div className="icon_burger">
            <svg className='btn-menu-burger'
              width="80" height="63" viewBox="0 0 80 63" 
              fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={(e)=>{
                burgerNavOpen(document, e)
              }}>
              <rect width="80" height="10" rx="5" fill="#5EA19E" />
              <rect y="27" width="80" height="10" rx="5" fill="#5EA19E" />
              <rect y="53" width="80" height="10" rx="5" fill="#5EA19E" />
            </svg>
          </div>
        </div>
      </nav>


      <div className="logo-wrapper">
        <h1 className='logo'
          onMouseEnter={()=>{
            hoverInAnimate(document)
          }}
          onMouseLeave={()=>{
            hoverOutAnimate(document)
            }} >
          <a href="/">
            <AimanSvgLogo 
              color={props.color} />
          </a>
        </h1>
      </div>
    </div>  
  )
}

export default TopNav
