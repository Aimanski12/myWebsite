import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import MenuList from '../../MenuList/TopMenuList/Menu'
import Copyright from '../../Footer/CopyRight/CopyRight'
import SocialIcons from '../../Footer/SocialIcons/SocialIcons'
import './MenuWrapper.css'

function MenuWrapper(props) {
  
  return (
    <div className="menu-wrapper">
      <div className="menu-s menu-left">
        <img className='square-img' src={imageUrl('menu-dots', 'png')} alt="sqaure-dots"/>
      </div>
      <div className="menu-s menu-middle">
        <div className=" content-center nav-container">
          <MenuList />
        </div>
        <div className="content-center nav-footer">
          <Copyright fromTop={true}/>
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
