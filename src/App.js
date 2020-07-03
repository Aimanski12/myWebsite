import React, {useEffect, useState} from 'react';
import './App.css';
import {resize} from './utils/common/common'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/MenuContainer/MenuContainer'

function App() {

  const menu = ['home', 'about', 'projects', 'contact']

  const [activeRoute, useActive] = useState('home')

  useEffect(()=>{
    resize()
  })
  window.addEventListener('resize', resize)

  return (
    <div className="container">

      <div className="main-container">

        <Navbar 
          activeRoute={activeRoute} />        
        <Menu 
          menuList={menu}
          activeRoute={activeRoute} />

        

        <div className="header"></div>
        <div className="div one"></div>
        <div className="div two"></div>
      </div>      
    </div>
  );
}

export default App;
