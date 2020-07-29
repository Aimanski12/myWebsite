import React, {Component} from 'react'
import {PageData} from '../../../utils/context/pageContext'
import Social from '../../Svgs/Socials/Socials'

class SocialIcons extends Component{
  static contextType = PageData

  render(){
    let data = this.context.socials

    const socialsIcon = () => {
      return data.map((social, i) => {
        return (  
          <a href={social.link} key={i}
            rel='noopener noreferrer'
            target='_blank' >
            <Social 
              icon={social.name}
              color={this.props.colorMode}/>
          </a>
        )
      })
    }
  
    


    return (
      <div className={`content-center ${this.props.container}`}>
        {socialsIcon()}
      </div>
    )
  }
}

export default SocialIcons
