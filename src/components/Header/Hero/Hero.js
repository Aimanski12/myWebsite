import React from 'react'
import {imageUrl } from '../../../utils/common/common'
import './Hero.css'

function Hero(props) {
  return (
    <figure className='hero-wrapper'>
      <span className='hero-cover show'>
        <img className='img-reveal' src={imageUrl(props.data.image, 'png')} alt=""/>
        <div className="runner"></div>
      </span>
    </figure>
  )
}

export default Hero