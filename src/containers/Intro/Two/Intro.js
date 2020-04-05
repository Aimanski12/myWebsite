import React, {useEffect} from 'react'
import {drawLine} from '../../../common/IntroScripts/drawlines'
import {animateFace} from '../../../common/IntroScripts/animateFace'
import './Intro.css'

import LayerOne from '../../../components/Svg/ImageSvg/layer1'
import LayerTwo from '../../../components/Svg/ImageSvg/layer2'
import LayerThree from '../../../components/Svg/ImageSvg/layer3'
import LayerFour from '../../../components/Svg/ImageSvg/layer4'
import LayerFive from '../../../components/Svg/ImageSvg/layer5'
import LayerSix from '../../../components/Svg/ImageSvg/layer6'
import LayerSeven from '../../../components/Svg/ImageSvg/layer7'

function Intro () {

  useEffect(()=>{
    const s = document.querySelector('.intro-faceAnimate')
    const canvas = document.querySelector('#canvas')
    const photo = document.querySelectorAll('.photo')
    setTimeout(function(){
      s.classList.add('intro-openFaceAnim')
    }, 3900)
    setTimeout(function () {
      animateFace(photo)
    }, 4250)
    setTimeout(function(){
      drawLine(canvas)
    }, 10000)
  })

  return (
    <div className="intro-faceAnimate">

      {/* area for the canvas */}
      <div className="intro-faceAnimate-background">
        <canvas id='canvas'></canvas>
      </div>

      <div className="intro-faceAnimate-container">

      {/* div for the face to be animated */}
        <div className="intro-image-container">
          <LayerOne />
          <LayerTwo />
          <LayerThree />
          <LayerFour />
          <LayerFive />
          <LayerSix />
          <LayerSeven />
        </div>

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
          <div className="button-container">
            <div className="button-bkg">
              <button>Explore Me</button>
            </div>
          </div>
        </div>
        {/* button ends */}

      </div>
    </div>
  )
}
export default Intro
