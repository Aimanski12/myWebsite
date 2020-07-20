import React, {Fragment, useEffect} from 'react'
import {imageUrl} from '../../../utils/common/common'
import { mouseEnter, mouseOut, resizeEls } from '../../../utils/pageAnimation/projectsHoverAnimations'

function Projects(props) {

  useEffect(()=>{
    resizeEls()
    // window.addEventListener('resize', resizeEls)
  })

  let projects = props.projects.map((proj, i)=>{
    return (
       <div className="short-project-wrapper"
       style={{background: `url('${imageUrl(proj.theme, 'png')}') no-repeat center center`}} key={i} >
        <div className="projects-wrapper" 
          onMouseLeave={(e)=>mouseOut(e)}
          onMouseEnter={(e)=>mouseEnter(e, proj.bkgColor)}
          >

          <div className="project-img-desc">
            <div className="sub-reveal-container project-image show">
              <div className='sub-reveal project-img' 
              style={{background: `url('${imageUrl(proj.photo.teaser, 'png')}') no-repeat center top`, backgroundSize: 'cover'}}> </div>
            </div>
            <div className="img-backer"
               style={{backgroundColor: proj.bkgColor}}></div>
          </div>

          <div className="project-text-desc">
            <div className="project-text-wrapper">

              <div className="project-text-alignleft">
                <h3 className="p-wrapper head2">
                  <span className="show-container p-container show"
                    style={{color: proj.textColor}}>
                    <div className="reveal p-reveal">{proj.title}</div>
                    <div className="runner p-runner"></div>
                  </span>
                </h3>
                <p className="sub-reveal-container p-desc desc show">
                  <span className="sub-reveal p-desc-content"
                    style={{color: proj.textColor}}>{proj.shortDesc}</span>
                </p>
              </div>
              <div className="project-text-alignright">
                <div className='sub-reveal-container content-center button-wrapper show'>
                  <span className='sub-reveal'
                    style={{color: proj.textColor}}>View project</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  })


  return (
    <Fragment>
      {projects}
    </Fragment>
  )
}

export default Projects
