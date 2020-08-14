import React from 'react'
import Button from '../Svgs/Logos/Logos'
import WithBox from './WithBox/WithBox'

function Buttons (props){

  let button;
  if(props.type === 'withText') {
    button = <Button type={props.type} colors={props.colors}/> 
  }
  
  if(props.type === 'withBox') {
    button = 
      <WithBox 
        btnType={props.btnType}
        link={props.link}
        text={props.text} 
        withSvg={props.withSvg} 
        colors={props.colors} />
  }
  
  if(props.type === 'arrow') {
    button = 
      <Button colors={props.colors} type={props.type}/> 
  }

  return(
    (button)
  )
}

export default Buttons;


