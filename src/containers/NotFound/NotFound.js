import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import Error from './NotFound/NotFound'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import './NotFound.css'

function NotFound(props) {

  useEffect(() => {
    if (!props.pageData) props.checkPage('notFound')
    if (props.redirect.isTrue) {
      closeTopLayer()
      setTimeout(() => {
        props.resetRedirect(false)
      }, 1200)
    }
    resize()
  })

  return (
     <div className="main">
      <Error data={props.pageData}/>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    pageData: state.state.pageData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetRedirect: (istrue) => { dispatch(action.resetRedirect(istrue)) },
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)