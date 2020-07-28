import React, {Component} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import NotFound from '../containers/NotFound/NotFound'
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
      </div>
    )
  }
}

export default Home