import React, {useEffect} from 'react';
import './App.css';
import IntroOne from './containers/Intro/One/Intro'
import IntroTwo from './containers/Intro/Two/Intro'

function App() {

  
  useEffect(() => {
    // console.log('asdf')
  })


  return (
    <div className="mainPage">
      <div className="introPage">
        <IntroOne />
        <IntroTwo />
      </div>
    </div>
  );
}

export default App;
