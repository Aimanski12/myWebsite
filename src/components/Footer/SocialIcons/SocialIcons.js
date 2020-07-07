import React from 'react'
import Social from '../../Svgs/Socials/Socials'

import {socials} from '../../../utils/data/socials'
import './SocialIcons.css'

function FooterIcons(props) {


  const socialsIcon = () => {
    return socials.map((social, i) => {
      return (  <a href={social.link} key={i}>
                  <Social 
                    icon={social.name}
                    color={props.colorMode}/>
                </a>
      )
    })
  }

  return (
    <div className={props.arrangement}>
      <div className={`content-center ${props.container}`}>
        {socialsIcon()}
      </div>
    </div>
  )
}

export default FooterIcons
