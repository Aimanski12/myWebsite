import React, {useContext} from 'react';
import Link from 'next/link'

import {AppData} from '../../../context'
import {Anim} from '../../../utils/animations'

import Svg from '../../Svgs'

export default function Logo() {
  const {AppState, SetAppState} = useContext(AppData)

  // update menuIsClosed, timing, transitioning and is open
  const updateAll = () => {
    // Anim.Helpers.hidshowbody('hidden')
    Anim.Helpers.toggleBurgerToActive()
    SetAppState.setMenuAndButtonState({
      isOpened: !AppState.buttonMenu.isOpened
    }, {
      delay: 1600,
      isOpen: false,
      isTransitioning: true,
    })
  }

  // update only the transition since the 
  // menu is closed/
  const updateSome = () => {
    SetAppState.setMenuTransitions({
      delay: 800,
      isTransitioning: true,
    })
  }

  return (
    <div className="navigation-logo align-left">
      <div className="navigation-logo-container">
        <Link 
          href='/' 
          scroll={false}>
          <a onClick={()=>{
            if(window.location.pathname != '/') {
              // set body over flow to hidden for the transition
              Anim.Helpers.hidshowbody('hidden')
              // set transitioning state
              AppState.menuTransitions.isOpen ? updateAll() : updateSome()
            }
          }}>
            <Svg svg='logo'/>
          </a>
        </Link>
      </div>
    </div>
  );
}
