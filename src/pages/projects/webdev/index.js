import React, {useContext, useEffect} from 'react'
import {motion} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'

import page from '../../../mockdata/pages/webdev'

import Footer from '../../../components/GlobalComponents/Footer/Footer'
import Github from '../../../components/Projects/Github'
import Head from '../../../components/Head'
import Headers from '../../../components/Headers/Dark'
import Navigation from '../../../components/Navigation'
import QuickLink from '../../../components/GlobalComponents/Footer/QuickLinks'
import Webdev from '../../../components/Projects/WebDev'
import WebLinks from '../../../components/GlobalComponents/WebLinks'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)

  useEffect(() => {
    AppState.menuTransitions.isTransitioning ? (
      setTimeout(()=>{
        window.scrollTo(0, 0)
        SetAppState.setMenuTransitions({isTransitioning: false})
      }, AppState.menuTransitions.delay)
    ) : null
  })

  return (
    <div className='main'>
      <Head data={page.metadata}/>
      <Navigation data={page}/>
      <motion.div 
        animate={{opacity: 1}} 
        className="body-wrapper"
        exit="exit" 
        id='body-wrapper'
        initial="initial" 
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)} >
        <div className="scroll-body">
          <Headers data={page.header}/>
          <Webdev data={page} title={false}/>
          <Github data={page.gitProj}/>
          <hr/>
          <WebLinks data={page.uxui}/>
          <hr/>
          <WebLinks data={page.artWorkLink}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
      
    </div>
  )
}

