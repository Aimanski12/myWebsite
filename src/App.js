import React, {useEffect} from 'react';
import './App.css';
// import IntroOne from './components/Intro/One/Intro'
import IntroTwo from './components/Intro/Two/Intro'

function App() {

  
  useEffect(() => {
    // console.log('asdf')
  })


  return (
    <div className="app-wall">
      {/* <IntroOne /> */}
      <IntroTwo />
    </div>
  );
}

export default App;
