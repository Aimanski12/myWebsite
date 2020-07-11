import React from 'react'
import WithTexts from './ScrollSvgs/WithTexts'
import WithoutText from './ScrollSvgs/WithoutText'

function Scroll(props) {

  let svg;
  if(props.withText){
    svg = <WithTexts colors={props.colors} />
  } else {
    svg = <WithoutText colors={props.colors} />
  }

  return (
    (svg)
  )
}

export default Scroll
