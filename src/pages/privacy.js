import React, {Component} from 'react'
import Head from 'next/head'
// import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import PrivacyPolicy from '../containers/Privacy/Privacy'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {PageDataContext} from '../utils/context/pageContext'



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
          <title>Aiman Adlawan | Privacy Policy</title>
          <link rel="icon" href="/images/brand-icon-logo.ico" />
        </Head>

        <div className="container">
          {/* <TopLayover/> */}
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
      </div>
    )
  }
}

export default Home