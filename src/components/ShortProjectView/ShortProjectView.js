import React from 'react'
import {connect} from "react-redux"
import Projects from './projects/Projects'
import './ShortProjectView.css'


function ShortProjectView(props) {
  let data = props.pageData

  let projects = data ? <Projects projects={data.projectsList} /> : null
  
  return (
    <section className="section-container short-project-container">
      {projects}
    </section>      
  )
}

const mapStateToProps = (state) => {
  return {
    pageData: state.state.pageData
  }
}

export default connect(mapStateToProps)(ShortProjectView)