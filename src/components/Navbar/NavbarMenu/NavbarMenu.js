import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import * as action from '../../../store/actions/index'
// import {mouseOut, mouseEnter} from '../../../utils/common/menuHoverEvents'
// import {openMenu, closeMenu} from '../../../utils/common/menuClickEvents'
// import {navHoverElements} from '../../../utils/common/elementSorter'
// import anime from 'animejs'
import Close from '../../../components/Svgs/Close/Close'
// import './NavbarMenu.css'


import {PageData} from '../../../utils/context/pageContext'

class NavbarMenu extends Component {

  static contextType = PageData
  
  render () {
    let data = this.context.headers
    // console.log(data)


    // click event 
    const clicked = async () => {
      if(!this.props.isAnimating) {
        setAnimate(true)
        if(!this.props.isOpen) {
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
            this.props.setMenu(!this.props.isOpen)
          }
        })
        .add({
          targets: n,
          opacity: 1,
          complete: function (anim) {
            el.middle.style.color = this.props.colorModes.close.main          
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
          this.props.setMenu(!this.props.isOpen)
        }
      })
      .add({
        targets: n,
        opacity: 1,
      })
    }

    // function to set isanimating state
    const setAnimate = (isAnim) => {
      isAnim ? this.props.setAnimating(isAnim) : 
      setTimeout(()=>{
        this.props.setAnimating(false)
      }, 1700)
    }

    // hover in functions and to set specific assigned colors
    const hoverIn = () => {
      this.props.isOpen ? mouseEnter(this.props.colorModes.open, 'open') :
      mouseEnter(this.props.colorModes.close, 'close')
    }

    // hover out functions and to set specific assigned colors
    const hoverOut = () => {
      this.props.isOpen ? mouseOut(this.props.colorModes.open, 'open') :
        mouseOut(this.props.colorModes.close, 'close')
    }

    // console.log(this.props.isAnimating)

    return (
      <div className="navbar-menu">
        <div className="front content-center">
          <span className="content-center front-text"
            style={{'color': data.colormodes.close.foreground}}
            onMouseOver={hoverIn}
            onMouseLeave={hoverOut}
            onClick={clicked} >
              {this.props.isOpen ? <Close /> : 'Menu'}</span>  
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
}


// const mapStateToProps = (state) => {
//   return {
//     colorModes: state.state.colorModes,
//     isOpen: state.state.isOpen,
//     isAnimating: state.state.isAnimating,
//     activeRoute: state.state.activeRoute
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setAnimating: (val) => { dispatch(action.setAnimating(val)) },
//     setMenu: (val) => { dispatch(action.menuIsOpen(val)) }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu)
export default NavbarMenu