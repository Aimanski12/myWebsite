import React, {useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
import { closeMenu } from '../../../utils/pageanimations/navbarmenu/menuClickEvents'
import {fadeNavbar} from '../../../utils/pageanimations/navbarmenu/navbartransition'
import Link from 'next/link'

function CopyRight(props) {
  const {setTransitionState} = useContext(StateContext)

  // check if the button click is from the top nav
  // or from the bottom nav to return a string
  // that will update the state transition
  let from = props.fromTop ? 'top' : 'bottom'

  // if the privacy button clicked is from the top navbar
  // then we will call this function to close the navbar
  const closenavbar = () => {
    closeMenu()
    fadeNavbar()
  }

  const click = () => {
    props.fromTop ? closenavbar() : null
    setTransitionState(from)
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