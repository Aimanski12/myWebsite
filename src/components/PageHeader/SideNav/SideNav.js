import React, {Fragment} from 'react'
import AimanSvgContainer from '../../Svg/AimanLogo/AimanSvgContainer'


function SideNavs (props) {


  return (
    <Fragment>
      <aside className="left-sidenav">
        <nav className="sidenav-fixed">
          <div className="list-wrapper">
            <div className="list-menu">
              <ul>
                <li className='active'><a href="/">Work</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>

      <aside className="right-sidenav">
        <div className='sidenav-fixed'>
          <div className="side-nav-logo">
            <a href="/">
              <AimanSvgContainer 
                color={props.color} />
            </a>
          </div>
        </div>
      </aside>
    </Fragment>
  )
}

export default SideNavs
