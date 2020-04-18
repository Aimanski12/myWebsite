import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {colorGenerator} from './common/HelperScripts/colorGenerator'
import {domSeparator} from './common/HelperScripts/domSeparator'

import './App.css';
import MenuOverlay from './containers/MenuOverlay/MenuOverLay';
import IndexPage from './containers/Index/Index'

function App() {

  const [color, setColor] = useState([])
  const [introAnim, setIntroAnim] = useState(false)

  const [pages, pagesUpdate] = useState({
    pages: ['home', 'about', 'projects', 'contacts']
  })

  useEffect(() => {
    if(color <= 0) {
      setColor(colorGenerator())
    }
  }, [color])
   

  const elCollector = (x, y, event) => {
    domSeparator(x, y, event, color)
    setIntroAnim(true)
  }

  const a = navigator.userAgent
  console.log(a)

  return (
    <div className="mainPage">
      <div className="mainPageContainer" >

        <MenuOverlay
          closeMenu={(x, y)=>elCollector(x, y, 'closeMenu')}
          introAnim={introAnim}
          pages={pages}/>


        <Router>
          <Switch>

            {/* home route */}
            <Route exact path='/'>
              <IndexPage
                 themeColor={color}
                 animOvlay={(x, y, event)=>elCollector(x, y, event)} />
            </Route>
            
            {/* this is the about route */}
            <Route path='/about'></Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}


export default App;
