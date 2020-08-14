import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import Link from 'next/link'

function ProjectLink(props) {
  const {setTransitionState} = useContext(StateContext)
  
  // set transition state
  const click = () => {
    setTransitionState('bottom')
  }

  return (
    <div className="project-text-alignright">
      <Link href={`${props.internallinks}`}>
        <a>
          <button 
            type='button' 
            className='content-center button-wrapper' 
            onClick={click} >
            <span className=''
              style={{color: props.textcolor}}>View project</span>
          </button>
        </a>
      </Link>
    </div>
  )
}

export default ProjectLink