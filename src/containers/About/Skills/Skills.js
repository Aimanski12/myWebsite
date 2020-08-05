import React, {Component} from 'react'
import {PageData} from '../../../utils/context/pageContext'
import Button from '../../../components/Buttons/Buttons'
import Skill from './Skill/Skill'
// import {connect} from 'react-redux'
// import './Skills.css'

class Skills extends Component {
  static contextType = PageData

  render () {

    let data = this.context.skills
    
    let createDesign = <Skill skills={data.creativeDesign} />
    let frontend = <Skill skills={data.frontend} />
    let backend = <Skill skills={data.backend} />

    return (
      <section className="section-container skills">
        <div className="section-background"
          style={{background: 
        `url('${data.background}') repeat center top`}}>

          <div className="section-wrapper">
            {createDesign}
            {frontend}
            {backend}
            <article className='section-article-wrapper'>
              <div className="sub-reveal-container desc show">
                <span className="sub-reveal btn" style={{color: '#ABA98F'}}>
                  <Button 
                    text={data.messagetext} 
                    type={data.type}
                    withSvg={data.withSvg}
                    btnType={data.btnType}
                    link={data.link}
                    colors={data.color} />
                </span>
              </div>
            </article>
          </div>
        </div> 
      </section>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     pageData: state.state.pageData
//   }
// }
// export default connect(mapStateToProps)(Skills)

export default Skills
