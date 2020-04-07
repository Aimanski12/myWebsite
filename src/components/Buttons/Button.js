import React from 'react'
import {generateBackground} from '../../common/Helpers/common'
import './Button.css'

function Button (props) {
  
  // we need to import the function generateBackground
  // to generate a cosistent background
  return (
    <div className="button-container">
      <div className="button-background" 
        style={{background: `url('${generateBackground(props.themeColor)}') no-repeat center center`}}>
        <button>Explore Me</button>
      </div>
    </div>
  )
}

export default Button

