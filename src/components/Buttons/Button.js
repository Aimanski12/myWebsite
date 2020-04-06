import React, {useEffect} from 'react'
import './Button.css'

const red = process.env.PUBLIC_URL + '/assets/images/buttonRed.png'
const yellow = process.env.PUBLIC_URL + '/assets/images/buttonYellow.png'
const green = process.env.PUBLIC_URL + '/assets/images/buttonGreen.png'

function Button (props) {

  useEffect(() => {
    setColor()
  })

  const setColor = (c) => {
    if(c === 'green'){
      return green
    }
    if(c === 'yellow'){
      return yellow
    }
    if(c === 'red'){
      return red
    }
    
  }
  return (
    <div className="button-container">
      <div className="button-background" 
        style={{background: `url('${setColor(props.themeColor)}') no-repeat center center`}}>
        <button>Explore Me</button>
      </div>
    </div>
  )
}


export default Button

