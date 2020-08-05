import React from 'react'

function Title(props) {
  return (
    <div className="project-text-alignleft">
      <h3 className="p-wrapper head2">
        <span className="show-container p-container show"
          style={{color: props.primarycolor}}>
          <div className="reveal p-reveal">{props.title}</div>
          <div className="runner p-runner"></div>
        </span>
      </h3>
      <p className="sub-reveal-container p-desc desc show">
        <span className="sub-reveal p-desc-content"
          style={{color: props.secondarycolor}}>{props.shortDesc}</span>
      </p>
    </div>
  )
}

export default Title
