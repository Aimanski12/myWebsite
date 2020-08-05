import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import {setTransitionState} from '../../../utils/pageanimations/motion/common'
import { closeMenu } from '../../../utils/pageanimations/navbarmenu/menuClickEvents'
import {fadeNavbar} from '../../../utils/pageanimations/navbarmenu/navbartransition'
import Link from 'next/link'

function CopyRight(props) {
  const {state, setState } = useContext(StateContext)

  // set the mode to its coresponding value if the privacy
  // button clicked is from the bottom
  let exitMode = props.fromTop ? 'topExit' : 'bottomExit'
  let animation = props.fromTop ? 'topAnimation' : 'bottomAnimation'

  // if the privacy button clicked is from the top navbar
  // then we will call this function to close the navbar
  const closenavbar = () => {
    closeMenu()
    fadeNavbar()
  }

  const click = () => {
    props.fromTop ? closenavbar() : null
    setState({
      menuIsOpen: !state.menuIsOpen,
      exitMode,
      isTransitioning: setTransitionState(state.isTransitioning),
      animation
    })
  }

  return (
    <div className="copyright">
      <div className="content-center copyright-runner">
        <p style={{color: props.pColor}}>© Aiman Adlawan 2020. All rights reserved.</p>
        <Link href='/privacy'>
          <a>
            <span 
              onClick={click}
              className='privacy'>Privacy Policy.</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CopyRight;