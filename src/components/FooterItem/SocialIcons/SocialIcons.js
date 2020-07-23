import React from 'react'
import Social from '../../Svgs/Socials/Socials'

import {socials} from '../../../utils/data/socials'
import './SocialIcons.css'

function FooterIcons(props) {


  const socialsIcon = () => {
    return socials.map((social, i) => {
      return (  <a href={social.link} key={i}
                  rel='noopener noreferrer'
                  target='_blank' >
                  <Social 
                    icon={social.name}
                    color={props.colorMode}/>
                </a>
      )
    })
  }

  return (
    <div className={`content-center ${props.container}`}>
      {socialsIcon()}
    </div>
  )
}

export default FooterIcons
