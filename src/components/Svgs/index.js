import React from 'react'

import Behance from './Svg/Behance'
import Bracket from './Svg/Bracket'
import Chain from './Svg/Chain'
import ChevLeft from './Svg/ChevLeft'
import ChevRight from './Svg/ChevRight'
import Close from './Svg/Close'
import Dribbble from './Svg/Dribbble'
import Envelop from './Svg/Envelop'
import InstaColored from './Svg/InstaColored'
import Instagram from './Svg/Instagram'
import Linkedin from './Svg/Linkedin'
import Logo from './Svg/Logo'
import MenuBurger from './Svg/MenuBurger'
import Pentel from './Svg/Pentel'
import Twitter from './Svg/Twitter'
import Webdesign from './Svg/Webdesign'


function Svgs({svg, fill}) {

  let icon = svg === 'coloredinsta' ? <InstaColored /> :
    svg === 'instagram' ? <Instagram fill={fill} /> :
    svg === 'behance' ? <Behance fill={fill}/> :
    svg === 'dribbble' ? <Dribbble fill={fill}/> :
    svg === 'linkedin' ? <Linkedin fill={fill} /> :
    svg === 'pentel' ? <Pentel /> :
    svg === 'code' ? <Bracket /> :
    svg === 'desktop' ? <Webdesign /> :
    svg === 'menuburger' ? <MenuBurger /> :
    svg === 'logo' ? <Logo /> :
    svg === 'chevleft' ? <ChevLeft/> :
    svg === 'chevright' ? <ChevRight /> :
    svg === 'close' ? <Close/> :
    svg === 'envelop' ? <Envelop/> :
    svg === 'chain' ? <Chain/> :
    svg === 'twitter' ? <Twitter fill={fill} /> : null

  return (
    <>
      {icon}
    </>
  )
}

export default Svgs
