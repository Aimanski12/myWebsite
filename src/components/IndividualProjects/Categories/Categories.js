import React from 'react'
import './Categories.css'

function Categories() {
  return (
    <div className="project-categories">

      <div className="project-category">
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Platform</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content" 
            style={{color: '#2C6664', fontWeight: 400}}>Website</span>
        </p>
      </div>
      <div className="project-category">
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Category</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content" 
            style={{color: '#2C6664', fontWeight: 400}}>Mobile</span>
        </p>
      </div>
      <div className="project-category">
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Developer</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content" 
            style={{color: '#2C6664', fontWeight: 400}}>Aiman Adlawan</span>
        </p>
      </div>

    </div>
  )
}

export default Categories
