import React from 'react'
import Arrow from '../Buttons/Buttons'

function LaunchLinks(props) {
  let links = props.links.map((link, i)=>{
    return (
      <div className="launch-link" key={i}>
        <div className='show-container show'>
          <a 
            href={`https://${link.link}`}
            rel='noopener noreferrer'
            target='_blank'
            className='reveal desc'
            style={{color: '#2C6664'}}>
            <span className=''>{link.text}</span>
            <span className='block-arrow'>
              <Arrow type='arrow' colors={'#2C6664'}/>
            </span>
          </a>
          <div className="runner"></div>
        </div>
      </div>
    )
  })

  return (
    <div className="launch-links-wrapper">
      {links}
    </div>
  )
}

export default LaunchLinks
