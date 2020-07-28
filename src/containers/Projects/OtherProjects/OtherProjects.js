import React, {Component} from 'react'
import {PageData} from '../../../utils/context/pageContext'
import Projects from './Project/Project'

class OtherProjects extends Component {
  static contextType =PageData

  render() {
    let data = this.context.otherProjects
    return (
    <section className="section-container other-projects">
        <div className="section-background">
          <div className="projects-wrapper">
            <Projects data={data.github}/>
            <Projects data={data.designs}/>
          </div>
        </div>
      </section>
    )
  }
}

export default OtherProjects