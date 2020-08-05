import React, {Fragment} from 'react'
import Link from 'next/link'

function ParagraphLinks(props) {

  return (
    <Fragment>
      <p className="sub-reveal-container p-desc p-links desc show">
        <span className="sub-reveal p-desc-content"
          style={{color: props.color, fontWeight: 500}}> I'm excited to 
          <a href="https://www.linkedin.com/" 
            rel='noopener noreferrer'
            target='_blank'>
            <span className='links'> connect</span>
          </a> with you great people like you.
        </span>
      </p>
      <p className="sub-reveal-container p-desc p-links desc show">
        <span className="sub-reveal p-desc-content"
          style={{color: props.color, fontWeight: 500}}> Click 
          <Link href="/credentials">
            <a>
              <span className='links'> here</span>
            </a> 
          </Link> to see some of my credentials.
          </span>
        </p> 
    </Fragment>
  )
}

export default ParagraphLinks
