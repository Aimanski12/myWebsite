import React from 'react'
// import './CopyRight.css'
// import {connect} from 'react-redux'
// import * as action from '../../../store/actions/index'
// import {navHoverElements} from '../../../utils/common/elementSorter'
// import {closeMenu} from '../../../utils/common/menuClickEvents'
// import anime from 'animejs'
// import {openTopLayer} from '../../../utils/common/topLayerAnim'


function CopyRight(props) {

  // const menuClicked = () => {
  //   // check if the privacy icon clicked is from 
  //   // the top menu not from the footer
  //   if(props.fromTop){
  //     // close the opened menu
  //     if (props.isOpen) closeMenuBtn() 

  //     // set menu state to false to close the navbar and change color
  //     props.setMenu(false)
      
  //     setTimeout(() => {
  //       openTopLayer()
  //       setTimeout(()=>{
  //         props.setRedirect(true, '/privacy')
  //       },800)
  //     }, 800)
  //   } else {
  //     openTopLayer()
  //     setTimeout(() => {
  //       props.setRedirect(true, '/privacy')
  //     }, 800)
  //   }
  // }

  // // close menu function
  // const closeMenuBtn = () => {
  //   const el = navHoverElements()
  //   // call function to close animation
  //   closeMenu(false)

  //   const n = document.querySelector('.navbar-container')

  //   let tl = anime.timeline({
  //     easing: 'easeInQuad',
  //     duration: 200,
  //   })
  //   tl.add({
  //       targets: n,
  //       opacity: 0,
  //     })
  //     .add({
  //       duration: 10,
  //       complete: function (anim) {
  //         props.setMenu(!props.isOpen)
  //       }
  //     })
  //     .add({
  //       targets: n,
  //       opacity: 1,
  //       complete: function (anim) {
  //         el.middle.style.color = props.colorModes.close.main
  //       }
  //     })
  // }

  return (
    <div className="copyright">
      <div className="content-center copyright-runner">
        <p style={{color: props.pColor}}>© Aiman Adlawan 2020. All rights reserved.</p>
        {/* <span className='privacy' 
          onClick={menuClicked}>Privacy Policy.</span> */}
        <a href="/privacy">
          <span className='privacy'>Privacy Policy.</span>
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    colorModes : state.state.colorModes,
    // isOpen: state.state.isOpen,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
//     setRedirect: (istrue, path) => {dispatch(action.setRedirect(istrue, path))}
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CopyRight);

// export default connect(mapStateToProps)(CopyRight);
export default CopyRight;