import React, {Fragment, useEffect} from 'react'
import Image from './Image'
import Title from './Title'
import {mouseEnter, mouseOut, resize} from '../../../utils/pageanimations/projectHover/ProjectHoverAnimation'
import ProjectLink from './ProjectLink'

function Projects(props) {

  useEffect(() =>{
    resizeEls()
    window.addEventListener('resize', resizeEls)
    return () => {
      window.removeEventListener('resize', resizeEls)
    }
  })
  
  let projects = props.projects.map((proj, i)=>{
    return (
       <div className="short-project-wrapper"
       style={{background: `url('${proj.theme}') no-repeat center center`}} key={i} >
        <div className="projects-wrapper"
          onMouseLeave={(e)=>mouseOut(e)}
          onMouseEnter={(e)=>mouseEnter(e, proj.btnBkColor)}>

          <Image 
            phototeaser={proj.photo.teaser}
            bkgColor={proj.bkgColor}/> 

          <div className="project-text-desc">
            <div className="project-text-wrapper">
              <Title 
                primarycolor={proj.textColors.primary}
                secondarycolor={proj.textColors.secondary}
                title={proj.title}
                shortDesc={proj.shortDesc}/>
              <ProjectLink 
                internallinks={proj.projectlinks.internal}
                textcolor={proj.btnTextColor}/>
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

export default Projects;

const resizeEls = () => {
  resize()
}