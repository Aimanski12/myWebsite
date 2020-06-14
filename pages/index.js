import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import WorkPage from '../containers/WorkPage/WorkPage'
// 
import LogoIntroAnimation from '../components/LogoIntro/LogoIntro'
import {resize} from '../utils/work/headers/sideNav'
import {detectIfScrolledUp} from '../utils/work/headers/sideNav'
import {ckStor, ckPath, stStor, visitor} from '../utils/app/app'


function App() {
  const [introIsDone, setIsDone] = useState(false)

  const [navs, setNavs] = useState({
    nav: ['home', 'about', 'blogs', 'contact'],
    active: 'home',
    loaded: false
  })

  useEffect(()=>{
    // scroll event listener
    window.addEventListener('scroll', (e) => {
      detectIfScrolledUp(document, e)
    })

    // check if window is resized
    window.addEventListener('resize', () => {
      resize(document)
    })
    
    // check if storage is empty
    !ckStor() ? stTrue() : stDone(true)

    // set navs active 
    if(!navs.loaded){
      visitor()
      setNav(ckPath(navs))
    }
  })

  const stDone = () =>{ setIsDone(true) }
  
  // set isdone after animation finish
  const stTrue = () =>{
    setTimeout(()=>{ 
      setIsDone(true)
      stStor()
    }, 5850) 
  }

  // update state
  const setNav = (n) => {
    setNavs({
      ...navs,
      active: n,
      loaded: true
    })
  }

  return (
    <div className="main">
      <div className="container">
        <Head>
          <title>Aiman Adlawan | Official Website</title>
          <link rel="icon" href="/common/aiman-website-logo.png" />
          <link rel="canonical" href="https://www.aimanadlawan.com"/>
          <meta property="og:site_name" content="Aimanadlawan.com"/>
          <meta property="og:title" content="Aiman Adlawan | Official Website"/>
          <meta property="og:url" content="https://www.aimanadlawan.com"/>
          <meta property="og:description" content="This is the official website of Aiman Adlawan. The filipino, pinoy web/app dveloper. You can follow all his projects and blogs here."/>
          <meta property="og:type" content="website"/>
        <meta property="og:image" content="/common/aiman-website-logo.png"/>

          <meta itemProp="name" content="Aiman Adlawan | Official Website"/>
          <meta itemProp="url" content="https://www.aimanadlawan.com"/>
          <meta itemProp="description" content="This is the official website of Aiman Adlawan. The filipino, pinoy web/app dveloper. You can follow all his projects and blogs here."/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="Aiman Adlawan | Official Website"/>
          <meta name="twitter:url" content="https://www.aimanadlawan.com"/>
          <meta name="twitter:description" content="This is the official website of Aiman Adlawan. The filipino, pinoy web/app dveloper. You can follow all his projects and blogs here."/>
          <meta name="twitter:image" content="/common/aiman-website-logo.png"/>
          <meta name="description" content="This is the official website of Aiman Adlawan. The filipino, pinoy web/app dveloper. You can follow all his projects and blogs here." />
          <meta name="keywords" content="aiman adlawan, aiman, adlawan, pinoy app developer, graphic design, websites, graphics, illustration, freelance, developer" />
          <meta name="description" content="This is the official website of Aiman Adlawan. You can follow all his projects and blogs here."/>
          <meta name="author" content="Aiman Adlawan" />
          <meta itemProp="thumbnailUrl" content="/common/aiman-website-logo.png"/>
          <meta itemProp="image" content="/common/aiman-website-logo.png"/>
          <link rel="image_src" href="/common/aiman-website-logo.png" />
        </Head>
        <WorkPage 
        click={(n)=>setNav(n)}
        navs={navs}/> 


        {/* { introIsDone ? 
          : <LogoIntroAnimation /> } */}
      </div>
    </div>
  )
}

export default App;