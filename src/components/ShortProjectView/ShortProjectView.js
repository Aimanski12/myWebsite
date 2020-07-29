import React, {Component} from 'react'
import Projects from './projects/Projects'
import {PageData} from '../../utils/context/pageContext'

class ShortProjectView extends Component {
  static contextType = PageData

  render(){
    let data = this.context.listofprojects
    
    let projects = <Projects projects={data} />
    
    return (
      <section className="section-container short-project-container">
        {projects}
      </section>      
    )
  }
}

export default ShortProjectView