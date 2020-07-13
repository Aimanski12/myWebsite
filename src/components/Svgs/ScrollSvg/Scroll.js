import React from 'react'
import WithTexts from './ScrollSvgs/WithTexts'
import Arrowright from './ScrollSvgs/ArrowRight'
import Envelop from './ScrollSvgs/Envelop'

function Scroll(props) {
  let svg;

  if(props.type === 'withText'){
    svg = <WithTexts colors={props.colors} />
  } 
  
  if(props.type === 'arrow') {
    svg = <Arrowright colors={props.colors} />
  }

  if(props.type === 'envelop') {
    svg = <Envelop colors={props.colors} />
  }

  return (
    (svg)
  )
}

export default Scroll
