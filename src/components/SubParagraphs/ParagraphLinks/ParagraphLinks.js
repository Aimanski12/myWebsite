import React, {Fragment, useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import {setTransitionState} from '../../../utils/pageanimations/motion/common'
import Link from 'next/link'

function ParagraphLinks(props) {
  const {state, setState} = useContext(StateContext)

  const click = () => {
    setState({
      exitMode: 'bottomExit',
      isTransitioning: setTransitionState(state.isTransitioning),
      animation: 'bottomAnimation'
    })
  }

  return (
    <Fragment>
      <h3 className="p-wrapper head3">
        <span className="show-container p-container show"
          style={{color: props.colors.primary}}>
          <div className="reveal p-reveal">Connect with me</div>
          <div className="runner p-runner"></div>
        </span>
      </h3>
      <p className="sub-reveal-container p-desc p-links desc show">
        <span className="sub-reveal p-desc-content"
          style={{color: props.colors.secondary, fontWeight: 500}}>I am excited to
          <a href="https://www.linkedin.com/" 
            rel='noopener noreferrer'
            target='_blank'>
            <span className='links'> connect</span>
          </a> with you great people like you. Click 
          <Link href="/credentials">
            <a>
              <span 
                className='links'
                onClick={click}> here</span>
            </a> 
          </Link> to see some of my credentials.
        </span>
      </p>
    </Fragment>
  )
}

export default ParagraphLinks