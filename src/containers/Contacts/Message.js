import React, {useState, useContext} from 'react'
import {PageData} from '../../utils/context/pageContext'
import FormHeader from './FormHeader'
import Form from './Form'

function Message () {
  const {message} = useContext(PageData)

  return (
    <section className="section-container message-me">
      <div className="section-background content-center message-background"
        style={{background: `url('${message.background}') repeat center top`}} >

        <div className="message-container show">
          <div className="message-wrapper">
            <div className="form-container">
              <FormHeader />
              <Form/>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Message
