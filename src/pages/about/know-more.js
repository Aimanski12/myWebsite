import React, {useContext, useEffect} from 'react'
import {AppData} from '../../context'
import {Anim} from '../../utils/animations'
import {motion} from 'framer-motion'
import Head from '../../components/Head'
import Navigation from '../../components/Navigation'
import Header from '../../components/Headers/Dark'
import KnowMore from '../../components/KnowMore'
import QuickLink from '../../components/GlobalComponents/Footer/QuickLinks'
import Footer from '../../components/GlobalComponents/Footer/Footer'
import page from '../../mockdata/pages/knowmore'

export default function Home() {
  const {AppState, SetAppState} = useContext(AppData)
  console.log(page)

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
          <KnowMore data={page}/>
          <QuickLink data={page.quickLinks}/>
          <Footer data={page.footer}/>
        </div>
      </motion.div>
      
    </div>
  )
}

