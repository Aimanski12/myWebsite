import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import MenuList from '../../MenuList/TopMenuList/Menu'
import Copyright from '../../FooterItem/CopyRight/CopyRight'
import SocialIcons from '../../FooterItem/SocialIcons/SocialIcons'
import './MenuWrapper.css'

function MenuWrapper(props) {
  
  return (
    <div className="menu-wrapper">
      <aside className="menu-s menu-left">
        <img className='square-img' src={imageUrl('menu-dots', 'png')} alt="sqaure-dots"/>
      </aside>
      <div className="menu-s menu-middle">
        <div className=" content-center nav-container">
          <MenuList />
        </div>
        <div className="content-center nav-footer">
          <Copyright fromTop={true} pColor='#C6C4AF' />
        </div>
      </div>
      <aside className="menu-s menu-right">
        {/* arrangement is for the left or right locations
        container is for the social navicons */}
        <div className='right-icons'>
          <SocialIcons 
            container='social-navicons'
            colorMode='#313D43' />
        </div>
      </aside>
    </div>
  )
}

export default MenuWrapper
