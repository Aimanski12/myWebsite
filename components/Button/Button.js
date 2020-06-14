import React from 'react'
import Link from 'next/link' 
import ButtonSvg from '../../components/Svg/Button/Button'

function Button(props) {
  // check if props image is true
  const img = props.image ? 
    <i className='envelop'>
        <ButtonSvg /> </i> : null

  return (
    <div className="btn-common content-center">
      <Link href="/Contact">
        <a><button className='btn-mcommon content-center'>
          {img} {props.text}</button></a>
      </Link>
    </div>
  )
}

export default Button
