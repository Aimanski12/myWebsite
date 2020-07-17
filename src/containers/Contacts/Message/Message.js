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
                      <span>By clicking send you agree the <span className='m-privacy'> privacy policy.</span></span>
                    </div>
                    <div className="submit-button-wrapper">
                      <button type='submit'>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M26.5473 1.05715L1.12452 15.7194C0.131744 16.2897 0.257898 17.6715 1.24519 18.0882L7.07571 20.5337L22.834 6.65009C23.1357 6.38141 23.5635 6.79266 23.3057 7.10521L10.0924 23.1986V27.6126C10.0924 28.9067 11.6557 29.4166 12.4235 28.479L15.9065 24.2404L22.7408 27.1027C23.5196 27.4317 24.4082 26.9437 24.5508 26.1047L28.5 2.41701C28.6865 1.30939 27.4962 0.508827 26.5473 1.05715Z" fill="#EBE9CD"/>
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
