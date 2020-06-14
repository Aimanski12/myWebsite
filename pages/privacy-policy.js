import React, {useEffect, useState} from 'react';
import Privacy from '../containers/Privacy/Privacy'
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
        { introIsDone ? 
          <Privacy
            click={(n)=>setNav(n)}
            navs={navs}/> : <LogoIntroAnimation /> }
      </div>
    </div>
  )
}

export default App;