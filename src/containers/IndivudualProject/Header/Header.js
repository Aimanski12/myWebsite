import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import './Header.css'

function Header() {
  return (
    <header className='top' 
        style={{'background': '#2C6664'}}>
        <div className="top-container">
          <div className="proj-header-background"
            style={{background: `url('${imageUrl('green-header', 'png')}') no-repeat center center`, backgroundSize: 'cover'}}>
            <div className="project-image-container">
              <div className="sub-reveal-container project-main-image show">
                <div className="sub-reveal main-image"
                style={{background: `url('${imageUrl('project-one-image-header', 'png')}') no-repeat center top`, backgroundSize: 'cover'}}></div>
              </div>
              <div className="image-front-overlay">
                <div className="image-overlay green-overlay"></div>
              </div>
            </div>
            <div className="content-center project-header-text-wrapper">
              <div className="content-center project-header-text-desc">
                <h1 className="p-wrapper header-text">
                  <span className="show-container p-container show"
                    style={{color: '#EBE9CD'}}>
                    <div className="reveal p-reveal">{'identity-design'}</div>
                    <div className="runner p-runner"></div>
                  </span>
                </h1>
                <p className="sub-reveal-container p-desc desc show">
                  <span className="sub-reveal p-desc-content"
                    style={{color: '#EBE9CD'}}> 
                    {'an ios music player'}</span>
                </p>

              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
