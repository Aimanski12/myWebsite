import React, {useState, useEffect} from 'react';
import './Single-Feature.css'
import Button from '../Button/Button'

import {single_feature} from '../../animate'
import coffee from '../../images/photos/coffee-sliderImage.png'

const Single_Feature = () => {

  const [btnText, btnTextFn] = useState('')

  useEffect(() => {
    btnTextFn('Learn More')
    window.addEventListener('scroll', (e) => {
      const w = window.innerWidth
      const left = document.querySelector('.single-feature-left')
      const right = document.querySelector('.single-feature-right')

      single_feature(w, left, right, e.path[1].pageYOffset)

    })
  })

  return (
    <div className="single-feature">
      <section className="single-feature-left">
        <h2>Lets build <span className="default-color-gold">Great Things</span> together and fulfill our <span className="default-color-dark">Dreams</span></h2>
        <p>Advancement in technology has been a power driver for individuals to rise and create their own path of success. If you have dreams, lets build it.</p>
        <Button text={btnText}/>
        {/* <button>Learn More</button> */}
      </section>
      <div className="single-feature-right">
        <img src={coffee} alt="coffee-sliderImage"/>
      </div>
      
    </div>

  )
}


export default Single_Feature
