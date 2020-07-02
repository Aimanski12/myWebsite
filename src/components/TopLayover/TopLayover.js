import React from 'react'
import {imageUrl} from '../../utils/common/common'
import './TopLayover.css'

function TopLayover() {

  return (
    <div className="top-layover">
      <div className="top-layover-container content-center">
        <div className="top-layover-logo content-center">
          <img src={imageUrl('brand-img-dark', 'png')} alt="" />
          <p className='top-loading'>We are loading . . .</p>
        </div>
      </div>
      <div className="top-layover-runner">
        <span className='top-runner'></span>
      </div>
    </div> 
  )
}

export default TopLayover
