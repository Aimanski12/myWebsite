import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import Error from './NotFound/NotFound'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import {resizeProjectWrapper} from '../../utils/pageAnimation/projectsHoverAnimations'
import './NotFound.css'

function NotFound(props) {

  useEffect(() => {
    // if the page is loaded directly, we will set the page data 
    // by calling this function
    if (!props.pageData) props.checkPage('notFound')

    // if the redirect is true, then we will set it to false to 
    // close the toplayover
    if (props.redirect.isTrue) {
      closeTopLayer()
      setTimeout(() => {
        props.resetRedirect(false)
      }, 1200)
    }
    resize()

    
    setTimeout(() => {
      resizeProjectWrapper(props.activeRoute)
    }, 120)
  })

  return (
     <div className="main">
      <Error data={props.pageData}/>
      <Footer show={false}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    pageData: state.state.pageData,
    activeRoute: state.state.activeRoute,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetRedirect: (istrue) => { dispatch(action.resetRedirect(istrue)) },
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)