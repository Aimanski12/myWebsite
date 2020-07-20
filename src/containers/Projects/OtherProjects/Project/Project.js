import React from 'react'
import Github from './GithubProject'
import Design from './Designs'

function GithubProjects(props) {
  let links = <a href='/'>
                <span className='links github-page'> github page</span>
              </a>

  return (
   <article className='section-article-wrapper proj-wrapper'>
      <div className="needhelp-wrapper">
        <h2 className="head2">
          <span className="show-container show">
            <div className="reveal"
            style={{color: '#313D43'}}>{props.data.title}</div>
            <div className="runner"></div>
          </span>
        </h2>

        <p className="sub-reveal-container desc show">
          <span className="sub-reveal"
            style={{color: '#596469'}}>{props.data.desc}{props.data.withLinks ? links : null}.
          </span>
        </p>
      </div>
    

      <div className="project-lists">
        {props.data.withLinks ? 
        <Github projects={props.data.otherProjects} /> : 
        <Design designs={props.data.platforms} /> }
      </div>

    </article>

  )
}

export default GithubProjects
