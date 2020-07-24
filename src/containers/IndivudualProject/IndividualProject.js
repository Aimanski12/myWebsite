import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {connect} from 'react-redux'
import Header from './Header/Header'
import ProjectBody from './ProjectBody/ProjectBody'
import Footer from '../../components/Footer/Footer'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
// import {loadSlideElements, slideInElementsOnScroll} from '../../utils/pageAnimation/slideInElementsOnscroll'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
import {checkRoute} from '../../utils/storeUtils/common'
import './IndividualProject.css'

function IndividualProject(props) {

  useEffect(() =>{
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if (!props.pageData) props.checkPage(checkRoute(window.location.pathname))

    if (props.redirect.isTrue) {
      closeTopLayer()
      setTimeout(() => {
        props.resetRedirect(false)
      }, 1600)
    }

    // setTimeout(()=>{
    //   loadSlideElements()
    // },350)
    // window.addEventListener('scroll', slideInElementsOnScroll)

    setTimeout(() => {
      resizeProjectWrapper(props.activeRoute)
    }, 120)
  })

  return (
    <div className="main">
      <Header />
      <ProjectBody />
      <Footer show={true}/>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    colors: state.state.colorModes,
    activeRoute: state.state.activeRoute,
    pageData: state.state.pageData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
    resetRedirect: (istrue) => {dispatch(action.resetRedirect(istrue))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProject)
