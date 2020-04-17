import React from 'react'
import MenuFrameSvg from '../Svgs/MenuFrameSvg/MenuFrameSvg'

const Menu = (props) => {

  let uls = []
  props.pages.pages.forEach((ul, i)=>{
    uls.push(
      <li key={i}
        className={`menu-item ${props.pages.pages === ul ? 
                                  'menu-item-selected' : ''}`}>
        <a href="/" className='menu-link'>{ul}</a></li> )
  })

  return (
    <div className="menu flex-center">
      <div className="menu-container">

        {/* menuframe area */}
        <div className="menu-frame" >
          <MenuFrameSvg />
        </div>
        
        {/* menulist area */}
        <div className="menu-list-container flex-center">
          <div className="menu-wrapper">

            {/* menu header */}
            <div className="menu-header-text flex-center" >
              <span>Aiman Adlawan</span>
            </div>
            {/* menu container */}
            <div className="menu-list-items">
              <ul className='menu-list-wrapper flex-center' >

                {/* this is a sample of the list element */}
                {uls}
                {/* <li className="menu-item menu-item-selected">
                  <a href="/" className='menu-link'>Home</a></li> */}

              </ul>
            </div>
            {/* menu bottom */}
            <div className="menu-bottom-text flex-center">
              <span className='menu-close'
                onClick={(e)=>{
                  e.preventDefault()
                  props.closeMenu(e.clientX, e.clientY)
                }}>Close</span>
            </div>
          </div>

        </div>
        {/* menulist area ends */}

      </div>
    </div>
  )
}

export default Menu