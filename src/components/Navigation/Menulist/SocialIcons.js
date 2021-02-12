import React, {useContext} from 'react';
import {AppData} from '../../../context/appData'
import Icons from '../../GlobalComponents/SocialIcons'
import {Anim} from '../../../utils/animations'
import {motion} from 'framer-motion'

export default function SocialIcons() {
  const {AppState} = useContext(AppData)
  
  const icons = () => {
    const icon = AppState.pageData.data.menuItems.socialIcons
    return icon.socials.map((l, i) => {
      return <li className="menu-socials" key={i}>
        <motion.div  variants={Anim.MenuButton.slideIcons}>
          <a href={l.link} 
            target='_blank'
            rel="noreferrer noopener">
            <Icons svg={l.svg} front={icon.front} back={icon.back}/>
          </a>
        </motion.div>
      </li> }
    )
  }

  return (
    <ul className="menu-socials-container">
      {icons()}
    </ul>
  );
}
