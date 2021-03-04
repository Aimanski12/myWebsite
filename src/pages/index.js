import React, {useContext, useEffect} from 'react'
import {AppData} from '../context'
import {Anim} from '../utils/animations'
import {motion} from 'framer-motion'
import Navigation from '../components/Navigation'
import Headers from '../components/Headers/Dark'
import ArtWork from '../components/Artwork/Single'
import WebDev from '../components/Projects/WebDev'
import WebLinks from '../components/GlobalComponents/WebLinks'
import QuickLink from '../components/GlobalComponents/Footer/QuickLinks'
import Footer from '../components/GlobalComponents/Footer/Footer'
import Head from '../components/Head'
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
        variants={Anim.TransitionSliders.slidetoexit(
          AppState.menuTransitions.delay)}
        initial="initial" 
        animate={{opacity: 1}} 
        exit="exit" 
        id='body-wrapper'
        className="body-wrapper">
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

