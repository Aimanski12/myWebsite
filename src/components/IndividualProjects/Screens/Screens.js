import React from 'react'
import {imageUrl} from '../../../utils/common/common'
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
            style={{color: '#2C6664', fontWeight: 400}}>We are grateful to our longtime collaborator Disney for its role in playing host and making this return to play possible, and we also thank the public health officials and infectious disease specialists who helped.</span>
        </p>
      </article>
      <div className='project-img'>
        <img src={imageUrl('project-one-image-header','png')} alt=""/>  
      </div>
      
       {/* <article className='header-wrapper project-about-wrapper'>
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Main Screen</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content"
            style={{color: '#2C6664', fontWeight: 400}}>We are grateful to our longtime collaborator Disney for its role in playing host and making this return to play possible, and we also thank the public health officials and infectious disease specialists who helped.</span>
        </p>
      </article> */}
      <div className='project-img'>
        <img src={imageUrl('project-one-image-header','png')} alt=""/>  
      </div>

      {/* <article className='header-wrapper project-about-wrapper'>
        <h4 className="p-wrapper head4">
          <span className="show-container p-container show"
            style={{color: '#2C6664'}}>
            <div className="reveal p-reveal">Main Screen</div>
            <div className="runner p-runner"></div>
          </span>
        </h4>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content"
            style={{color: '#2C6664', fontWeight: 400}}>We are grateful to our longtime collaborator Disney for its role in playing host and making this return to play possible, and we also thank the public health officials and infectious disease specialists who helped.</span>
        </p>
      </article> */}
      <div className='project-img'>
        <img src={imageUrl('project-one-image-header','png')} alt=""/>  
      </div>





    </div>
  )
}

export default Screens
