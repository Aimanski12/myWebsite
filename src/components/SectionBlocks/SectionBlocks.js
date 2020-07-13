import React from 'react'
import {imageUrl} from '../../utils/common/common'
import {connect} from 'react-redux'
import Arrow from '../Buttons/Buttons'
import './SectionBlocks.css'

function SectionBlocks(props) {

  let dataBlocks = props.withBlocks
  let color = props.colorModes.open

  let blocks = dataBlocks ? (
    <div className='section-block-background'
        style={{background: 
        `url('${imageUrl(dataBlocks.background, 'png')}') repeat center top`}}>

        <div className='section-block-left'>
          <div className="left-align left-block">
            <h2 className='head2'
              style={{color: color.back}}>
              <span className='show-container show'>
                <div className='reveal'>
                  <span>{dataBlocks.blockTitle}</span>
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
                style={{color: color.back}}>
                <span className=''>{dataBlocks.blockDesc}</span>
                {dataBlocks.withArrow ? 
                  <span className='block-arrow'>
                    <Arrow type='arrow' colors={color.back}/>
                  </span> : null }
              </p>
              <div className="runner"></div>
            </div>
          </div>
        </div>
      </div>
   ) : null

  return (
    <section className='section-block-container'>
      {blocks}  
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    colorModes: state.state.colorModes,
    withBlocks: state.state.pageData.withBlocks
  }
}

export default connect(mapStateToProps)(SectionBlocks)