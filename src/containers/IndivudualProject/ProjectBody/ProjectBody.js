import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import About from '../../../components/IndividualProjects/About/About'
import Category from '../../../components/IndividualProjects/Categories/Categories'
import Tools from '../../../components/IndividualProjects/Tools/Tools'
import LaunchLinks from '../../../components/IndividualProjects/LaunchLinks/LaunchLinks'
import Screens from '../../../components/IndividualProjects/Screens/Screens'
import './ProjectBody.css'

function ProjectBody() {
  return (
    <section className='project-body-wrapper'>
      <div className='project-background'
        style={{background: 
        `url('${imageUrl('light-dotted-background-whole', 'png')}') repeat center top`}} >

        <div className="projects-wrapper">
          <About />
          <div className="header-wrapper project-description-wrapper">
            <Category />
            <Tools />          
            <LaunchLinks />
          </div>
        </div>

        <Screens />

      </div>
    </section>
  )
}

export default ProjectBody
