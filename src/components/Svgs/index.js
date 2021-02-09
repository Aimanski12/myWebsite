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

function Svgs({svg, fill}) {

  let icon = svg === 'coloredinsta' ? <InstaColored /> :
    svg === 'instagram' ? <Instagram fill={fill} /> :
    svg === 'behance' ? <Behance fill={fill}/> :
    svg === 'dribbble' ? <Dribbble fill={fill}/> :
    svg === 'linkedin' ? <Linkedin fill={fill} /> :
    svg === 'pentel' ? <Pentel /> :
    svg === 'bracket' ? <Bracket /> :
    svg === 'webdesign' ? <Webdesign /> :
    svg === 'menuburger' ? <MenuBurger /> :
    svg === 'logo' ? <Logo /> :
    svg === 'twitter' ? <Twitter fill={fill} /> : null

  return (
    <>
      {icon}
    </>
  )
}

export default Svgs
