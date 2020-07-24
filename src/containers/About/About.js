import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {resize} from '../../utils/common/common'
import {connect} from 'react-redux'
import Header from '../../components/Header/Header'
import SectionBlocks from '../../components/SectionBlocks/SectionBlocks'
import FollowMyReads from './FollowMyReads/FollowMyReads'
import Footer from '../../components/Footer/Footer'
import Skills from './Skills/Skills'
// import {loadSlideElements, slideInElementsOnScroll} from '../../utils/pageAnimation/slideInElementsOnscroll'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
import './About.css'

function About(props) {

  //  assign data when pageData has a value
  let blockData = props.pageData ? props.pageData.withBlocks : null

  useEffect(() => {
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if (!props.pageData) props.checkPage('about')

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
      { blockData ? <SectionBlocks data={blockData} 
                      color={props.colors.open.back} /> : null}
      <Skills />
      <FollowMyReads />
      <Footer  show={true}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(About)