import React, {Component} from 'react'
// import {imageUrl } from '../../../utils/common/common'
// import './Hero.css'

import {PageData} from '../../../utils/context/pageContext'

class Hero extends Component {
  static contextType = PageData
  render(){
    let img = this.context.headers.withImage.image
    return (
      <figure className='hero-wrapper'>
        <span className='show-container hero-cover show'>
          <img className='reveal img-reveal' src={img} alt=""/>
          <div className="runner"></div>
        </span>
      </figure>
    )
  }
}

export default Hero

