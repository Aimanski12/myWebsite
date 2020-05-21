import React, { useEffect} from 'react'
import './Workpage.css'

import SlideMenu from '../../../components/SlideMenu/SlideMenu'
import Navigation from '../../../components/Navigation/Navigation'
import SideNav from '../../../components/SideNavs/SideNavs'
import HeroFace from '../../../components/Svg/HeroOneSvg/HeroFace'

import {findBackground} from '../../../helpers/common'
import {start} from '../../../helpers/heroscripts'


function WorkPage(){


  useEffect(() => {
    const txt_head = document.querySelector('.text-intro-header .letters')
    const img_cont = document.querySelector('.img-container')
    const contnr = document.querySelector('.container')
    const nav = document.querySelector('.navigation')
    const arw_down_svg = document.querySelector('.slide-down-svg')
    const paths = document.querySelectorAll('.svg-face path')
    const txt2 = document.querySelector('.text-intro-subheader')
    start(txt_head, img_cont, contnr, nav, arw_down_svg, paths, txt2)
  })

  return(
    <header className="header">
         
      <div className="navbar">
        {/* slide menu list ends */}
        <SlideMenu />
        <Navigation />
        <SideNav />
        <figure className="slide-down-button">
          <div className="slide-down-btn">
            <svg className='slide-down-svg' width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 1.5L18 20.5L33 2.5" stroke="#357E7B" strokeWidth="4" />
            </svg>
          </div>
        </figure>
      </div>
        

      {/* face */}
      <div className="faceAnim">
        <div className="box content-align">
          {/* face svg ends */}
          <HeroFace />

          <div className="anim-text content-center">
            <h2 className='text-intro-header'>
              <span className='letters'>Hi! It's me Aiman.</span></h2>
            <p className='text-intro-subheader'>
              <span className='letters'>I'm a <span className='green'>web/app </span> developer.</span>
              </p>
          </div>
        </div>
      </div>

      {/* background */}
      <div className="background">
        <div className="img-container"
          style={{background: `url('${findBackground('hero')}') no-repeat center center`}}></div>
      </div>

    </header>
  )
}



export default WorkPage
