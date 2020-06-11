import React from 'react'
import {Link} from 'react-router-dom' 
import ButtonSvg from '../../components/Svg/Button/Button'
import './Button.css'

function Button(props) {
  // check if props image is true
  const img = props.image ? 
    <i className='envelop'>
        <ButtonSvg /> </i> : null

  return (
    <div className="btn-common content-center">
      <Link to="/Contact">
        <button className='btn-mcommon content-center'>
          {img}
          {props.text}</button>
      </Link>
    </div>
  )
}

export default Button
