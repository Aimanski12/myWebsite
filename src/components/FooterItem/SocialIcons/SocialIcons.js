import React from 'react'
import Social from '../../Svgs/Socials/Socials'

import {findData} from '../../../utils/data/index'
// import './socialIcons.css'

function SocialIcons(props) {
  let data = findData('socials')
  

  const socialsIcon = () => {
    return data.socials.map((social, i) => {
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

export default SocialIcons
