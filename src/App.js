import React, {useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import HeaderText from './components/Header/Header'

import SingleFeature from './components/Single-Feature/Single-Feature'
import AboutMe from './components/About_Me/About_Me'

import app_icon from './images/logo/app-icon.svg'
import laptop_icon from './images/logo/laptop-icon.svg'
import camera_icon from './images/logo/camera-icon.svg'


import Button from './components/Button/Button'


const App = () => {

  useEffect(() => {
    window.addEventListener('scroll', (e)=>{
      const w = window.innerWidth
      const sectionProj = document.querySelector('.project-features')

      // console.log(e.path[1].pageYOffset)
      if (w > 900 && e.path[1].pageYOffset > 1180){
        sectionProj.classList.add('project-features-scroll')
      }
      if (w > 900 && e.path[1].pageYOffset < 1180) {
        sectionProj.classList.remove('project-features-scroll')
      }
      
    })
  })
  


  return (
    <div className="App">
      <div className="main">

        {/* header */}
        <div className="home-page">
          <Navbar />
          <HeaderText />
          <div className="bottom-header"></div>
        </div>
        <SingleFeature />
        <AboutMe />

        <div className="section-projects" >
          <div className="project-features project-features-scroll">
            <div className="features">
              <h3>Websites</h3>
              <img src={laptop_icon} alt=""/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum animi cupiditate qui a laborum voluptas culpa, atque laudantium optio natus enim tenetur!</p>
            </div>
            <div className="features">
              <h3>Apps</h3>
              <img src={app_icon} alt=""/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum animi cupiditate qui a laborum voluptas culpa, atque laudantium optio natus enim tenetur!</p>
            </div>
            <div className="features">
              <h3>Photography</h3>
              <img src={camera_icon} alt=""/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut earum animi cupiditate qui a laborum voluptas culpa, atque laudantium optio natus enim tenetur!</p>
            </div>
          </div>
          <Button text={'View More'}/>

        </div>

        <div className="landing2">

        </div>
      </div>
    </div>
  );
}

export default App;


