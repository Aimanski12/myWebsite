import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import Menu from '../../Nav/TopNav/Menu'
import Copyright from '../../Footer/CopyRight/CopyRight'
import SocialIcons from '../../Footer/SocialIcons/SocialIcons'
import './MenuWrapper.css'

function MenuWrapper() {
  return (
    <div className="menu-wrapper">
      <div className="menu-s menu-left">
        <img src={imageUrl('menu-dots', 'png')} alt=""/>
      </div>
      <div className="menu-s menu-middle">
        <div className=" content-center nav-container">
          <Menu />
        </div>
        <div className="content-center nav-footer">
          <Copyright />
        </div>
      </div>
      <div className="menu-s menu-right">
        <SocialIcons 
          arrangement='right-icons'
          container='social-navicons'
          colorMode='#313D43' />
      </div>
      
    </div>
  )
}

export default MenuWrapper
