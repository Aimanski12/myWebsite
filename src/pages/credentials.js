import React, {useEffect} from 'react'
import Head from 'next/head'
// import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {PageDataContext} from '../utils/context/pageContext'



function Credentials () {

  useEffect(() =>{
    // resize event to when the browser is resized
    resize()
    window.addEventListener('resize', resize)
  })

  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Credentials</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        {/* <TopLayover/> */}
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
    </div>
  )
}

export default Credentials