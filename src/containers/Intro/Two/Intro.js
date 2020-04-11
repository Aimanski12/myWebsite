import React, {useEffect} from 'react'
import {drawLine} from '../../../common/IntroScripts/drawlines'
import {animateFace} from '../../../common/IntroScripts/animateFace'
import {introOverlay} from '../../../common/Helpers/introOverLay'
import './Intro.css'

import FaceLayers from '../../../components/Svg/ImageSvg/layerContainer'
import Button from '../../../components/Buttons/Button'


function Intro (props) {

  useEffect(()=>{
    const faceDiv = document.querySelector('.intro-faceAnimate')
    const canvas = document.querySelector('#canvas')
    const photo = document.querySelectorAll('.photo')
    setTimeout(function(){
      faceDiv.classList.add('intro-openFaceAnim')
    }, 3900)
    setTimeout(function () {
      animateFace(photo, props.themeColor)
    }, 4250)
    setTimeout(function(){
      drawLine(canvas, props.themeColor[5])
    }, 9500)
  })


  const click = (x, y) => {
    const a = document.querySelector('.intro-overlay')
    const c = document.querySelector('.overlay-cover')
    introOverlay(x, y, a, c, props.themeColor[0])    
  }



  return (
    <div className="intro-faceAnimate">

      {/* area for the canvas */}
      <div className="intro-faceAnimate-background">
        <canvas id='canvas'></canvas>
      </div>

      <div className="intro-faceAnimate-container">

      {/* div for the face to be animated */}
          <FaceLayers />

        {/* area for the text */}
        <div className="text_intro">
          <h1 className='text_intro_header'>
            <span className="letters">Hi! It's me Aiman.</span>
          </h1>
          <h2 className='text_intro_subheader'>
            <span className="letters">I'm a UX/UI Designer / Web/App Developer.</span>
          </h2>
        </div>
        
        {/* area for the button */}
        <div className="button_intro">
          <Button 
            click={(x, y)=>click(x, y)}
            themeColor={props.themeColor[4]}/>
        </div>
        {/* button ends */}

      </div>


      <div className="intro-overlay">
        <div className="overlay-cover"></div>
      </div>


    </div>
  )
}
export default Intro
