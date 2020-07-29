import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'

class Header extends Component {
  static contextType = PageData

  render() {
    let data = this.context

    return (
      <header className='top' 
        style={{'background': data.bkgColor}}>
        <div className="top-container">
          <div className="proj-header-background"
            style={{background: `url('${data.theme}') no-repeat center center`, backgroundSize: 'cover'}}>
            <div className="project-image-container">
              <div className="sub-reveal-container project-main-image show">
                <div className="sub-reveal main-image"
                style={{background: `url('${data.photo.landing}') no-repeat center top`, backgroundSize: 'cover'}}></div>
              </div>
              <div className="image-front-overlay">
                <div className="image-overlay green-overlay"></div>
              </div>
            </div>
            <div className="content-center project-header-text-wrapper">
              <div className="content-center project-header-text-desc">
                <h1 className="p-wrapper header-text">
                  <span className="show-container p-container show"
                    style={{color: data.textColors.primary}}>
                    <div className="reveal p-reveal">{data.title}</div>
                    <div className="runner p-runner"></div>
                  </span>
                </h1>
                <p className="sub-reveal-container p-desc desc show">
                  <span className="sub-reveal p-desc-content"
                    style={{color: data.textColors.secondary}}> 
                    {data.shortDesc}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
