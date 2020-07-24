import React from 'react'
import {imageUrl} from '../../../../utils/common/common'

function QrCode(props) {


  // aiman please provide a link for the certificate
  // and alternative name

  return (
    <div className="content-center credential-qr">
      <span className="show-container show">
        <div className="reveal ">
          <a href={props.certLink}>
            <img src={imageUrl(props.qrCode, 'png')} alt=""/>
          </a>
          <span>scan or click to see certificate</span>
        </div>
        <div className="runner"></div>
      </span>
    </div>
  )
}

export default QrCode
