import React, {useState, useContext} from 'react';
import {AppData} from '../../../context/appData'
import {Anim} from '../../../utils/animations'
import TextMenu from './MenuText'
import Svg from '../../Svgs'

export default function MenuButton() {
  const {AppState, SetAppState} = useContext(AppData)

  const [buttonState, setButtonState] =useState({isHovered: false, isOpen: false})

  // the hoverin and hover out has to be a 
  // separate function to avoid event bugs
  const hoverIn = () => {
    setButtonState({ ...buttonState, isHovered: true })
  }

  const hoverOut = () => {
    setButtonState({ ...buttonState, isHovered: false })
  }

  const open = () => {
    const svg = document.querySelector('.menu-burger')
    // toggle active clase in the menu
    svg.classList.toggle('active')
    AppState.menuTransitions.isOpen ? update('auto') : update('hidden')
  }

  // update the state to triiger the animation
  const update = (val) => {
    // local state for the menu button
    setButtonState({ ...buttonState, isOpen: !buttonState.isOpen })
    // set body overflow to hidden
    Anim.Helpers.hidshowbody(val)
    // update global state to open/close menu
    SetAppState.setMenuTransitions({isOpen: !AppState.menuTransitions.isOpen})
  }

  return (
    <div className="navigation-menu-button">
      <div className="menu-button-container">
        <div className="button-flex-row content-center"
          onClick={open}
          onMouseLeave={hoverOut} onMouseEnter={hoverIn}>
          <div className="menu-text-container content-center font-2">
            <TextMenu 
              isHovered={buttonState.isHovered}
              isOpen={buttonState.isOpen}/>
          </div>
          <div className="menu-svg-container content-center">
            <Svg svg='menuburger' />
          </div>
        </div>
      </div>
    </div>
  );
}
