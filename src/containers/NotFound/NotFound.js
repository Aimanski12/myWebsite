import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import './NotFound.css'

function NotFound(props) {

  useEffect(() => {
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
      <header 
        className='top content-center' 
        style={{'background': props.colorModes.close.back}}>
        <h1 style={{'color': props.colorModes.close.main}}>Page Not Found</h1>

      </header>
      <Footer />
      <div className="div"></div>
      <div className="div one"></div>
      <div className="div two"></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
    colorModes: state.state.colorModes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetRedirect: (istrue) => { dispatch(action.resetRedirect(istrue)) },
    // checkPage: () => {dispatch(action.checkPageLocation())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)