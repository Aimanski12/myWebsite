import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';


import WorkPage from './containers/WorkPage/WorkPage'
import About from './containers/AboutPage/AboutPage'
import Contact from './containers/ContactPage/ContactPage'

function App() {

useEffect(()=>{
  // run()
})

  return (
    <div className="main">
      <div className="container">


    <Router>
      <Switch>
        <Route  exact path="/">
          <WorkPage />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
      
      
          
      
      
      
      
          {/* <div className="div"></div>
          <div className="div"></div> */}
    
    
    
    </div>
  </div>
    
  );
}

export default App;
