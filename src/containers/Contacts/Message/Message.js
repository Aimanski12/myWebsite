import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import './Message.css'


function Message() {
  return (
   <section className="section-container message-me">
      <div className="section-background content-center message-background"
        style={{background: 
      `url('${imageUrl('light-dotted-background-whole', 'png')}') repeat center top`}} >

        <div className="message-container">
          <div className="message-wrapper">
            <div className="form-container">
                <h2 className='head2'
                  style={{color: '#2C6664', lineHeight: '50px'}}>
                  <span className='show-container show'>
                    <div className='reveal'>
                      <span>Message me.</span>
                    </div>
                    <div className='runner'></div>
                  </span>
                </h2>
                <p className="sub-reveal-container desc show">
                  <span className="sub-reveal"
                  style={{color: '#2C6664', fontWeight: 500, marginTop: '0px'}}> 
                    Few details should be good enough.</span>
                </p>

                <p className="sub-reveal-container desc show" style={{marginTop: '30px'}}>
                  <span className="sub-reveal p-desc-content required"
                    style={{color: '#2C6664', fontWeight: 500}}> 
                    * required</span>
                </p>
                <form action="post">

                  <div className="input-container">
                    <i className="fa fa-user icon"
                    style={{background: `url('${imageUrl('user', 'png')}') no-repeat center center`}}></i>
                    <input className="input-field" type="text" placeholder="Full name*" name="name"/>
                  </div>

                  <div className="input-container">
                    <i className="fa fa-user icon"
                    style={{background: `url('${imageUrl('envelop', 'png')}') no-repeat center center`}}></i>
                    <input className="input-field" type="email" placeholder="Email address*" name="email"/>
                  </div>

                  <div className="input-container">
                    <i className="fa fa-user icon"
                    style={{background: `url('${imageUrl('title', 'png')}') no-repeat center center`}}></i>
                    <input className="input-field" type="text" placeholder="Subject: Just sayin' hi!" name="Say hi"/>
                  </div>

                  <div className="input-container">
                    <textarea className="input-field message-area" type="text" placeholder="Message.*" name="message">

                    </textarea>
                  </div>
                

                  <div className="button-area">
                    <div className="content-center notice desc">
                      <span>By clicking send you agree the <span className='m-privacy'> privacy policy</span>.</span>
                    </div>
                    <div className="button">
                      <button type='submit'>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="#EBE9CD" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path>
                        </svg>
                      </button>
                    </div>

                  </div>



                </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Message
