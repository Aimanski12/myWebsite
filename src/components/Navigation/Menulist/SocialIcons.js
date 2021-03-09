import React from 'react';
import {motion} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import Icons from '../../GlobalComponents/SocialIcons'

export default function SocialIcons({data}) {

  const icons = () => {
    return data.socials.map((l, i) => {
      return <li className="menu-socials" key={i}>
        <motion.div  variants={Anim.MenuButton.slideIcons}>
          <a 
            href={l.link} 
            rel="noreferrer noopener"
            target='_blank'>
            <Icons 
              back={data.back}
              front={data.front} 
              svg={l.svg} />
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
