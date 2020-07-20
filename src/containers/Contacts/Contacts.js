import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Message from './Message/Message'
import {resize} from '../../utils/common/common'
import {connect} from 'react-redux'
import './Contacts.css'

function Contacts(props) {

  useEffect(() => {
    if (!props.pageData) props.checkPage('contacts')

    // console.log('redirect', props.redirect)
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
      <Header />  
      <Message /> 
      <Footer /> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    pageData: state.state.pageData,
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
