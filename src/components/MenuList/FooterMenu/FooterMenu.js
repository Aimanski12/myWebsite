import React, {Fragment, useContext} from 'react'
import {StateContext} from '../../../utils/context/stateContext'
// import {setTransitionState} from '../../../utils/pageanimations/motion/common'
import Link from 'next/link'

function FooterMenu() {
  const {setTransitionState} = useContext(StateContext)
  const menus = ['home', 'about', 'projects', 'contacts']

  // update the state for the transition
  const click = () => {
    setTransitionState('bottom')
  }

  let menusList = menus.map((menu, i)=>{
    return (
      <Fragment key={i}>
        <Link 
          key={menu === 'home' ? '/' : `/${menu}`}
          as={menu === 'home' ? '/' : `/${menu}`}
          href={`/${menu === 'home' ? '' : menu}`}>
          <a>
            <li 
              className='footer-menu'
              onClick={click}>{menu}</li>
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
