import React from 'react'
import {imageUrl} from '../../utils/common/common'
import Arrow from '../Buttons/Buttons'
import './SectionBlocks.css'

function SectionBlocks(props) {
  let data = props.data

  let blocks = data ? (
    <div className='section-block-background'
        style={{background: 
        `url('${imageUrl(data.background, 'png')}') repeat center top`}}>

        <div className='section-block-left'>
          <div className="left-align left-block">
            <h2 className='head2'
              style={{color: props.color}}>
              <span className='show-container show'>
                <div className='reveal'>
                  <span>{data.blockTitle}</span>
                </div>
                <div className='runner'></div>
              </span>
            </h2>
          </div>
        </div>


        <div className="section-block-right">
          <div className="right-align right-block">
            <div className='show-container show'>
              <p className='reveal desc'
                style={{color: props.color}}>
                <span className=''>{data.blockDesc}</span>
                {props.data.withArrow ? 
                  <span className='block-arrow'>
                    <Arrow type='arrow' colors={props.color}/>
                  </span> : null }
              </p>
              <div className="runner"></div>
            </div>
          </div>
        </div>
      </div>
   ) : null

  return (
    <section className='section-block-container' style={{backgroundColor: data.backgroundColor}}>
      {blocks}  
    </section>
  )
}

export default SectionBlocks