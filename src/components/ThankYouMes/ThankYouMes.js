import React, {useEffect} from 'react'
import {thankyouMes} from '../../helpers/contact/thanksyoumes'
import {img} from '../../helpers/common/common'

function ThankYouMes() {

  useEffect(()=>{
    thankyouMes(document)
  })

  return (
    <div className="content-center thankyoumessage">
      <h4 className="thankmes1">
        <span className="text-wrapper">
          <span className="letters">Thanks for connecting.</span>
        </span>
      </h4>
      <h4 className="thankmes2">
        <span className="text-wrapper">
          <span className="letters">{`I'll get back to you soon.`}</span>
        </span>
      </h4>
      <img src={img(37)} alt="" />
    </div>
  )
}

export default ThankYouMes
