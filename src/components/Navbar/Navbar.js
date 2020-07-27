import React from 'react'
// import './Navbar.css'
import NavbarLogo from './NavbarLogo/NavbarLogo'
import NavbarMenu from './NavbarMenu/NavbarMenu'

function Navbar(props) {
  let data = props.data
  
  return (
    <div className="navbar-container">
      <NavbarLogo colors={data.colormodes}/>
      <NavbarMenu colors={data.colormodes} />
    </div>
  )
}

export default Navbar