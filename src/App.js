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

function App() {
  const [introIsDone, setIsDone] = useState(false)

  const [navs, setNavs] = useState({
    nav: ['Work', 'About', 'Blogs', 'Contact'],
    active: 'Work'
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
    // close the intro animation one timer is done
    setTimeout(()=>{
      setIsDone(true)
    }, 5850) 
    
  })

  const setNav = (n) => {
    setNavs({
      ...navs,
      active: n
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
            <Route path="/about">
              <About 
                click={(n)=>setNav(n)}
                navs={navs}/>
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;