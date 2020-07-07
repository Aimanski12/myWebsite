import React from 'react'
import {connect} from 'react-redux'
import * as action from '../../../store/actions/index'
import {mouseOut, mouseEnter} from '../../../utils/common/menuHoverEvents'
import {openMenu, closeMenu} from '../../../utils/common/menuClickEvents'
import {navHoverElements} from '../../../utils/common/elementSorter'
import anime from 'animejs'
import Close from '../../../components/Svgs/Close/Close'
import './NavbarMenu.css'

function NavbarMenu(props) {

  // click event 
  const clicked = async () => {
    if(!props.isAnimating) {
      setAnimate(true)
      if(!props.isOpen) {
        openMenuBtn()
      } else {
        closeMenuBtn()
      }
    }
  }

  // close menu function
  const closeMenuBtn = () => {
    const el = navHoverElements()
    // call function to close animation
    closeMenu(true)

    // set is animating after 1700 milsec to block multiple click events
    setAnimate(false)

    const n = document.querySelector('.navbar-container')
    
    let tl = anime.timeline({
      easing: 'easeInQuad',
      duration: 200,
    })
    tl.add({
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

  // open menu function
  const openMenuBtn = () => {
    // call function to open menu animtion
    openMenu()

    // set is animating after 1700 milsec to block multiple click events
    setAnimate(false)
    const n = document.querySelector('.navbar-container')
    
    let tl = anime.timeline({
      easing: 'easeInQuad',
      duration: 200,
    })
    tl.add({
      targets: n,
      opacity: 0,
    })
    .add ({
      duration: 10,
      complete: function (anim) {
        props.setMenu(!props.isOpen)
      }
    })
    .add({
      targets: n,
      opacity: 1,
    })
  }

  // function to set isanimating state
  const setAnimate = (isAnim) => {
    isAnim ? props.setAnimating(isAnim) : 
    setTimeout(()=>{
      props.setAnimating(false)
    }, 1700)
  }

  // hover in functions and to set specific assigned colors
  const hoverIn = () => {
    props.isOpen ? mouseEnter(props.colorModes.open, 'open') :
     mouseEnter(props.colorModes.close, 'close')
  }

  // hover out functions and to set specific assigned colors
  const hoverOut = () => {
    props.isOpen ? mouseOut(props.colorModes.open, 'open') :
      mouseOut(props.colorModes.close, 'close')
  }

  // console.log(props.isAnimating)

  return (
    <div className="navbar-menu">
      <div className="front content-center">
        <span className="content-center front-text"
          style={{'color': props.colorModes.close.main}}
          onMouseOver={hoverIn}
          onMouseLeave={hoverOut}
          onClick={clicked} >
            {props.isOpen ? <Close /> : 'Menu'}</span>  
      </div>
      <div className="middle content-center">
        <span className="middle-span"></span>
      </div>
      <div className="back content-center">
        <span className="back-span"></span>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    colorModes: state.state.colorModes,
    isOpen: state.state.isOpen,
    isAnimating: state.state.isAnimating,
    activeRoute: state.state.activeRoute
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAnimating: (val) => { dispatch(action.setAnimating(val)) },
    setMenu: (val) => { dispatch(action.menuIsOpen(val)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu)