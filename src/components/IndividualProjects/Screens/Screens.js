import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import Arrow from '../../Buttons/Buttons'
import './Screens.css'

function Screens() {
  return (
    <div className="projects-wrapper screens-wrapper">

      <h2 className="p-wrapper head2">
        <span className="show-container p-container show"
          style={{color: '#2C6664'}}>
          <div className="reveal p-reveal">Screens</div>
          <div className="runner p-runner"></div>
        </span>
      </h2>

      <article className='header-wrapper project-about-wrapper'>
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Main Screen</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content"
            style={{color: '#2C6664', fontWeight: 400}}>We are grateful to our longtime collaborator Disney.</span>
        </p>
      </article>
      <div className='sub-reveal-container project-img show'>
        <img className='sub-reveal' src={imageUrl('project-one-image-header','png')} alt=""/>  
      </div>

      <div className="launch-link">
        <div className='show-container show'>
          <a href='/projects' className='reveal desc'
            style={{color: '#2C6664'}}>
            <span className=''>{'View projects'}</span>
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

export default Screens
