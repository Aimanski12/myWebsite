import React from 'react'
import Icon from '../../../../components/GlobalComponents/SocialIcons'
import {motion} from 'framer-motion'

export default function Icons({data}) {

  return (
    <ul className="notfound-socials content-center">
    { data.icons.map((s, i) => {
      return (
        <li className='notfound-socials-wrapper' key={i}>
          <motion.div  variants={'Anim.MenuButton.slideIcons'}>
            <a href={s.link} target='_blank' rel="noreferrer noopener">
            <Icon svg={s.svg} front={data.front} back={data.back}/>
            </a>
          </motion.div>
        </li> )
      })
    }
    </ul>
  )
}


