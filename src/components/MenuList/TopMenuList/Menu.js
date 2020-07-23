import React from 'react'
import * as action from '../../../store/actions/index'
import {connect} from 'react-redux'
import {mouseEnter, mouseOut} from '../../../utils/common/menuListEvents'
import {navHoverElements} from '../../../utils/common/elementSorter'
import {closeMenu} from '../../../utils/common/menuClickEvents'
import {openTopLayer} from '../../../utils/common/topLayerAnim'
import anime from 'animejs'
import './Menu.css'

function Menu(props) {

  const menuClicked = (uPath) => {
    let path = uPath === 'home' ? '' : uPath
    // if menu is open then run animation
    // to close the menu
    if (props.isOpen) {
      closeMenuBtn()
    } 

    // set the isOpen menu state to close
    props.setMenu(false)

    setTimeout(()=>{
      openTopLayer()
      setTimeout(() => {
        props.setRedirect(true, `/${path}`)
      }, 800)
    }, 800)
  }

  // close menu function
  const closeMenuBtn = () => {
    const el = navHoverElements()
    // call function to close animation
    closeMenu(false)

    const n = document.querySelector('.navbar-container')

    let tl = anime.timeline({
      easing: 'easeInQuad',
      duration: 200,
    })
    tl
    .add({
      targets: n,
      opacity: 0,
    })
    .add({
      duration: 10,
      complete: function (anim) {
        props.setMenu(!props.isOpen)
      }
    })
    .add({
      targets: n,
      opacity: 1,
      complete: function (anim) {
        el.middle.style.color = props.colorModes.close.main
      }
    })
  }
  
  const menuList = () => {
    return props.menus.map((menu, i )=>{
      return <li className='menu-list' key={i}>
              <div className='menu-list-container'>
                <div className={`content-center list-front
                  ${menu === props.activeRoute ? 'active' : ''}`}>
                  <span className='menu-list-text'
                    onMouseEnter={(e)=>mouseEnter(e)}
                    onMouseOut={(e)=>mouseOut(e)}
                    onClick={()=>menuClicked(`${menu}`)} >{menu}</span>
                </div>
                <div className={`content-center list-back 
                  ${menu === props.activeRoute ? 'active' : ''}`}>
                  <span className='menu-list-backer'>{menu}</span>
                </div>
              </div>
            </li>
    })
  }
  
  return (
    <nav>
      <ul>
        {menuList()}
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    menus: state.state.menus,
    activeRoute: state.state.activeRoute,
    colorModes: state.state.colorModes,
    isOpen: state.state.isOpen,
    isAnimating: state.state.isAnimating,
    isClicked: state.state.isClicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
    // checkPage: () => {dispatch(action.checkPageLocation())},
    setRedirect: (istrue, path) => { dispatch(action.setRedirect(istrue, path))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
