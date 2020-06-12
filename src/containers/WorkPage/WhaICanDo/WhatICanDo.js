import React, {useEffect} from 'react'
import {imageSlide, animateBubble} from '../../../utils/work/whatICanDo/whatICanDo'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import {img, im} from '../../../utils/common/common'
import Bubble from '../../../components/Svg/Bubble/Bubble'
import './WhatICanDo.css'

function WhatICanDo() {


  useEffect(()=> {
    imageSlide(document)
    animateBubble(document)
  })

  return (
    <section className="what-i-can-do">
        <div className='section-container content-center'>

          <SectionHeader 
            color='green'
            title='What I Can Do?'
            quote='Only those who see the invisible, can do the impossible.'
            author='Jeffrey Frey' />

          <article className='article-1 content-align'>
            <div className="article-img-container">
              <Bubble />
            </div>
            <div className='article-text-container'>
              <div className='article-container'>
                <h4>Create and design what you need.</h4>
                <p>I like rich yet clear concept designs. I focus on creating a typograhy that delivers message to your expected users and viewers and promotes better traffic to your website.</p>
              </div>
            </div>
          </article>
          
          <article className='article-2 content-align'>
            <div className="article-img-container">
              <div className='img-slide-figure'>
                <figure className="content-center">
                  <div className='img-slide-wrapper content-center '>
                    <div className="img-slider-wrap">
                      <img src={img(4)} 
                        className='img-desktop' alt={`${im[4]} cartoon`}/>
                    </div>
                  </div>
                  <div className="img-slide-wrapper content-center">
                    <div className="img-slider-wrap">
                      <img src={img(5)} 
                        className='img-mobile' alt={`${im[5]} cartoon`}/>
                    </div>
                  </div>
                  <div className="img-slide-wrapper content-center">
                    <div className="img-slider-wrap">
                      <img src={img(6)} 
                        className='img-tablet' alt={`${im[6]} cartoon`}/>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className='article-text-container'>
              <div className='article-container'>
                <h4>Develop and deploy modern.</h4>
                <p>I use the most efficient technology to deploy and run your website/app efficiently with less cost and easy maintence.</p>
              </div>
            </div>
          </article>
        
        </div>
      </section>
  )
}



export default WhatICanDo