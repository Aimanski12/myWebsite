import React, {useEffect, Fragment} from 'react'
import Footer from '../../components/Footer/Footer'
import './IndividualProject.css'

function IndividualProject() {

  useEffect(() =>{
    console.log(window.location.pathname)
  })

  return (
    <Fragment>

      <section className="section-container other-projects">
        <div className="section-background">
        {/* this is the template for the projects
        width must be 1200px */}
          <div className="projects-wrapper">
            <article className='section-article-wrapper'>
              dsapml
            </article>
          </div>
        </div>
      </section>


      <Footer />
    </Fragment>
  )
}

export default IndividualProject
