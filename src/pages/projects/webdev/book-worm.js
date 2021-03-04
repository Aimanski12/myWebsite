import React, {useContext, useEffect} from 'react'
import {AppData} from '../../../context'
import {Anim} from '../../../utils/animations'
import {motion} from 'framer-motion'
import Head from '../../../components/Head'
import Navigation from '../../../components/Navigation'
import Header from '../../../components/Headers/Project'
import ProjectDetails from '../../../components/Individuals'
import QuickLink from '../../../components/GlobalComponents/Footer/QuickLinks'
import Footer from '../../../components/GlobalComponents/Footer/Footer'
import projects from '../../../mockdata/pages/projects'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)
  const page = projects('book-worm')

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
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)}
        initial="initial" 
        animate={{opacity: 1}} 
        exit="exit" 
        id='body-wrapper'
        className="body-wrapper">
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

