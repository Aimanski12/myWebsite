import React from 'react'
import './CopyRight.css'
import {routeBtnClicked} from '../../../utils/common/topLayerAnim'


function CopyRight() {
  return (
    <div className="copyright">
      <div className="content-center copyright-runner">
        <p>© Aiman Adlawan 2020. All right reserved.</p>
        <span 
          className='privacy'
          onClick={()=>routeBtnClicked('/privacy')}>Privacy Policy.</span>
      </div>
    </div>
  )
}

export default CopyRight
