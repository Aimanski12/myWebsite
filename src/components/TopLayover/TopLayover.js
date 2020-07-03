import React, {useEffect} from 'react'
import BrandLogo from '../Svgs/BrandLogo/BrandLogo'
import {introAnim} from '../../utils/common/topLayerAnim'
import './TopLayover.css'

function TopLayover(props) {
  useEffect(()=>{
    introAnim(props.isSeen)
  })
  return (
    <div className="top-layover">
      <div className="top-layover-container content-center">
        <div className="top-layover-logo content-center">
          <BrandLogo colorMode={props.isSeen ? 'red' : '#787552'}/>
          {props.isSeen ? null : 
          <p className='top-loading'>We are loading . . .</p> }
        </div>
      </div>
      <div className="top-layover-runner">
        <span className='top-runner' 
          style={{'background': props.isSeen ? 'pink' : '#313D50'}}></span>
      </div>
    </div> 
  )
}

export default TopLayover
