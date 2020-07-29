import React, {Component} from 'react'
import Close from '../../../components/Svgs/Close/Close'
import {PageData} from '../../../utils/context/pageContext'

class NavbarMenu extends Component {
  static contextType = PageData

  render () {
    let data = this.context.headers

    return (
      <div className="navbar-menu">
        <div className="front content-center">
          <span className="content-center front-text"
            style={{'color': data.colormodes.close.foreground}}>Menu</span>  
        </div>
        <div className="middle content-center">
          <span className="middle-span"></span>
        </div>
        <div className="back content-center">
          <span className="back-span"></span>
        </div>
      </div>
    )
  }
}

export default NavbarMenu