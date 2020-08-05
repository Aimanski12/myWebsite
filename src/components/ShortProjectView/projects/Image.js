import React from 'react'

function Image(props) {
  return (
    <div className="project-img-desc">
      <div className="sub-reveal-container project-image show">
        <div className='sub-reveal project-img' 
        style={{background: `url('${props.phototeaser}') no-repeat center top`, backgroundSize: 'cover'}}> </div>
      </div>
      <div className="img-backer"
          style={{backgroundColor: props.bkgColor}}></div>
    </div>
  )
}

export default Image
