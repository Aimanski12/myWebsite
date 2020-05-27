import React, {Fragment} from 'react'
import HeroOne from './HeroOne'

function HeroSvg(props) {

  return (
    <Fragment>
      { props.page === 'one' ? <HeroOne /> : null }
      
    </Fragment>
  )
}


export default HeroSvg
