import React from 'react'
import MenuWrapper from './MenuWrapper/MenuWrapper'
import MenuRunner from './MenuRunner/MenuRunner'
import './MenuContainer.css'


function MenuContainer(props) {
  return (
    <div className="menu-container">
      <MenuWrapper
        menuList={props.menuList}
        activeRoute={props.activeRoute} />
      <MenuRunner />
    </div>
  )
}

export default MenuContainer
