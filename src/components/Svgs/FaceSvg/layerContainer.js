import React from 'react'
import './layer.css'

import LayerOne from './layer1'
import LayerTwo from './layer2'
import LayerThree from './layer3'
import LayerFour from './layer4'
import LayerFive from './layer5'
import LayerSix from './layer6'
import LayerSeven from './layer7'


function Layer () {


  return (
    <div className="intro-image-container">
      {/* <LayerOne />
      <LayerTwo /> */}
      <LayerThree />
      <LayerFour />
      <LayerFive />
      <LayerSix />
      <LayerSeven />
    </div>
  )
}

export default Layer