import React, {Fragment} from 'react'
import BurgerNav from './BurgerNav/BurgerNav'
import TopNav from './TopNav/TopNav'
import SideNav from './SideNav/SideNav'
import HeroOne from '../Svg/HeroSvg/HeroSvg'
import {scrollDown } from '../../utils/work/headers/scrollDownBtn'
import {img, im} from '../../utils/common/common'

import './PageHeader.css'

function PageHeader(props) {
  return (
    <header className='header' 
    style={{background: `url('${img(props.img, 'p')}') no-repeat center center`}}>

      <div className="navbar">
        <BurgerNav 
          click={(n)=>props.click(n)}
          navs={props.navs}
          page={props.page}/>
        <TopNav 
          page={props.page}
          click={(n)=>props.click(n)}
          color={'#357E7B'}
          navs={props.navs}/>
        <SideNav 
          click={(n)=>props.click(n)}
          navs={props.navs}
          color={'#868383'} />
      </div>

      <div className="header-content">
        <div className="content-align box">
          <HeroOne page={props.page}/>
          <div className="anim-text content-center">
            <h2 className='text-intro-header'>
              <span className='letters'>{props.maintext}</span></h2>
              { props.page === 'one' ? 
                <p className='text-intro-subheader'>
                  <span className='letters'>I'm a <span className='green'>web/app </span> developer.</span>
                </p> : null }
          </div>
          <figure className="slide-down-button">
            <div className="slide-down-btn">
              <svg className='slide-down-svg' width="35" height="24" 
                viewBox="0 0 35 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                onClick={(e)=>{ scrollDown(document, e) }}>
                <path d="M2.5 1.5L18 20.5L33 2.5" stroke="#357E7B" strokeWidth="4" />
              </svg>
            </div>
          </figure>
        </div>
      </div>

      <div className="background"></div>


        
      <div className="faceAnim">
      </div>

      {/* <div className="background">
        <div className="img-container"
          style={{background: `url('${img(props.img, 'p')}') no-repeat center center`}}
          alt={`${im[props.img]} image`}></div>
      </div> */}
      
    </header>
  )
}

export default PageHeader
