import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import WorkPage from './containers/WorkPage/WorkPage'
import About from './containers/AboutPage/AboutPage'
import Contact from './containers/ContactPage/ContactPage'
import LogoIntroAnimation from './components/LogoIntro/LogoIntro'
import {resize} from './helpers/work/headers/sideNav'
import {detectIfScrolledUp} from './helpers/work/headers/sideNav'
import {ckStor, ckPath} from './helpers/app/app'


function App() {
  const [introIsDone, setIsDone] = useState(false)

  const [navs, setNavs] = useState({
    nav: ['Work', 'About', 'Blogs', 'Contact'],
    active: 'Work',
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

    if(!navs.loaded){
      setNav(ckPath(navs))
    }
  })

  const stDone = () =>{ setIsDone(true) }
  
  // set isdone after animation finish
  const stTrue = () =>{
    setTimeout(()=>{ 
      setIsDone(true)
    }, 5850) 
  }

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
        <Router>
          <Switch>
            <Route  exact path="/">
              { introIsDone ? 
                <WorkPage 
                  click={(n)=>setNav(n)}
                  navs={navs}/> : <LogoIntroAnimation /> }
            </Route>
            <Route path="/About">
              <About 
                click={(n)=>setNav(n)}
                navs={navs}/>
            </Route>
            <Route path="/Contact">
              <Contact 
                click={(n)=>setNav(n)}
                navs={navs}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;