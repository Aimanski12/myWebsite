import React, {useContext} from 'react';
import {AppData} from '../../../context/appData'
import {Anim} from '../../../utils/animations'
import TextMenu from './MenuText'
import Svg from '../../Svgs'

export default function MenuButton() {
  const {AppState, SetAppState} = useContext(AppData)

  // the hoverin and hover out has to be a 
  // separate function to avoid event bugs
  const hoverIn = () => {
    SetAppState.setMenuButtonState({isHovered: true})
  }

  const hoverOut = () => {
    SetAppState.setMenuButtonState({isHovered: false})
  }

  const open = () => {
    // toggle active class to burger menu
    Anim.Helpers.toggleBurgerToActive()
    // update state
    AppState.menuTransitions.isOpen ? update('auto') : update('hidden')
  }

  // update the state to trigger the open and close 
  // animation of the menu
  const update = (val) => {
    // set body overflow to hidden
    Anim.Helpers.hidshowbody(val)
    // update global state to open/close menu
    SetAppState.setMenuAndButtonState({isOpened: !AppState.buttonMenu.isOpened}, 
      {isOpen: !AppState.menuTransitions.isOpen})
  }

  return (
    <div className="navigation-menu-button">
      <div className="menu-button-container">
        <div className="button-flex-row content-center"
          onClick={open}
          onMouseLeave={hoverOut} onMouseEnter={hoverIn}>
          <div className="font-2 menu-text-container content-center">
            <TextMenu 
              isHovered={AppState.buttonMenu.isHovered}
              isOpen={AppState.buttonMenu.isOpened}/>
          </div>
          <div className="menu-svg-container content-center">
            <Svg svg='menuburger' />
          </div>
        </div>
      </div>
    </div>
  );
}
