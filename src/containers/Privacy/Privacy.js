import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import PrivacyPolicy from './Privacy/Privacy'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import './Privacy.css'

function Privacy(props) {

  useEffect(()=>{
    if (!props.pageData) props.checkPage('privacy')
    if(props.redirect.isTrue){
      closeTopLayer()
      setTimeout(()=>{
        props.resetRedirect(false)
      }, 1200)
    }
    resize()
  })
    

  return (
    <div className="main">
      <PrivacyPolicy />
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
    checkPage: (page) => {dispatch(action.checkPageLocation(page))},
    resetRedirect: (istrue) => { dispatch(action.resetRedirect(istrue)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Privacy)
