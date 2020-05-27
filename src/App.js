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
import {resize} from './helpers/headers/sideNav'
import {detectIfScrolledUp} from './helpers/headers/sideNav'

function App() {
  const [animationIsDone, setIsDone] = useState(true)
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
    }, 6300)
  })
  return (
    <div className="main">
      <div className="container">
        <Router>
          <Switch>
            <Route  exact path="/">
              { animationIsDone ? 
                <WorkPage /> : <LogoIntroAnimation /> }
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;