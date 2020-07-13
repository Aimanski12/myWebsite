import React from 'react'
import Envelop from '../../Svgs/ScrollSvg/Scroll'
import './WithBox.css'

function WithBox(props) {

  let svg = props.withSvg ? ( <Envelop type='envelop' colors={props.colors} /> ) : null

  return (
    <button className='content-center box-button'>
        {svg}
      <span>
        {props.text}</span>
    </button>
  )
}

export default WithBox