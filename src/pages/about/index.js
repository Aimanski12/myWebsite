import React, {useContext, useEffect} from 'react'
import {motion} from 'framer-motion'

import {AppData} from '../../context'
import {Anim} from '../../utils/animations'

import page from '../../mockdata/pages/about'

import Footer from '../../components/GlobalComponents/Footer/Footer'
import Head from '../../components/Head'
import Header from '../../components/Headers/About'
import Navigation from '../../components/Navigation'
import ProfileDetails from '../../components/About'
import QuickLink from '../../components/GlobalComponents/Footer/QuickLinks'
import WebLinks from '../../components/GlobalComponents/WebLinks'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)

  useEffect(() => {
    Anim.Helpers.tiltImage(".proj-img", 35)
    AppState.menuTransitions.isTransitioning ? (
      setTimeout(()=>{
        window.scrollTo({top:0, left: 0, behavior: 'auto'})
        SetAppState.setMenuTransitions({isTransitioning: false})
      }, AppState.menuTransitions.delay)
    ) : null
  })

  return (
    <div className='main'>
      <Head data={page.metadata} />
      <Navigation data={page}/>
      <motion.div 
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)}
        initial="initial" 
        animate={{opacity: 1}} 
        exit="exit" 
        id='body-wrapper'
        className="body-wrapper">
        <div className="scroll-body">
          <Header data={page.header}/>
          <ProfileDetails data={page}/>
          <WebLinks data={page.whatICanDo}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
      
    </div>
  )
}

