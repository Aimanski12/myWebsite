import React, {useContext, useEffect} from 'react'
import {motion} from 'framer-motion'

import {Anim} from '../utils/animations'
import {AppData} from '../context'

import Footer from '../components/GlobalComponents/Footer/Footer'
import Head from '../components/Head/index'
import Headers from '../components/Headers/Dark'
import Message from '../components/Contact/Message'
import Navigation from '../components/Navigation'
import QuickLink from '../components/GlobalComponents/Footer/QuickLinks'
import Socials from '../components/Contact/Socials'
import page from '../mockdata/pages/contact'

export default function Contact() {
  const {AppState, SetAppState} = useContext(AppData)

  useEffect(() => {
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
        animate={{opacity: 1}} 
        className="body-wrapper"
        exit="exit" 
        id='body-wrapper'
        initial="initial" 
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)}>
        <div className="scroll-body">
          <Headers data={page.header}/>
          <Message data={page.labels}/>
          <Socials data={page.socialLinks}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
    </div>
  )
}

