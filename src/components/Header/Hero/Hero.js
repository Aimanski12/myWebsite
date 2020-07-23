import React from 'react'
import {imageUrl } from '../../../utils/common/common'
import './Hero.css'

function Hero(props) {
  return (
    <figure className='hero-wrapper'>
      <span className='show-container hero-cover show'>
        <img className='reveal img-reveal' src={imageUrl(props.data.image, 'png')} alt=""/>
        <div className="runner"></div>
      </span>
    </figure>
  )
}

export default Hero

