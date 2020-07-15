import React from 'react'
import './HeaderTextBlock.css'

function HeaderTextBlock(props) {

  let headerText = props.data.title.map((text, i)=>{
    return (
      <span className="show-container show" key={i}>
        <div className="reveal"
        style={{color: props.data.textColors.primary}}>{text}</div>
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
          style={{color: props.data.textColors.secondary, fontWeight: props.data.title[0] ===  'About me.' ? 500 : 600}}>
          {props.data.shortDesc}
        </span>
      </p>
    </div>
  )
}

export default HeaderTextBlock

