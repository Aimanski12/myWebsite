import React, {useEffect} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import HeaderText from './components/Header/Header'

import SingleFeature from './components/Single-Feature/Single-Feature'
import AboutMe from './components/About_Me/About_Me'

import SectionProjects from './components/Section-Projects/Section-Projects'

import SectionBlog from './components/Blog/Blog'

import facebook from './images/logo/social/facebook-follow.svg'
import github from './images/logo/social/github-follow.svg'
import youtube from './images/logo/social/youtube-follow.svg'
import linkedin from './images/logo/social/linkedin-follow.svg'
import instagram from './images/logo/social/instagram-follow.svg'

const App = () => {

  useEffect(() => {
    // 
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

        <SectionBlog />
 

        <footer className='footer'>
          <div className="footer-container">

             
            <div className="footer-social">
              <img src={facebook} alt=""/>
              <img src={github} alt=""/>
              <img src={youtube} alt=""/>
              <img src={linkedin} alt=""/>
              <img src={instagram} alt=""/>
            </div>

            <nav className='footer-nav' data-content-field='navigation'>
              <div className='footer-nav-group'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Blogs</a>
                <a href="">Contacts</a>
              </div>
            </nav>

            <div className='footer-block-content'>
              <p className='gray'>This website is currently on development stage.</p>
              <p>© 2019 <span>aimanadlawan.com</span>.&nbsp;All rights reserved</p>
            </div>

          </div>
        </footer>

        <div className="landing2">

        </div>
      </div>
    </div>
  );
}

export default App;



