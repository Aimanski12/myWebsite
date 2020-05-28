import React from 'react'
import {Link} from 'react-router-dom'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {findBackground} from '../../helpers/common/common'
import './Footer.css'


function Footer() {

  return (
     <footer className="footer content-center">

        <SectionHeader 
          color='gray'
          title={`Let's build your project and make it live.`}
          quote='Take the best that exist and make it better.'
          author='Hernry Royce' />

        <div className="footer-nav-container content-align content-center">


          <nav className='footer-nav content-center'>
            <Link to='/'>Work</Link>
            <Link to='/about'>About</Link>
            <Link to='/'>Blogs</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
          
          <div className="footer-blocks content-center content-align">
            <p>&copy; <span className='green'>Aiman Adlawan</span>. All rights reserved. <a href="/"><span className='orange'>Privacy Policy</span></a>.</p>
            <nav className='footer-nav-btn content-center'>
              <a className='content-center' href="/">
                <img src={findBackground('beh')} alt="" /></a>
              <a className='content-center' href="/">
                <img src={findBackground('dri')} alt="" /></a>
              <a className='content-center' href="/">
                <img src={findBackground('lin')} alt="" /></a>
              <a className='content-center' href="/">
                <img src={findBackground('goo')} alt="" /></a>
              <a className='content-center' href="/">
                <img src={findBackground('twi')} alt="" /></a>
            </nav>
          </div>



        </div>

        

      </footer>
  )
}

export default Footer
