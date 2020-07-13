import React from 'react'
import SocialIcons from '../../FooterItem/SocialIcons/SocialIcons'

function SocialIcon() {
  return (
    <aside className='left-align left-icons'>
      <div className="header-social-container show">
        <SocialIcons 
          container='header-social-icons'
          colorMode='#0C5D5A' />
      </div>
    </aside>
  )
}

export default SocialIcon
