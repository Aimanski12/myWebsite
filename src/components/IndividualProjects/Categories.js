import React from 'react'

function Categories(props) {
  let categories = props.categories.map((c, i)=>{
    return (
      <div className="project-category" key={i}>
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">{c.name}</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content" 
            style={{color: '#2C6664', fontWeight: 400}}>{c.value}</span>
        </p>
      </div>
    )
  })

  return (
    <div className="project-categories">
      {categories}
    </div>
  )
}

export default Categories
