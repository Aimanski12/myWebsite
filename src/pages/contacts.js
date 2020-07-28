import React, {Component} from 'react'
import Head from 'next/head'
// import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import Message from '../containers/Contacts/Message'
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
          <title>Aiman Adlawan | Contact Me</title>
          <link rel="icon" href="/images/brand-icon-logo.ico" />
        </Head>

        <div className="container">
          {/* <TopLayover/> */}
          <div className="main-container">
            <PageDataContext pagesets={'contacts'}>
              <Navbar />       
              <Menu />
              <main className='main'>
                <Header/>
                <Message />
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