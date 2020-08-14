import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import Envelop from '../../Svgs/Logos/Logos'
import Link from 'next/link'

function WithBox(props) {
  const {setTransitionState} = useContext(StateContext)

  let svg = props.withSvg ? 
    ( <Envelop type='envelop' colors={props.colors} /> ) : null

  // when the button link is clicked
  // we will update the transition state
  const click = () => {
    setTransitionState('bottom')
  }

  return (
    <Link href={props.link}>
      <a>
        <button 
          onClick={click}
          className={`content-center ${props.btnType}`}>{svg}
          <span>{props.text}</span>
        </button>
      </a>
    </Link>
  )
}

export default WithBox;



