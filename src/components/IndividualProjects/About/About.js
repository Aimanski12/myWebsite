import React from 'react'
import './About.css'

function About() {
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
          style={{color: '#2C6664', fontWeight: 500}}>Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science. His work is also known for its influence on the philosophy of science.</span>
      </p>
    </article>
  )
}

export default About
