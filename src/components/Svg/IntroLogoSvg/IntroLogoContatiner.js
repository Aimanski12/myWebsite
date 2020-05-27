import React, {Fragment} from 'react'
import LogoText from './LogoText'
import LogoBorder from './LogoBorder'
import LogoShadow from './LogoShadow'
import LogoBoxCover from './LogoBoxCover'

// the main container for the logo svg
const IntroLogoSvg = () => {
  return (
    <Fragment>
      <svg width="1032" height="1009" viewBox="0 0 1032 1009" fill="none" xmlns="http://www.w3.org/2000/svg">
        <LogoText />
        <LogoBorder />
        <LogoShadow />
        <LogoBoxCover />
      </svg>
    </Fragment>
  )
}

export default IntroLogoSvg
