import React, {Fragment} from 'react'
import Link from 'next/link'

function FooterMenu(props) {
  let menus = ['home', 'about', 'projects', 'contacts']
  let menusList = menus.map((menu, i)=>{
    return (
      <Fragment key={i}>
        <Link href={`/${menu === 'home' ? '' : menu}`}>
          <a >
            <li  className='footer-menu'>{menu}</li>
          </a>
        </Link>
      {i < 3 ? <span>|</span> : null }
      </Fragment>
    )
  })

  return (
    <nav className='content-center footer-nav'>
      <ul className='content-center footer-nav-wrapper'>
        {menusList}
      </ul>
    </nav>
  )
}

export default FooterMenu;
