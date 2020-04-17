
import React, {useEffect} from 'react'
import './NameText.css'
import {animDomSeparator} from '../../../common/HelperScripts/domSeparator'

import BigText from '../../Svgs/NameSvg/bigText'
import SmallText from '../../Svgs/NameSvg/smallText'

function NameText(props){
  
    useEffect(() => {
      animDomSeparator(props.themeColor, props.textAnim)
    })

  return (
    <svg width="890" height="587" viewBox="0 0 890 587" fill="none" xmlns="http://www.w3.org/2000/svg">
      <BigText />
      <SmallText />
    </svg>
  )
}

export default NameText
