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
import './About.css'

function About(props) {

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
      <Header />
      <SectionBlocks />
      <Skills />
      <FollowMyReads />
      <Footer />
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
    resetRedirect: (istrue) => {dispatch(action.resetRedirect(istrue))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)