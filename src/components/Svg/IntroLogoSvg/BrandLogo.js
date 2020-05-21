import React, {Fragment} from 'react'
import TextLogo from './TextLogo'
import TextBorder from './TextBorder'
import TextShadow from './TextShadow'
import IntroBox from './IntroBox'


const BrandLogo = (props) => {

  return (
    <Fragment>
      <svg width="1032" height="1485" viewBox="0 0 1032 1485" fill="none" xmlns="http://www.w3.org/2000/svg">
        <TextLogo />
        <TextBorder sa={props.sa}/>
        <TextShadow />
        <IntroBox />
      </svg>
    </Fragment>
  )
}


export default BrandLogo
