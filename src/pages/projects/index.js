import React, {Component} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
// import TopLayover from '../components/TopLayover/TopLayover'
import ProjectHeader from '../../containers/Projects/ProjectHeader/ProjectHeader'
import OtherProjects from '../../containers/Projects/OtherProjects/OtherProjects'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import {PageDataContext} from '../../utils/context/pageContext'



class Home extends Component {

  componentDidMount(){
    // resize event to when the browser is resized
    resize()
    window.addEventListener('resize', resize)
  }

  render(){

    return (
      <div className="container">
        <Head>
          <title>Aiman Adlawan | Projects</title>
          <link rel="icon" href="/images/brand-icon-logo.ico" />
        </Head>

        <div className="container">
          {/* <TopLayover/> */}
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
      </div>
    )
  }
}

export default Home