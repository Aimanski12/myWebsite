import React, {useContext} from 'react'
import Link from 'next/link'
import BrandLogo from '../../../components/Svgs/BrandLogo/BrandLogo'
import {PageData} from '../../../utils/context/pageContext'
import {StateContext} from '../../../utils/context/stateContext'

function NavbarLogo () {
  const {headers} = useContext(PageData)
  const {state} = useContext(StateContext)
  
  let color = state.menuIsOpen ? 
    headers.colormodes.open.foreground : 
    headers.colormodes.close.foreground


  return (
    <div className="navbar-logo">
      <Link href='/'>
        <a><BrandLogo colorMode={color}/></a>
      </Link>
    </div>
  )
}

export default NavbarLogo
