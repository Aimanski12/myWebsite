import React, {useEffect} from 'react'
import Link from 'next/link'
import BrandLogo from '../../../components/Svgs/BrandLogo/BrandLogo'
// import {connect} from 'react-redux'
// import {animateLogo} from '../../../utils/common/navbarLogo'
// import './NavbarLogo.css'

function NavbarLogo(props) {

  useEffect(()=>{
    // animte logo function
    // animateLogo()
  })

  return (
    <div className="navbar-logo">
      <Link href='/'>
        <a><BrandLogo colorMode={props.colors.open.main}/></a>
      </Link>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     colorModes: state.state.colorModes,
//     activeRoute: state.state.activeRoute,
//     isOpen: state.state.isOpen,
//   }
// }

// export default connect(mapStateToProps)(NavbarLogo)
export default NavbarLogo
