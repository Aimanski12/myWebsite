import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import {PageDataContext} from '../../utils/context/pageContext'
import {resize} from '../../utils/common/common'
import TopLayover from '../../components/TopLayover/TopLayover'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
import Header from '../../containers/IndividualProject/Header'
import ProjectBody from '../../containers/IndividualProject/ProjectBody'
import {scrollAnimation, debounce} from '../../utils/pageanimations/scrollanimation/scrollanimation'
import Footer from '../../components/Footer/Footer'
import {StateContext} from '../../utils/context/stateContext'
import {variants} from '../../utils/pageanimations/motion/mainvariant'
import {motion} from 'framer-motion'

function Projects () {
  const {state} = useContext(StateContext)

  useEffect(() => {
    // resize event to when the browser is resized
    resize()
    // scroll()
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
        <title>Aiman Adlawan | Music-App</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <TopLayover/>
        <div className="main-container">
          <PageDataContext projectsets={'music-app'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <Header/>
              <ProjectBody />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </motion.div>
  )
}


// export async function getStaticProps(context){
//   let projectSelected = context.params.projects
//   return {
//     props: { project: projectSelected }
//   }
// }

// export async function getStaticPaths(){
//   return {
//     paths: [
//       { params: {projects: 'music-app'}},
//       { params: {projects: 'reservation-app'}},
//       { params: {projects: 'electric-bill'}},
//       { params: {projects: 'music-player3'}},
//       { params: {projects: 'music-player4'}},
//       { params: {projects: 'music-player5'}},
//     ],
//     fallback: false
//   }
// }

export default Projects


// const scroll = () => {
//   scrollAnimation('page')
// }