import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import {setTransitionState} from '../../../utils/pageanimations/motion/common'
import Envelop from '../../Svgs/Logos/Logos'
import Link from 'next/link'

function WithBox(props) {
  const {state, setState} = useContext(StateContext)

  let svg = props.withSvg ? 
    ( <Envelop type='envelop' colors={props.colors} /> ) : null

  const click = () => {
    setState({
      exitMode: 'bottomExit',
      isTransitioning: setTransitionState(state.isTransitioning),
      animation: 'bottomAnimation'
    })
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



