import React from 'react'
import {connect} from 'react-redux'
import './OtherProjects.css'
import Projects from './Project/Project'

function OtherProjects(props) {
  let data = props.pageData
  
  let github = data ? <Projects data={data.otherProjects.github}/> : null
  let designs = data ? <Projects data={data.otherProjects.designs}/> : null


  return (
   <section className="section-container other-projects">
      <div className="section-background">
            
        <div className="projects-wrapper">
          {github}
          {designs}
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

export default connect(mapStateToProps)(OtherProjects)