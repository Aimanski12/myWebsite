import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {scrollAnimation, debounce} from '../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../utils/context/pageContext'
import {StateContext} from '../utils/context/stateContext'
import {motion} from 'framer-motion'
import {variants} from '../utils/pageanimations/motion/mainvariant'


function Credentials () {
  const {state} = useContext(StateContext)

  useEffect(() =>{
    // resize event to when the browser is resized
    resize()
    // scroll event
    setTimeout(()=>{
      scrollAnimation()
    }, 300)
    window.addEventListener('scroll', debounce(scrollAnimation, 50))
    // return () => {
    //   window.removeEventListener('scroll', scroll)
    // }
  })

  return (
    <motion.div 
      variants={variants}
      initial='initial'
      animate='enter'
      exit={state.exitMode}
      className="container">
      <Head>
        <title>Aiman Adlawan | Credentials</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>
        <div className="container">
          <TopLayover/>
          <div className="main-container">
            <PageDataContext pagesets={'credentials'}>
              <Navbar />       
              <Menu />
              <main className='main'>
                <Header/>
                <Footer />
              </main>
            </PageDataContext>
          </div>
        </div>
    </motion.div>
  )
}

export default Credentials