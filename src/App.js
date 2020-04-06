import React, {useEffect, useState} from 'react';
import {colorGenerator} from './common/Helpers/common'
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
      <div className="introPage">
        <IntroOne 
          themeColor={color[0]}/>
        <IntroTwo
          themeColor={color} />
      </div>
    </div>
  );
}

export default App;
