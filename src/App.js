import React, {useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import HeaderText from './components/Header/Header'

import SingleFeature from './components/Single-Feature/Single-Feature'
import AboutMe from './components/About_Me/About_Me'

import SectionProjects from './components/Section-Projects/Section-Projects'


// import Button from './components/Button/Button'
import photo from './images/photos/photo.png'

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

        <SectionProjects />


        <div className="section-blog">
          <div className="section-blog-container">
            
            <div className="section-blog-item">
              <div className="blog-image">
                <img src="" alt=""/>
              </div>
              <div className="blog-desc">
                <h2>Sample Text Is Here</h2>
              </div>
            </div>

            <div className="section-blog-item">
              <div className="blog-image">
                <img src="" alt=""/>
              </div>
              <div className="blog-desc">
                <h2>Sample Text Is Here</h2>
              </div>
            </div>

            <div className="section-blog-item">
              <div className="blog-image">
                <img src="" alt=""/>
              </div>
              <div className="blog-desc">
                <h2>Sample Text Is Here</h2>
              </div>
            </div>

            <div className="section-blog-item">
              <div className="blog-image">
                <img src="" alt=""/>
              </div>
              <div className="blog-desc">
                <h2>Sample Text Is Here</h2>
              </div>
            </div>

            <div className="section-blog-item">
              <div className="blog-image">
                <img src="" alt=""/>
              </div>
              <div className="blog-desc">
                <h2>Sample Text Is Here</h2>
              </div>
            </div>

            <div className="section-blog-item">
              <div className="blog-image">
                <img src="" alt=""/>
              </div>
              <div className="blog-desc">
                <h2>Sample Text Is Here</h2>
              </div>
            </div>

          </div>
        </div>



        <div className="landing2">

        </div>
      </div>
    </div>
  );
}

export default App;


