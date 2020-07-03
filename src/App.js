import React, {useEffect, useState} from 'react';
import './App.css';
import {resize} from './utils/common/common'
import Navbar from './components/Navbar/Navbar'
import TopLayOver from './components/TopLayover/TopLayover'
import Menu from './components/MenuContainer/MenuContainer'

function App() {

  const menu = ['home', 'about', 'projects', 'contact']
  const [isSeen, setIsSeen] = useState(false)

  const [activeRoute, setActive] = useState('home')


  useEffect(()=>{
    resize()
  })
  window.addEventListener('resize', resize)

  return (
    <div className="container">
      <TopLayOver isSeen={isSeen}/>

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
