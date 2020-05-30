import React, {Fragment, useEffect} from 'react'
import BurgerNav from './BurgerNav/BurgerNav'
import TopNav from './TopNav/TopNav'
import SideNav from './SideNav/SideNav'
import HeroOne from '../Svg/HeroSvg/HeroSvg'
// import {animateHeaderPage} from '../../helpers/headers/animateHeader'
import {scrollDown } from '../../helpers/work/headers/scrollDownBtn'
import {findBackground} from '../../helpers/common/common'

import './PageHeader.css'

function PageHeader(props) {

  useEffect(() => {
    // animateHeaderPage(document)
  })

  return (
     <Fragment>
      <div className="navbar">

        <BurgerNav 
          page={props.page}/>
        <TopNav 
          page={props.page}
          click={(n)=>props.click(n)}
          color={'#357E7B'}
          navs={props.navs}/>
        <SideNav 
          color={'#868383'} />
        <figure className="slide-down-button">
          <div className="slide-down-btn">
            <svg 
              className='slide-down-svg' width="35" height="24" 
              viewBox="0 0 35 24" fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e)=>{
                scrollDown(document, e)
              }}>
              <path d="M2.5 1.5L18 20.5L33 2.5" stroke="#357E7B" strokeWidth="4" />
            </svg>
          </div>
        </figure>
      </div>
        
      <div className="faceAnim">
        <div className="box content-align">
          <HeroOne page={props.page}/>

        <div className="anim-text content-center">
          <h2 className='text-intro-header'>
            <span className='letters'>{props.maintext}</span></h2>
            { props.page === 'one' ? 
              <p className='text-intro-subheader'>
                <span className='letters'>I'm a <span className='green'>web/app </span> developer.</span>
              </p> : null }
          </div>
        </div>
      </div>

      <div className="background">
        <div className="img-container"
          style={{background: `url('${findBackground(props.page)}') no-repeat center center`}}></div>
      </div>
      
    </Fragment>
  )
}

export default PageHeader
