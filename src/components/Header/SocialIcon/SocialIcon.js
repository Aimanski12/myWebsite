import React from 'react'
import SocialIcons from '../../Footer/SocialIcons/SocialIcons'

function SocialIcon(props) {
  return (
    <aside className='left-icons'>
      <div className="header-social-container show">
        <SocialIcons 
          container='header-social-icons'
          colorMode='#0C5D5A' />
      </div>
    </aside>
  )
}

export default SocialIcon
