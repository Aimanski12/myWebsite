import React from 'react'
import './CopyRight.css'
import {connect} from 'react-redux'
import * as action from '../../../store/actions/index'
import {navHoverElements} from '../../../utils/common/elementSorter'
import {closeMenu} from '../../../utils/common/menuClickEvents'
import anime from 'animejs'
import {routeBtnClicked} from '../../../utils/common/topLayerAnim'


function CopyRight(props) {

  const menuClicked = (path) => {
    if(props.fromTop){
      if (props.isOpen) closeMenuBtn() 

      props.setMenu(false)
      
      setTimeout(() => {
        routeBtnClicked(path)
      }, 1000)
    } else {
      routeBtnClicked(path)
    }

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


  return (
    <div className="copyright">
      <div className="content-center copyright-runner">
        <p>© Aiman Adlawan 2020. All right reserved.</p>
        <span 
          className='privacy'
          onClick={menuClicked}>Privacy Policy.</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    colorModes : state.state.colorModes,
    isOpen: state.state.isOpen,
    isAnimating: state.state.isAnimating,
    isClicked: state.state.isClicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAnimating: (val) => { dispatch(action.setAnimating(val)) },
    setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyRight);
