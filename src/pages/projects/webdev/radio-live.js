import React, {useContext, useEffect} from 'react'
import {motion} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'

import Head from '../../../components/Head'
import Header from '../../../components/Headers/Project'
import Navigation from '../../../components/Navigation'
import ProjectDetails from '../../../components/Individuals'
import QuickLink from '../../../components/GlobalComponents/Footer/QuickLinks'
import Footer from '../../../components/GlobalComponents/Footer/Footer'
import projects from '../../../mockdata/pages/projects'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)
  const page = projects('radio-live')

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
          <Header data={page}/>
          <ProjectDetails data={page}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
    </div>
  )
}

