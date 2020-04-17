import React from 'react'
import './MenuOverlay.css'
import Overlay from '../../components/Overlay/Overlay'

import Menu from '../../components/MenuOverLay/MenuOverLay'

const MenuOverlay = (props) => {

  return (
    <>
      <Menu
        closeMenu={(x, y)=>props.closeMenu(x, y)}
        pages={props.pages}/>
        {props.introAnim ? <Overlay /> : null}
    </>
  )
}

export default MenuOverlay