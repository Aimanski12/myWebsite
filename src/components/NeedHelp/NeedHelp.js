import React from 'react'
import {imageUrl} from '../../utils/common/common'
import Button from '../Buttons/Buttons'
import './NeedHelp.css'

function NeedHelp() {
  return (
    <section className='needhelp-container'>
      <div className='needhelp-background'
        style={{background: 
        `url('${imageUrl('light-dotted-background-whole', 'png')}') repeat center top`}} >

      <article className='needhelp-text-block text-span'>
        <div className="needhelp-title-block">



          <div className="needhelp-wrapper">
            <h2 className="head2">
              <span className="show-container show">
                <div className="reveal"
                style={{color: '#347A78'}}>{'Need help with building'}</div>
                <div className="runner"></div>
              </span>
              <span className="show-container show">
                <div className="reveal"
                style={{color: '#347A78'}}>{'your website?'}</div>
                <div className="runner"></div>
              </span>
            </h2>

            <p className="sub-reveal-container desc show">
              <span className="sub-reveal"
                style={{color: '#5D8785'}}>
                {'If you have a project that you want to get started, or you need help on your website, or just want to say hi, let’s get in touch.'}
              </span>
            </p>

          </div>
          
          <p className="sub-reveal-container desc show" >
              <span className="sub-reveal" >
                <Button 
                  text='message me' 
                  withSvg='true'
                  link='contacts'
                  colors='#347A78'
                  type='withBox'/>
              </span>
            </p>

        </div>
      </article>

      </div>
    </section>
  )
}

export default NeedHelp

