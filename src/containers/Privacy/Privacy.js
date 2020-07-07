import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import {connect} from 'react-redux'
import './Privacy.css'

function Privacy(props) {

  useEffect(()=>{
    if(props.redirect.isTrue){
      closeTopLayer()
      setTimeout(()=>{
        props.resetRedirect(false, '')
        props.checkPage()
      }, 1200)
    }
  })
    

  return (
    <>
      <div className='content-center div'>
        <h1>Privacy page</h1>
      </div>
      <div className="div one"></div>
      <div className="div two"></div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetRedirect: (istrue, path) => { dispatch(action.setRedirect(istrue, path)) },
    checkPage: () => {dispatch(action.checkPageLocation())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Privacy)
