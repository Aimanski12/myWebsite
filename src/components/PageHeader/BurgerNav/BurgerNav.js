import React from 'react'
import SmallMenuFrameSvg from '../../Svg/SmallMenuFramSvg/SmallMenuFrameSvg'
import AimanSvgContainer from '../../Svg/AimanLogo/AimanSvgContainer'
import {burgerNavClose} from '../../../helpers/work/headers/burgerNav'

function BurgerNav(props) {

  const links = () => {
    let a = props.navs
    let c = a.nav.map((b, i)=>{
      return ( <li key={i}  
                onClick={()=>{burgerNavClose('route', props.navs.active, b)}}
                className={`slide-menu-item 
            slide-text ${b === props.navs.active ? ' active' : null}`}>
          <span>{b}</span>
        </li>)
      })
    return c
  }
  

  return (
    <div className="slide-navbar">
      <div className="slide-menu-card">

      <SmallMenuFrameSvg />
              
      <div className="slide-menu-list">
        <div className="slide-menu-header content-center">
          <span 
            className='slide-text'
            onClick={()=>{burgerNavClose('main', props.navs.active)}}
              >
            <AimanSvgContainer color={'#357E7B'}/>
          </span>
        </div>
        <nav className="slide-menu-items">
          <ul className='slide-menu-wrapper'>
            {links()}
            {/* <li className="slide-menu-item slide-text active">
              <a href="/" className='menu-link'>Work</a></li>
            <li className="slide-menu-item slide-text">
              <a href="/" className='menu-link'>About</a></li>
            <li className="slide-menu-item slide-text">
              <a href="/" className='menu-link'>Blogs</a></li>
            <li className="slide-menu-item slide-text">
              <a href="/" className='menu-link'>Contact</a></li> */}
          </ul>
        </nav>
        <div className="slide-menu-bottom">
          <span className='menu-close slide-text'
            onClick={()=>{burgerNavClose('back', props.navs.active)}}>
              Close</span>
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
