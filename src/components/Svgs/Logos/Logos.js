import React from 'react'
import WithTexts from './ScrollSvgs/WithTexts'
import Arrowright from './ScrollSvgs/ArrowRight'
import Envelop from './ScrollSvgs/Envelop'
import Dribbble from './ScrollSvgs/Dribbble'
import Github from './ScrollSvgs/Github'
import Behance from './ScrollSvgs/Behance'

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

  if(props.type === 'behance') svg = <Behance />

  if(props.type === 'dribbble') svg = <Dribbble />

  if(props.type === 'github') svg = <Github/>

  return (
    (svg)
  )
}

export default Scroll
