import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Intro from '../components/Intro/Intro'
import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import PrivacyPolicy from '../containers/Privacy/Privacy'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {PageDataContext} from '../utils/context/pageContext'
import {StateContext} from '../utils/context/stateContext'
import {variants} from '../utils/pageanimations/motion/mainvariant'
import {motion} from 'framer-motion'

function Privacy () {
  const {state} = useContext(StateContext)

  useEffect(() => {
    // resize event to when the browser is resized
    resize()
  })

  return (
     <motion.div 
      variants={variants}
      initial='initial'
      animate='enter'
      exit={state.exitMode}
      className="container">
      <Head>
        <title>Aiman Adlawan | Privacy Policy</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <Intro withAnim={false}/>
        <TopLayover/>
        <div className="main-container">
          <PageDataContext pagesets={'privacy'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <PrivacyPolicy />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </motion.div>
  )
}

export default Privacy