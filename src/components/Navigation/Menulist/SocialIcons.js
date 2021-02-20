import React from 'react';
import Icons from '../../GlobalComponents/SocialIcons'
import {Anim} from '../../../utils/animations'
import {motion} from 'framer-motion'

export default function SocialIcons({data}) {

  const icons = () => {
    return data.socials.map((l, i) => {
      return <li className="menu-socials" key={i}>
        <motion.div  variants={Anim.MenuButton.slideIcons}>
          <a href={l.link} 
            target='_blank'
            rel="noreferrer noopener">
            <Icons svg={l.svg} front={data.front} back={data.back}/>
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
