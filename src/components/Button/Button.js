import React from 'react'
import ButtonSvg from '../../components/Svg/Button/Button'
import './Button.css'

function Button(props) {
  // check if props image is true
  const img = props.image ? 
    <i className='envelop'>
        <ButtonSvg /> </i> : null

  return (
    <div className="btn-common content-center">
      <a href="/">
        <button className='btn-mcommon content-center'>
          {img}
          {props.text}</button>
      </a>
    </div>
  )
}

export default Button
