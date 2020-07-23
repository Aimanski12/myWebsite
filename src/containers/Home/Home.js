import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import Header from '../../components/Header/Header'
import SectionBlocks from '../../components/SectionBlocks/SectionBlocks'
import NeedHelp from '../../components/NeedHelp/NeedHelp'
import Footer from '../../components/Footer/Footer'
import ShortProjectView from '../../components/ShortProjectView/ShortProjectView'
import {resize} from '../../utils/common/common'
import {connect} from 'react-redux'
import {loadSlideElements, slideInElementsOnScroll} from '../../utils/pageAnimation/slideInElementsOnscroll'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
import './Home.css'

function Home(props) {
  let blockData = props.pageData ? props.pageData.withBlocks : null
  let projectData = props.pageData ? props.pageData.projectBlocks : null

  useEffect(() => {
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if(!props.pageData) props.checkPage('home')

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

    setTimeout(()=>{
      resizeProjectWrapper(props.activeRoute)
    }, 120)
  })

  
  return (
    <div className="main">
      <Header />
      { blockData ? <SectionBlocks data={blockData} 
                      color={props.colors.open.back} /> : null}
      <ShortProjectView />
      { projectData ? <SectionBlocks data={projectData} 
                      color={'#D3D2C2'} /> : null}

      <NeedHelp />
      <Footer  show={true}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    activeRoute: state.state.activeRoute,
    pageData: state.state.pageData,
    colors: state.state.colorModes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
    resetRedirect: (istrue) =>{dispatch(action.resetRedirect(istrue))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
