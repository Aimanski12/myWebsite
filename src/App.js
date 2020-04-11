import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {colorGenerator} from './common/Helpers/colorGenerator'
import './App.css';
import IntroOne from './containers/Intro/One/Intro'
import IntroTwo from './containers/Intro/Two/Intro'

function App() {

  const [color, setColor] = useState([])

  useEffect(() => {
    if(color <= 0) {
      setColor(colorGenerator())
    }
  }, [color])


  return (
    <div className="mainPage">
      <div className="mainPageContainer">
        <Router>
          <Switch>
            <Route exact path='/'>
              <div className="introPage">
                <IntroOne 
                  themeColor={color[0]}/>
                <IntroTwo
                  themeColor={color} />
              </div>
            </Route>
            <Route path='/home'>

            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
