import React from 'react'
import MenuWrapper from './MenuWrapper/MenuWrapper'
import MenuRunner from './MenuRunner/MenuRunner'
// import './menucontainer.css'


function MenuContainer() {
  return (
    <div className="menu-container">
      <MenuWrapper />
      <MenuRunner />
    </div>
  )
}

export default MenuContainer
