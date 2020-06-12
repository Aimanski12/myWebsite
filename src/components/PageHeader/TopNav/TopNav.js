import React from 'react'
import AimanSvgLogo from '../../Svg/AimanLogo/AimanSvgContainer'
import {burgerNavOpen} from '../../../utils/work/headers/burgerNav'
import {Link} from 'react-router-dom'
import {hoverInAnimate, hoverOutAnimate} from '../../../utils/work/headers/topNav'


function TopNav (props) {

  const navs = () => {
    let a = props.navs
    let c = a.nav.map((b, i)=>{
        return (<li key={i} className={b === props.navs.active ? 'active' : null}>
                  <Link 
                    to={b === 'Work' ? '/' : `/${b}`}
                    onClick={()=> props.click(b)}
                    >{b}</Link></li>)
      })
    return c
  }


  return (
    // menu display for screen over 768px
    <div className='navigation'>

      <nav className="menu">
        <div className="menu_list">
          <ul>
            {navs()}
          </ul>
        </div>
        <div className="menu_burger">
          <div className="icon_burger">
            <svg className='btn-menu-burger'
              width="80" height="63" viewBox="0 0 80 63" 
              fill="none" xmlns="http://www.w3.org/2000/svg"
              onClick={(e)=>{
                burgerNavOpen(e, props.navs.active)
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
