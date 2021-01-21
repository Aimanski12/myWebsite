import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Intro from '../components/Intro/Intro'
import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import SectionBlocks from '../components/SectionBlocks/SectionBlocks'
import ShortProjectView from '../components/ShortProjectView/ShortProjectView'
import Needhelp from '../components/NeedHelp/NeedHelp'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {scrollAnimation, debounce} from '../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../utils/context/pageContext'
import {StateContext} from '../utils/context/stateContext'
import {variants} from '../utils/pageanimations/motion/mainvariant'
import {motion} from 'framer-motion'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

function Home () {
  const {state} = useContext(StateContext)

  useEffect(()=>{
    // resize event to when the browser is resized
    // resize()
    // scroll event
    // window.addEventListener('scroll', debounce(scrollAnimation, 30))
  })

  return (
    <motion.div 
      variants={variants}
      initial='initial'
      animate='enter'
      exit={state.exitMode}
      className="container">
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>
      <div className="container">
        <div className="fix-div"></div>
        <div className="div one"></div>

        <div className="div two">
          <Slide>
            <Fade bottom>
              <h1>Hi! I’m Aiman Adlawan. A passionate front-end  developer based in Bensenville, Illinois.</h1>
            </Fade>
          </Slide>
          <Slide>
            <Fade bottom>
              <h1>DAmple</h1>
            </Fade>
          </Slide>
          <Slide>
            <Fade bottom>
              <h1>DAmple</h1>
            </Fade>
          </Slide>
        </div>
        <div className="div three"></div>
        <div className="div four"></div>

        {/* <Intro withAnim={true}/>
        <TopLayover/>
        <div className="main-container">
          <PageDataContext pagesets={'home'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <Header/>
              <SectionBlocks title='project' />
              <ShortProjectView />
              <SectionBlocks title='view more' />
              <Needhelp />
              <Footer />
            </main>
          </PageDataContext>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Home
