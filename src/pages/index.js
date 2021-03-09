import React, {useContext, useEffect} from 'react'
import {motion} from 'framer-motion'

import {Anim} from '../utils/animations'
import {AppData} from '../context'

import ArtWork from '../components/Artwork/Single'
import Footer from '../components/GlobalComponents/Footer/Footer'
import Head from '../components/Head'
import Headers from '../components/Headers/Dark'
import Navigation from '../components/Navigation'
import QuickLink from '../components/GlobalComponents/Footer/QuickLinks'
import WebDev from '../components/Projects/WebDev'
import WebLinks from '../components/GlobalComponents/WebLinks'
import page from '../mockdata/pages/home'


export default function Home() {
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
      <Head data={page.metadata}/>
      <Navigation data={page}/>
      <motion.div 
        animate={{opacity: 1}} 
        className="body-wrapper"
        id='body-wrapper'
        initial="initial" 
        exit="exit" 
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)} >
        <div className="scroll-body">
          <Headers data={page.header}/>
          <ArtWork data={page.artWork[0]}/>
          <WebDev data={page.featured} title={true}/>
          <WebLinks data={page.seeMore}/>
          <ArtWork data={page.artWork[1]}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
      
    </div>
  )
}

