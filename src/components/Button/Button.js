import React from 'react'
import {Link} from 'react-router-dom' 
import ButtonSvg from '../../components/Svg/Button/Button'
import './Button.css'

function Button(props) {
  // check if props image is true
  const img = props.image ? 
    <i className='envelop'>
        <ButtonSvg /> </i> : null

  const btn = <button 
                className='btn-mcommon content-center'>{img}{props.text}</button>

  const links = props.external ? 
          <a href={props.link}
            target='_blank'
            rel='noopener noreferrer'> {btn} </a> : 
              <Link to={'/'}> {btn} </Link>



  return (
    <div className="btn-common content-center">
      {links}
    </div>
  )
}

export default Button
