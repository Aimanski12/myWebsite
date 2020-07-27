import React, {useEffect} from 'react'
import Head from 'next/head'
// import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import {findData} from '../utils/data/index'
import {resize} from '../utils/common/common'


import { ThemeContext} from '../utils/common/tex'


function Home({pageData, projectLists}) {

  useEffect(() =>{
    // resize event to when the browser is resized
    resize()
    window.addEventListener('resize', resize)


  })
  
  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" href="/images/images/brand-icon-logo.ico" />
      </Head>



      <div className="container">
        {/* <TopLayover/> */}
        <div className="main-container">
          <Navbar data={pageData.headers}/>       
          <Menu />

          

          <main className='main'>
            <ThemeContext.Provider value={pageData}>
              <Header data={pageData.headers}/>
            </ThemeContext.Provider>
            
          </main>
        </div>      
      </div>




    </div>
  )
}


Home.getInitialProps = () => {
  const pageData = findData('home')
  const projectLists = findData('projectlists')
  return {pageData, projectLists}
}

// Home.contextType = PageData

export default Home