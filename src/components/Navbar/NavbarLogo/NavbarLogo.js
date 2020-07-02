import React, {useEffect} from 'react'
import BrandLogo from '../../../components/Svgs/BrandLogo/BrandLogo'
import {animateLogo} from '../../../utils/common/navbarLogo'
import './NavbarLogo.css'

function NavbarLogo() {

  useEffect(()=>{
    animateLogo()
  })


  return (
    <div className="navbar-logo">
      <a href="/">
        <BrandLogo />
      </a>
    </div>
  )
}

export default NavbarLogo
