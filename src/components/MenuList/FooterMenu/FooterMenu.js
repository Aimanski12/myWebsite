import React, {Fragment} from 'react'
import Link from 'next/link'
// import {connect} from 'react-redux'
// import {pageTransition} from '../../../utils/pageAnimation/pageTransitionAnim'
// import * as action from '../../../store/actions/index'
// import './FooterMenu.css'

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

// const mapStateToProps = (state) => {
//   return {
//     menus: state.state.menus,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setRedirect: (istrue, path) => {dispatch(action.setRedirect(istrue, path))}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(FooterMenu);
// export default connect(mapStateToProps)(FooterMenu);

export default FooterMenu;
