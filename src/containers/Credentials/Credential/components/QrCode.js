import React from 'react'
import {imageUrl} from '../../../../utils/common/common'

function QrCode(props) {
  return (
    <div className="content-center credential-qr">
      <span className="show-container show">
        <div className="reveal ">
          <img src={imageUrl(props.qrCode, 'png')} alt=""/>
          <span>scan QRcode to see certificate</span>
        </div>
        <div className="runner"></div>
      </span>
    </div>
  )
}

export default QrCode
