import React, {useEffect} from 'react'
import BrandLogo from '../Svgs/BrandLogo/BrandLogo'
import {connect} from 'react-redux'
import {introAnim} from '../../utils/common/topLayerAnim'
import './TopLayover.css'

function TopLayover(props) {
  useEffect(()=>{
    if(!props.isSeen) {
      introAnim()
    }
  })

  return (
    <div className="top-layover">
      <div className="top-layover-container content-center">
        <div className="top-layover-logo content-center">
          <BrandLogo 
            colorMode={'#AAA893'}/>
          {props.isSeen ? null : 
          <p className='top-loading'
            style={{'color': '#AAA893'}}>
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
    isSeen: state.state.isSeen,
    colorModes: state.state.colorModes,
    isClicked: state.state.isClicked
  }
}

export default connect(mapStateToProps)(TopLayover)