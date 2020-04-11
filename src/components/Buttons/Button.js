import React from 'react'
import {generateBackground} from '../../common/Helpers/genBkgd'
import './Button.css'

function Button (props) {
  

  const clickE = (e) => {
    props.click(e.clientX, e.clientY)
  }

  // we need to import the function generateBackground
  // to generate a cosistent background
  return (
    <div className="button-container">
      <div className="button-background" 
        style={{background: `url('${generateBackground(props.themeColor)}') no-repeat center center`}}>
        <button
          onClick={(e)=>clickE(e)}>Explore Me</button>
      </div>
    </div>
  )
}

export default Button

