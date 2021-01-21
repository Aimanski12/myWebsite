import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import Link from 'next/link'
import {motion} from 'framer-motion'

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
          <motion.button 
            type='button' 
            className='content-center button-wrapper' 
            onClick={click}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}} >
            <span className=''
              style={{color: props.textcolor}}>View project</span>
          </motion.button>
        </a>
      </Link>
    </div>
  )
}

export default ProjectLink