import React, {Fragment} from 'react'

function TitleBlock(props) {
  return (
    <Fragment>
      <h1 className="header-text">{props.title}</h1>
      <p className="sub-reveal-container desc ">{props.desc} <span className='thesite'>https://www.aimanadlawan.com/</span> the (‘Site’).
      </p>
    </Fragment>
  )
}

export default TitleBlock
