import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import NotFound from '../containers/NotFound/NotFound'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {PageDataContext} from '../utils/context/pageContext'
import {StateContext} from '../utils/context/stateContext'
import {variants} from '../utils/pageanimations/motion/mainvariant'
import {motion} from 'framer-motion'


function NotFoundPage () {
  const {state} = useContext(StateContext)

  useEffect(() =>{
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
        <title>Aiman Adlawan | Page not found</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <div className="main-container">
          <PageDataContext pagesets={'notfound'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <NotFound />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFoundPage
