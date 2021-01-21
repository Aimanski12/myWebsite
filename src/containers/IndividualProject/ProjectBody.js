import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'
import About from '../../components/IndividualProjects/About'
import Category from '../../components/IndividualProjects/Categories'
import Tools from '../../components/IndividualProjects/Tools'
import LaunchLinks from '../../components/IndividualProjects/LaunchLinks'
import Screens from '../../components/IndividualProjects/Screens'


class ProjectBody extends Component {
  static contextType = PageData

  render(){
    let data = this.context

    return (
      <section className='project-body-wrapper'>
        <div className='project-background'
          style={{background: `url('${data.bodybackground}') repeat center top`}} >

          <div className="projects-wrapper project-wrapper-top">
            <About description={data.desc}/>
            <div className="header-wrapper project-description-wrapper">
              <Category categories={data.categories}/>
              <Tools tools={data.tools}/>          
              <LaunchLinks links={data.projectlinks.appLinks}/>
            </div>
          </div>
          <Screens screens={data.photo.screens}/>
        </div>
      </section>
    )
  }
}

export default ProjectBody
