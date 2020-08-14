import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Intro from '../../components/Intro/Intro'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
import TopLayover from '../../components/TopLayover/TopLayover'
import ProjectHeader from '../../containers/Projects/ProjectHeader/ProjectHeader'
import OtherProjects from '../../containers/Projects/OtherProjects/OtherProjects'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import {scrollAnimation, debounce} from '../../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../../utils/context/pageContext'
import {StateContext} from '../../utils/context/stateContext'
import {variants} from '../../utils/pageanimations/motion/mainvariant'
import {motion} from 'framer-motion'




function Projects () {
  const {state} = useContext(StateContext)


  useEffect(() => {
    // resize event to when the browser is resized
    resize()
    // scroll event
    window.addEventListener('scroll', debounce(scrollAnimation, 30))
  })
  
  
  return (
    <motion.div 
      variants={variants}
      initial='initial'
      animate='enter'
      exit={state.exitMode}
      className="container">
      <Head>
        <title>Aiman Adlawan | Projects</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <Intro withAnim={true}/>
        <TopLayover/>
        <div className="main-container">
          <PageDataContext pagesets={'projects'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <ProjectHeader />     
              <OtherProjects />  
              <Footer/>
            </main>
          </PageDataContext>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects