import React from 'react'

function Credential(props) {

  return (
    <div className="content-center credential-desc">
      <h4 className="p-wrapper head4">
        <span className="show-container p-container show"
          style={{color: '#2C6664'}}>
          <div className="reveal p-reveal"
          style={{fontWeight: 500}}>{props.name}</div>
          <div className="runner p-runner"></div>
        </span>
      </h4>
      <h4 className="p-wrapper head4">
        <span className="show-container p-container show"
          style={{color: '#0C7CB0'}}>
          <div className="reveal p-reveal"
          style={{fontWeight: 500}}>{props.school}</div>
          <div className="runner p-runner"></div>
        </span>
      </h4>
      <p className="sub-reveal-container p-desc desc show through">
        <span className="sub-reveal p-desc-content">through</span>
      </p>
      <h4 className="p-wrapper head4 cd">
        <span className="show-container p-container show"
          style={{color: '#0C7CB0'}}>
          <div className="reveal p-reveal"
          style={{fontWeight: 500}}>{props.taken}</div>
          <div className="runner p-runner"></div>
        </span>
      </h4>
      <p className="sub-reveal-container p-desc desc show date">
        <span className="sub-reveal p-desc-content">{props.date}</span>
      </p>
    </div>
  )
}

export default Credential
