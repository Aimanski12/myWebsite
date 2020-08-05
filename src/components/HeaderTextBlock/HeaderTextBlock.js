import React, {useContext} from 'react'
import {PageData} from '../../utils/context/pageContext'

function HeaderTextBlock () {
  const {headers} = useContext(PageData)

  let headerText = headers.title.map((text, i)=>{
    return (
      <span className="show-container show" key={i}>
        <div className="reveal"
        style={{color: headers.textColors.primary}}>{text}</div>
        <div className="runner"></div>
      </span>
    )
  })

  return (
    <div className="header-wrapper">
      <h1 className="header-text">
        {headerText}
      </h1>
      <p className="sub-reveal-container desc show">
        <span className="sub-reveal"
          style={{color: headers.textColors.secondary, fontWeight: headers.title[0] ===  'About me.' ? 500 : 600}}>
          {headers.shortDesc}
        </span>
      </p>
    </div>
  )
}

export default HeaderTextBlock

