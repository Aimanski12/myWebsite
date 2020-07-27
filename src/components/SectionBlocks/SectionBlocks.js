import React from 'react'
import {imageUrl} from '../../utils/common/common'
// import * as action from '../../store/actions/index'
// import {pageTransition} from '../../utils/pageAnimation/pageTransitionAnim'
import {connect} from 'react-redux'
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
                  <a href="/projects">
                    <span className='block-arrow'
                      // onClick={()=>{
                        //   pageTransition()
                        //   setTimeout(() => {
                          //     props.setRedirect(true, `/projects`)
                          //   }, 1000)
                          // }}
                          >
                      <Arrow type='arrow' colors={props.color}/>
                    </span></a> : null }
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

const mapDispatchToProps = (dispatch) => {
  return {
    // setMenu: (val) => { dispatch(action.menuIsOpen(val)) },
    // checkPage: () => {dispatch(action.checkPageLocation())},
    // setRedirect: (istrue, path) => { dispatch(action.setRedirect(istrue, path)) }
  }
}

export default connect(null, mapDispatchToProps)(SectionBlocks);