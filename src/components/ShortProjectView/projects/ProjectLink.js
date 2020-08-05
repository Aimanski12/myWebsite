import React from 'react'
import Link from 'next/link'

function ProjectLink(props) {
  return (
    <div className="project-text-alignright">
      <Link href={`${props.internallinks}`}>
        <a>
          {/* <button type='button' 
            className='sub-reveal-container content-center button-wrapper show' >
            <span className='sub-reveal'
              style={{color: props.textcolor}}>View project</span>
          </button> */}
          <button type='button' 
            className='content-center button-wrapper' >
            <span className=''
              style={{color: props.textcolor}}>View project</span>
          </button>
        </a>
      </Link>
    </div>
  )
}

export default ProjectLink
