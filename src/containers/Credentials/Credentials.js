import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
// import {loadSlideElements, slideInElementsOnScroll} from '../../utils/pageAnimation/slideInElementsOnscroll'
import './Credentials.css'

function Credentials(props) {

  useEffect(() => {
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if (!props.pageData) props.checkPage('credentials')

    // if the redirect is true, then we will set it to false to 
    // close the toplayover
    if (props.redirect.isTrue) {
      closeTopLayer()
      setTimeout(() => {
        props.resetRedirect(false)
      }, 1200)
    }
    resize()

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
      <Footer  show={true}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    pageData: state.state.pageData,
    colorModes: state.state.colorModes,
    activeRoute: state.state.activeRoute,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
    resetRedirect: (istrue) => {dispatch(action.resetRedirect(istrue))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Credentials)
