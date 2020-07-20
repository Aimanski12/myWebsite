import React, {Fragment} from 'react'
import Icon from '../../../../components/Svgs/Logos/Logos'

function GithubProject(props) {
    
  let projects = props.projects.map((project, i) => {
    return ( <li className='project-list' key={i}>
            <h4 className="p-wrapper desc">
              <div className="proj-list-number">
                <span className="show-container p-container p-list-number show"
                  style={{color: ''}}>
                  <div className="reveal p-reveal">#{project.num}</div>
                  <div className="runner p-runner"></div>
                </span> 
              </div>
              <a href={project.link}
                rel='noopener noreferrer'
                target='_blank'>
                <div className="sub-reveal-container proj-list-name show">
                  <span className="sub-reveal p-desc-content p-list-name"
                    style={{color: '', fontWeight: 500}}><Icon type='github' />{project.name}</span>
                </div>
              </a>
            </h4>
          </li> )
      })

  return (
    <Fragment>  
      <ul className='project-list-wrapper'>
      {projects}
      </ul>
    </Fragment>
  )
}

export default GithubProject
