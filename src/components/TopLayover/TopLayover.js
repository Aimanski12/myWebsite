import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import BrandLogo from '../Svgs/BrandLogo/BrandLogo'
import {connect} from 'react-redux'
import {introAnim} from '../../utils/common/topLayerAnim'
import './TopLayover.css'

function TopLayover(props) {
  useEffect(()=>{
    introAnim(props.hasSession)
    if(!props.hasSession){
      setTimeout(()=>{
      props.setSession(true)
      }, 9000)
    }
  })
  
  return (
    <div className="top-layover">
      <div className="top-layover-container content-center">
        <div className="top-layover-logo content-center">
          <BrandLogo 
            colorMode={'#E3E1C3'}/>
          {props.hasSession ? null : 
          <p className='top-loading'
            style={{'color': '#F0EED2'}}>
              We are loading . . .</p> }
        </div>
      </div>
      <div className="top-layover-runner">
        <span className='top-runner' 
          style={{'background':'#CCCAAE'}}></span>
      </div>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
    state: state.state,
    hasSession: state.state.hasSession,
    colorModes: state.state.colorModes,
    topOverLayIsRunning: state.state.topOverLayIsRunning
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setSession: (val) => { dispatch(action.checkBrowserSession(val)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopLayover)