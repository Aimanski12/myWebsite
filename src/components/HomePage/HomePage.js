import React, {useEffect} from 'react'
import './HomePage.css'
import {navHover, navHoverOut} from '../../common/HelperScripts/menuFrameAnimation'
import NameText from '../IntroAnimations/NameText/NameText'

const Homepage = (props, ref) => {

  // animate logo upon start
  useEffect(()=>{
  })

  // mouseover function
  const mouseover = (e) => {
    e.preventDefault()
    // open element when hovered
    navHover()
  }

  // mouseout function
  const mouseout = (e) => {
    e.preventDefault()
    // remove open backgrounds
    navHoverOut()
  }

  return (
    <div className="homepage" ref={ref}>

      <div className="homepage-container">
        <div className="homepage-wrapper">

          {/* nav start */}
          <div className="nav">
            <div className="nav-wrapper">
              {/* logo area */}
              <div className="nav-logo-wrapper">
                <div className="nav-logo-container">
                  <a href="/">
                    <NameText 
                      themeColor={props.themeColor}
                      textAnim='menu' />
                  </a>
                </div>
              </div>
              {/* logo ends */}

              {/* menu button */}
              <div className="nav-menu-wrapper">
                <div className="nav-menu-container">
                  <span className='nav-button center'
                    onClick={(e)=>props.openMenu(e.clientX, e.clientY)}
                    onMouseOver={(e)=>mouseover(e)}
                    onMouseOut={(e)=>mouseout(e)}>Menu</span>
                  <span className='nav-backgroundOne center zero-width'></span>
                  <span className='nav-backgroundTwo center zero-width'></span>
                </div>
              </div>
              {/* menu button */}
              
            </div>
          </div>
          {/* nav ends here */}

          <div className="header"></div>
          <div className="footer"></div>

        </div>
      </div>
      
    </div>
  )
}

const homePage = React.forwardRef(Homepage)
export default homePage