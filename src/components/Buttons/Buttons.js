import React from 'react'
import ScrollButton from '../Svgs/ScrollSvg/Scroll'


function Buttons(props) {
  let button;
  if(props.type === 'scrollWithText') {
    button = <ScrollButton withText={true} colors={props.colors}/> 
  }
  if(props.type === 'scrollOnly') {
     button = <ScrollButton withText={false} colors={props.colors} /> 
  } 

  return (
    (button)
  )
}

export default Buttons
