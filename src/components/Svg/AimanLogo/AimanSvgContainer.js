import React, {Fragment} from 'react'
import AimanSvg from './AimanSvg'
import AimanShadow from './AimanShadow'

function AimanSvgContainer (props) {

  return (
    <Fragment>
      <svg className='logo-svg' width="754" height="81" viewBox="0 0 754 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <AimanSvg 
          color={props.color}/>
        <AimanShadow />
      </svg>
    </Fragment>
  )
}


export default AimanSvgContainer
