import React, {useEffect} from 'react'
import * as action from '../../store/actions/index'
import {closeTopLayer} from '../../utils/common/topLayerAnim'
import Header from '../../components/Header/Header'
import SectionBlocks from '../../components/SectionBlocks/SectionBlocks'
import NeedHelp from '../../components/NeedHelp/NeedHelp'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import {connect} from 'react-redux'
import './Home.css'

function Home(props) {

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

      <div className="samp"></div>

      <NeedHelp />
      <Footer />
      <div className="samp"></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    redirect: state.state.redirect,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetRedirect: (istrue) =>{dispatch(action.resetRedirect(istrue))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
