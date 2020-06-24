import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
// import {resize} from '../../../utils/common/resize'
import AimanSvgContainer from '../../Svg/AimanLogo/AimanSvgContainer'


function SideNavs (props) {

  useEffect(()=>{
    // resize()
  })

  const navs = () => {
    let a = props.navs
    let c = a.nav.map((b, i)=>{
        return (
      <li key={i} className={b === props.navs.active ? 'active' : null}>
        <Link 
          to={b === 'home' ? '/' : `/${b}`}
          onClick={()=> props.click(b)}
          >{b.toUpperCase()}</Link></li>)
      })
    return c
  }

  return (
  <Fragment>
    <div className='side-navigation'>
      <aside className="left-sidenav">
        <nav className="sidenav-fixed">
          <div className="list-wrapper">
            <div className="list-menu">
              <ul>
                {navs()}
                {/* <li className='active'><a href="/">Work</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contact</a></li> */}
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
    </div>
  </Fragment>
  )
}

export default SideNavs
