import React from 'react'
import './HeaderTextBlock.css'

function HeaderTextBlock(props) {

  let headerText = props.data.title.map((text, i)=>{
    return (
      <span className="show-container show" key={i}>
        <div className="reveal element"
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
          style={{color: props.data.textColors.secondary}}>
          {props.data.shortDesc}
        </span>
      </p>
    </div>
  )
}

export default HeaderTextBlock

