import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'
import Form from './Form'
// import {imageUrl} from '../../../utils/common/common'
// import './Message.css'

class Message extends Component {
  static contextType = PageData

  render() {
    let data = this.context.message

    return (
      <section className="section-container message-me">
        <div className="section-background content-center message-background"
          style={{background: `url('${data.background}') repeat center top`}} >

          <div className="message-container show">
            <div className="message-wrapper">
              <div className="form-container">
                <h2 className='head2'
                  style={{color: '#2C6664', lineHeight: '50px'}}>
                  <span className='show-container'>
                    <div className=''>
                      <span>{data.title}</span>
                    </div>
                    <div className='runner'></div>
                  </span>
                </h2>
                <p className="sub-reveal-container desc">
                  <span className=""
                  style={{color: '#2C6664', fontWeight: 500, marginTop: '0px'}}> 
                    {data.shortDesc}</span>
                </p>
                <p className="sub-reveal-container desc" style={{marginTop: '30px'}}>
                  <span className="p-desc-content required"
                    style={{color: '#2C6664', fontWeight: 500}}> * required</span>
                </p>

                <Form />
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}

export default Message
