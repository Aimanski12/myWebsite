import React, {Component} from 'react'
import Link from 'next/link'
import BrandLogo from '../../../components/Svgs/BrandLogo/BrandLogo'
import {PageData} from '../../../utils/context/pageContext'
// import {connect} from 'react-redux'
// import {animateLogo} from '../../../utils/common/navbarLogo'
// import './NavbarLogo.css'

class NavbarLogo extends Component {
  static contextType = PageData

  render(){
    let data = this.context.headers

    return (
      <div className="navbar-logo">
        <Link href='/'>
          <a><BrandLogo colorMode={data.colormodes.close.foreground}/></a>
        </Link>
      </div>
    )
  }
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
