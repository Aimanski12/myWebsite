import React, {Fragment, useEffect} from 'react';
import './Navbar.css'
import text_logo from '../../images/logo/aiman-logo-text.svg'
import logo from '../../images/logo/aiman-logo.svg'
import btn from '../../images/logo/btn-toggle.svg'

const Navbar = () => {
  useEffect(()=>{
    window.addEventListener('scroll', (e)=>{
      const nav = document.querySelector('.navbars')
      nav.firstChild.classList.remove('show-navbar')

    const navbar = document.querySelector('.navbar-section')
      // if (window.innerWidth <= 768 && e.path[1].pageYOffset > 70) {
      //   navbar.classList.add('navbar-smallmedia')
      // }
      if (window.innerWidth > 992 && e.path[1].pageYOffset > 70) {
        navbar.classList.add('navbar-remove')
      }
      if (window.innerWidth > 992 && e.path[1].pageYOffset > 250) {
        navbar.classList.remove('navbar-remove')
        navbar.classList.add('navbar-scrolled')
      }
      if (window.innerWidth > 992 && e.path[1].pageYOffset < 70) {
        navbar.classList.remove('navbar-scrolled')
        navbar.classList.remove('navbar-remove')
      }
    })
  })


  return (
    <Fragment>
      <div className="navbar-section">
        <div className="logo">
          <img src={logo} alt="aiman logo" className='logo-image'/>
          <img src={text_logo} alt="aiman logo text" className='logo-text'/>
        </div>                      
        <div className="btnToggle">
          <img 
            src={btn} 
            alt="btn-toogle" 
            onClick={()=>{
              const nav = document.querySelector('.navbars')
              nav.firstChild.classList.toggle('show-navbar')
            }}/>
        </div>
        <div className="navbars">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Contacts</a></li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar