import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import Footer from '../../components/Footer/Footer'
import ProjectHeader from './ProjectHeader/ProjectHeader'
import OtherProjects from './OtherProjects/OtherProjects'
import {resize} from '../../utils/common/common'
import {loadSlideElements, slideInElementsOnScroll} from '../../utils/pageAnimation/slideInElementsOnscroll'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
import './Projects.css'

// import {Route} from 'react-router-dom'
// import ProjectOne from './Project1/ProjectOne'

function Projects(props) {

  useEffect(()=>{
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if (!props.pageData) props.checkPage('projects')

    // if the redirect is true, then we will set it to false to 
    // close the toplayover
    if(props.redirect.isTrue){
      closeTopLayer()
      setTimeout(()=>{
        props.resetRedirect(false)
      }, 1200)
    }
    resize()


     loadSlideElements()
     window.addEventListener('scroll', slideInElementsOnScroll)

     setTimeout(() => {
       resizeProjectWrapper(props.activeRoute)
     }, 120)
  })

  return (
    <div className="main">
      <ProjectHeader />
      <OtherProjects />
      <Footer  show={true}/>
      {/* <Route exact path='/projects/project-one'>
        <ProjectOne />
      </Route> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    pageData: state.state.pageData,
    activeRoute: state.state.activeRoute,
    colorModes: state.state.colorModes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
    resetRedirect: (istrue) => { dispatch(action.resetRedirect(istrue)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)