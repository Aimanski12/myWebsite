import React from 'react'
import {connect} from 'react-redux'
import Button from '../../../components/Buttons/Buttons'
import {imageUrl} from '../../../utils/common/common'
import Skill from './Skill/Skill'
import './Skills.css'

function Skills(props) {

  let data = props.pageData
  
  let createDesign = data ? <Skill skills={data.skills.creativeDesign} /> : null
  let frontend = data ? <Skill skills={data.skills.frontend} /> : null
  let backend = data ? <Skill skills={data.skills.backend} /> : null

  return (
    <section className="section-container skills">
      <div className="section-background"
        style={{background: 
      `url('${imageUrl('dark-green-dotted-whole', 'png')}') repeat center top`}}>

        <div className="section-wrapper">
          {createDesign}
          {frontend}
          {backend}
          <article className='section-article-wrapper'>
            {/* <h2 className="head3">
              <span className="show-container show">
                <div className="reveal "
                style={{color: '#EBE9CD'}}>{'asdfasdf'}</div>
                <div className="runner"></div>
              </span>
            </h2> */}
            <p className="sub-reveal-container desc show">
              <span className="sub-reveal"
                style={{color: '#ABA98F', fontWeight: 500}}>
                  <Button 
                    text='View projects' 
                    withSvg={false}
                    colors='#347A78'
                    type='withBox'/>
              </span>
            </p>
          </article>

        </div>

      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    pageData: state.state.pageData
  }
}

export default connect(mapStateToProps)(Skills)
