import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import Arrow from '../../Buttons/Buttons'
import Link from 'next/link'

function Description(props) {
  const {setTransitionState} = useContext(StateContext)

  // set transition state
  const click = () => {
    setTransitionState('bottom')
  }

  return (
    <div className="section-block-right">
      <div className="right-align right-block">
        <div className='show-container show'>
          <p className='reveal desc'
            style={{color: props.textcolor}}>
            <span className=''>{props.desc}</span>
            {props.withArrow ? 
              <Link href='/projects'>
                <a>
                  <span 
                    className='block-arrow'
                    onClick={click}>
                    <Arrow type='arrow' colors={props.colors}/>
                  </span>
                </a> 
              </Link> : null }
          </p>
          <div className="runner"></div>
        </div>
      </div>
    </div>
  )
}

export default Description
