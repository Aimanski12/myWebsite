import React from 'react'

function TitleBlock(props) {
  
  let title = props.data.title.map((t, i)=>{
    return (
      <span className="show-container show" key={i}>
        <div className="reveal"
        style={{color: props.data.textColors.primary}}>{t}</div>
        <div className="runner"></div>
      </span>
    )
  })

  return (
    <div className="needhelp-wrapper">
      <h2 className="head2">
        {title}
      </h2>
      <p className="sub-reveal-container desc show">
        <span className="sub-reveal"
          style={{color: props.data.textColors.secondary}}>{props.data.shortDesc}</span>
      </p>
    </div>
  )
}

export default TitleBlock
