import React from 'react'
import Link from 'next/link'

function CopyRight(props) {

  return (
    <div className="copyright">
      <div className="content-center copyright-runner">
        <p style={{color: props.pColor}}>© Aiman Adlawan 2020. All rights reserved.</p>
        <Link href='/privacy'>
          <a>
            <span className='privacy'>Privacy Policy.</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CopyRight;