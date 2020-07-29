import React, {Component} from 'react'
import Arrow from '../Buttons/Buttons'
import Link from 'next/link'
import {PageData} from '../../utils/context/pageContext'

class SectionBlocks extends Component {
  static contextType = PageData
  render(){

    let data = findData(this.props.title, this.context)

    let blocks = 
      <div className='section-block-background'
          style={{background: `url('${data.background}') repeat center top`}}>
            
          <div className='section-block-left'>
            <div className="left-align left-block">
              <h2 className='head2'
                style={{color: data.textcolor}}>
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
                  style={{color: data.textcolor}}>
                  <span className=''>{data.blockDesc}</span>
                  {data.withArrow ? 
                    <Link href='/projects'>
                      <a>
                        <span className='block-arrow'
                          // onClick={()=>{
                            //   pageTransition()
                            //   setTimeout(() => {
                              //     props.setRedirect(true, `/projects`)
                              //   }, 1000)
                              // }}
                              >
                          <Arrow type='arrow' colors={data.textcolor}/>
                        </span>
                      </a> 
                    </Link> : null }
                </p>
                <div className="runner"></div>
              </div>
            </div>
          </div>
        </div>

    return (
      <section className='section-block-container' 
        style={{backgroundColor: data.backgroundColor}}>
        {blocks}  
      </section>
    )
  }
}

export default SectionBlocks;


const findData = (title, context) => {
  if(title === 'project'  || title === 'skills') return context.withBlocks 
  if(title === 'view more') return context.projectBlocks
}