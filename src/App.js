import React, {useEffect} from 'react';
import './App.css';
import {resize} from './utils/common/common'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/MenuContainer/MenuContainer'

function App() {

  useEffect(()=>{
    resize()
  })
  window.addEventListener('resize', resize)

  return (
    <div className="container">

      <div className="main-container">

        <Navbar />        
        <Menu />

        

        <div className="header"></div>
        <div className="div one"></div>
        <div className="div two"></div>
      </div>      
    </div>
  );
}

export default App;
