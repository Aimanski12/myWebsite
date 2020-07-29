import React from 'react'

function About(props) {
  return (
    <article className='header-wrapper project-about-wrapper'>
      <h2 className="p-wrapper head2">
        <span className="show-container p-container show"
          style={{color: '#2C6664'}}>
          <div className="reveal p-reveal">About the project.</div>
          <div className="runner p-runner"></div>
        </span>
      </h2>
      <p className="sub-reveal-container p-desc desc show">
        <span className="sub-reveal p-desc-content" 
          style={{color: '#2C6664', fontWeight: 500}}>{props.description}</span>
      </p>
    </article>
  )
}

export default About
