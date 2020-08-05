import React, {useContext} from 'react'
import {PageData} from '../../../utils/context/pageContext'
import Social from '../../Svgs/Socials/Socials'

function SocialIcons (props) {
  const {socials} = useContext(PageData)

  const socialsIcon = () => {
    return socials.map((social, i) => {
      return (  
        <a href={social.link} key={i}
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
