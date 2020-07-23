import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Message from './Message/Message'
import {resize} from '../../utils/common/common'
import {connect} from 'react-redux'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
import {loadSlideElements, slideInElementsOnScroll} from '../../utils/pageAnimation/slideInElementsOnscroll'
import './Contacts.css'

function Contacts(props) {

  useEffect(() => {
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if (!props.pageData) props.checkPage('contacts')

    // if the redirect is true, then we will set it to false to 
    // close the toplayover
    if (props.redirect.isTrue) {
      closeTopLayer()
      setTimeout(() => {
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
      <Header />  
      <Message /> 
      <Footer  show={true}/> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
