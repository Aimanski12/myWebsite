import React from 'react'
import './Tools.css'

function Tools() {
  let tools = ['HTML5', 'CSS3', 'Figma', 'Adobe PS', 'Music API', 'CrossBrowser', 'Python', 'Github']

  let toolsList = tools.map((tool, i) =>{
    return (
      <div className="tool-capsule-wrapper show" key={i}>
        <span>{tool}</span>
      </div>
    )
  })
  return (
     <div className="project-tools">

      <div className="project-tool">
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Tools & Technologies</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        {toolsList}
      </div>
    </div>
  )
}

export default Tools