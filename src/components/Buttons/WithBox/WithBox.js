import React from 'react'
import Envelop from '../../Svgs/Logos/Logos'
// import * as action from '../../../store/actions/index'
// import {pageTransition} from '../../../utils/pageAnimation/pageTransitionAnim'
// import {connect} from 'react-redux'
// import './WithBox.css'

function WithBox(props) {
  let withlink = props.link
  
  let svg = props.withSvg ? ( <Envelop type='envelop' colors={props.colors} /> ) : null

  // const redirect = () => {
  //   pageTransition()

  //   setTimeout(() => {
  //     props.setRedirect(true, `/${props.link}`)
  //   }, 1000)

  // }


  return (
    <a href={withlink}>
      <button className={`content-center ${props.btnType}`}>
          {svg}
        <span>
          {props.text}</span>
      </button>
    </a>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
//     // checkPage: () => {dispatch(action.checkPageLocation())},
//     setRedirect: (istrue, path) => { dispatch(action.setRedirect(istrue, path)) }
//   }
// }

// export default connect(null, mapDispatchToProps)(WithBox);
export default WithBox;