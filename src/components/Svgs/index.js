import React from 'react'
import Insta from './Svg/Instagram'

function Svgs(props) {

  let svg = props.svg === 'insta' ?
    <Insta /> : null


  return (
    {svg}
  )
}

export default Svgs
