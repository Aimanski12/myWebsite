import React, {Component} from 'react'
import Link from 'next/link'
import BrandLogo from '../../../components/Svgs/BrandLogo/BrandLogo'
import {PageData} from '../../../utils/context/pageContext'

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

export default NavbarLogo
