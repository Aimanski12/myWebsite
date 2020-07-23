import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {pageTransition} from '../../../utils/pageAnimation/pageTransitionAnim'
import * as action from '../../../store/actions/index'
import './FooterMenu.css'

function FooterMenu(props) {
  let menusList = props.menus.map((menu, i)=>{
    return (
      <Fragment key={i}>
      <a href={`/${menu === 'home' ? '' : menu}`}>
        <li  className='footer-menu'>{menu}</li>
      </a>
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

const mapStateToProps = (state) => {
  return {
    menus: state.state.menus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setRedirect: (istrue, path) => {dispatch(action.setRedirect(istrue, path))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterMenu);
