import React, {useEffect} from 'react'
import LogoText from '../Svg/IntroLogoSvg/LogoText'
import LogoBorder from '../Svg/IntroLogoSvg/LogoBorder'
import LogoShadow from '../Svg/IntroLogoSvg/LogoShadow'
import LogoBoxCover from '../Svg/IntroLogoSvg/LogoBoxCover'
import {logoIntroAnimation} from '../../utils/logoIntro/logoIntro'

const IntroLogoSvg = () => {
  useEffect(()=>{
    logoIntroAnimation(document)
  })
  return (
    <div className="content-center intro-logo">
      <svg width="1032" height="1009" viewBox="0 0 1032 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
        <LogoText />
        <LogoBorder />
        <LogoShadow />
        <LogoBoxCover />
      </svg>
    </div>
  )
}


export default IntroLogoSvg


