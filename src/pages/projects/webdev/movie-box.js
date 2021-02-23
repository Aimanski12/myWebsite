import React, {useContext, useEffect} from 'react'
import {AppData} from '../../../context'
import {Anim} from '../../../utils/animations'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Navigation from '../../../containers/Navigation/Navigation'
import Header from '../../../components/Headers/Project'
import Overview from '../../../components/Individuals'

import QuickLink from '../../../components/Footer/QuickLinks'
import Footer from '../../../components/Footer/Footer'
import projects from '../../../mockdata/pages/projects'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)
  const page = projects('movie-box')
  // console.log(page)

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
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" type="image/x-icon" href="/images/aiman-small-logo.ico" />
      </Head>
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
          <Overview data={page}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
      
    </div>
  )
}

