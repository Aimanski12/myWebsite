import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import BrandLogo from '../../../components/Svgs/BrandLogo/BrandLogo'
import {animateLogo} from '../../../utils/common/navbarLogo'
import './NavbarLogo.css'

function NavbarLogo(props) {

  useEffect(()=>{
    // animte logo function
    animateLogo()
  })

  return (
    <div className="navbar-logo">
      <a href="/">
        <BrandLogo colorMode={props.isOpen ? 
            props.colorModes.open.main : props.colorModes.close.main}/>
      </a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    colorModes: state.state.colorModes,
    activeRoute: state.state.activeRoute,
    isOpen: state.state.isOpen,
  }
}


export default connect(mapStateToProps)(NavbarLogo)
