import React from 'react'
import {imageUrl} from '../../../../utils/common/common'

function QrCode(props) {
  return (
    <div className="content-center credential-qr">
      <span className="show-container p-container show">
        <div className="reveal p-reveal">
          <img src={imageUrl(props.qrCode, 'png')} alt=""/>
          <span>scan QRcode to see certificate</span>
        </div>
        <div className="runner p-runner"></div>
      </span>
    </div>
  )
}

export default QrCode
