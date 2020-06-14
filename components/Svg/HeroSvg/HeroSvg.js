import React, {Fragment} from 'react'
import HeroOne from './HeroOne'
import HeroTwo from './HeroTwo'

function HeroSvg(props) {

  return (
    <Fragment>
      { props.page === 'one' ? <HeroOne /> : props.page === 'two' ? <HeroTwo /> : null }
    </Fragment>
  )
}


export default HeroSvg
