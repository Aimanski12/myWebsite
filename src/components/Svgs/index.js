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
import MenuBurger from './Svg/MenuBurger'
import Logo from './Svg/Logo'
import Close from './Svg/Close'
import ChevRight from './Svg/ChevRight'
import ChevLeft from './Svg/ChevLeft'
import Envelop from './Svg/Envelop'
import Chain from './Svg/Chain'

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
