import React, {useEffect} from 'react'
import Header from './Header/Header'
import ProjectBody from './ProjectBody/ProjectBody'
import Footer from '../../components/Footer/Footer'
import './IndividualProject.css'

function IndividualProject() {

  useEffect(() =>{
    console.log(window.location.pathname)
  })

  return (
    <div className="main">
      <Header />
      <ProjectBody />
      <Footer />
    </div>
  )
}

export default IndividualProject
