import React, {useContext, useEffect} from 'react'
import {AppData} from '../context'
import {Anim} from '../utils/animations'
import {motion} from 'framer-motion'
import Head from 'next/head'
import Navigation from '../containers/Navigation/Navigation'
import Header from '../components/Headers/About'
import ProfileDetails from '../components/About'
import WebLinks from '../components/WebLinks'
import QuickLink from '../components/Footer/QuickLinks'
import Footer from '../components/Footer/Footer'
import page from '../mockdata/pages/about'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)

  console.log(page.whatICanDo)
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

