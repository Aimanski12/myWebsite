import React, {Fragment, useEffect, useRef} from 'react'
import BrandLogo from '../Svg/IntroLogoSvg/BrandLogo'
import logointro from '../../helpers/LogoIntro'
import './LogoIntro.css'

function LogoIntro() {

  const strokes1 = useRef(null)
  // const font = useRef()
  // const shadow = useRef()
  // const top = useRef()
  // const bottom = useRef()
  const intrologo = useRef()

useEffect(()=>{
  console.log(strokes1)
  const strokes = document.querySelectorAll('.border')
  const font = document.querySelector('.text-logo')
  const shadow = document.querySelectorAll('.inner-shadow')
  const top = document.querySelector('.intro-box-top')
  const bottom = document.querySelector('.intro-box-bottom')

  logointro(strokes, font, shadow, top, bottom, intrologo.current)
})


  return (
    <Fragment>
      <div className="content-center intro-logo" ref={intrologo}>
        <BrandLogo 
          sa={strokes1}
          // font={font}
          // shadow={shadow}
          // top={top}
          // bottom={bottom}
          />
      </div>
    </Fragment>
  ) 
}


export default LogoIntro