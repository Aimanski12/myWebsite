import React, {useEffect} from 'react'
import Head from 'next/head'
import {PageDataContext} from '../../utils/context/pageContext'
import {resize} from '../../utils/common/common'
// import TopLayover from '../../components/TopLayover/TopLayover'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
import Header from '../../containers/IndividualProject/Header'
import ProjectBody from '../../containers/IndividualProject/ProjectBody'
import Footer from '../../components/Footer/Footer'

function Projects ({project}) {

  useEffect(() => {
    // resize event to when the browser is resized
    resize()
    window.addEventListener('resize', resize)
    
  })

   return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | {project}</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        {/* <TopLayover/> */}
        <div className="main-container">
          <PageDataContext projectsets={project}>
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
    </div>
  )
}

export async function getStaticProps(context){
  let projectSelected = context.params.projects
  return {
    props: { project: projectSelected }
  }
}

export async function getStaticPaths(){
  return {
    paths: [
      { params: {projects: 'music-app'}},
      { params: {projects: 'reservation-app'}},
      { params: {projects: 'electric-bill'}},
      { params: {projects: 'music-player3'}},
      { params: {projects: 'music-player4'}},
      { params: {projects: 'music-player5'}},
    ],
    fallback: false
  }
}


export default Projects