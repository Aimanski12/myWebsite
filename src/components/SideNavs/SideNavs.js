import React, {Fragment} from 'react'


function SideNavs () {


  return (
    <Fragment>
      {/* left side nav */}
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
      {/* left side nav ends */}

      {/* right side nav */}
      <aside className="right-sidenav">
        <div className='sidenav-fixed'>
          <div className="side-nav-logo">
            <a href="/">AIMAN ADLAWAN</a>
          </div>
        </div>
      </aside>
      {/* right side nav ends */}
    </Fragment>
  )
}

export default SideNavs
