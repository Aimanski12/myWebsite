import React from 'react'
import Behance from './Svg/Behance'
import Dribbble from './Svg/Dribbble'
import InstaColored from './Svg/InstaColored'
import Instagram from './Svg/Instagram'
import Linkedin from './Svg/Linkedin'
import Twitter from './Svg/Twitter'
import Pentel from './Svg/Pentel'
import Webdesign from './Svg/Webdesign'
import Bracket from './Svg/Bracket'

function Svgs(props) {

  let svg = props.svg === 'coloredinsta' ? <InstaColored /> :
    props.svg === 'instagram' ? <Instagram /> :
    props.svg === 'behance' ? <Behance/> :
    props.svg === 'dribbble' ? <Dribbble/> :
    props.svg === 'linkedin' ? <Linkedin /> :
    props.svg === 'pentel' ? <Pentel /> :
    props.svg === 'bracket' ? <Bracket /> :
    props.svg === 'webdesign' ? <Webdesign /> :
    props.svg === 'twitter' ? <Twitter /> : null

  return (
    <>
      {svg}
    </>
  )
}

export default Svgs
