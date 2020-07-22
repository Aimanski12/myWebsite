import React from 'react'
import Arrow from '../../../components/Buttons/Buttons'
import './LaunchLinks.css'

function LaunchLinks() {
  return (
    <div className="launch-links-wrapper">

      <div className="launch-link">
        <div className='show-container show'>
          <a href='/' className='reveal desc'
            style={{color: '#2C6664'}}>
            <span className=''>{'Launch App'}</span>
              <span className='block-arrow'>
                <Arrow type='arrow' colors={'#2C6664'}/>
              </span>
          </a>
          <div className="runner"></div>
        </div>
      </div>

      <div className="launch-link">
        <div className='show-container show'>
          <a href='/' className='reveal desc'
            style={{color: '#2C6664'}}>
            <span className=''>{'View source code'}</span>
              <span className='block-arrow'>
                <Arrow type='arrow' colors={'#2C6664'}/>
              </span>
          </a>
          <div className="runner"></div>
        </div>
      </div>
      
      
    </div>
  )
}

export default LaunchLinks
