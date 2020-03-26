import React, {useEffect} from 'react';
import './App.css';
import Intro from './components/Intro/Intro'

function App() {

  
  useEffect(() => {
    console.log('asdf')
  })


  return (
    <div className="app-wall">
      <Intro />
    </div>
  );
}

export default App;
