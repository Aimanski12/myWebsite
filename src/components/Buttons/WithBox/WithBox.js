import React from 'react'
import Envelop from '../../Svgs/Logos/Logos'
import Link from 'next/link'

function WithBox(props) {
  let svg = props.withSvg ? 
    ( <Envelop type='envelop' colors={props.colors} /> ) : null

  return (
    <Link href={props.link}>
      <a>
        <button className={`content-center ${props.btnType}`}>{svg}
          <span>{props.text}</span>
        </button>
      </a>
    </Link>
  )
}

export default WithBox;

