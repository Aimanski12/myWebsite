import React from 'react'
import {Link} from 'react-router-dom'
import {fData} from '../../helpers/common/footerlinks'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {img, im} from '../../helpers/common/common'
import './Footer.css'

function Footer() {

  const setLinks = () => {
    let l = fData.map((f, i )=> {
      return (
        <a className='content-center' 
           href={f.link} key={i}
           rel='noopener noreferrer'
           target='_blank'>
          <img src={img(f.img)} alt={`${im[f.img]} icon`} /></a>
      )
    })
    return l
  }

  setLinks()
  return (
    <footer className="footer content-center">
      <SectionHeader 
        color='gray'
        title={`Let's build your project and make it live.`}
        quote='Take the best that exist and make it better.'
        author='Henry Royce' />
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
            {setLinks()}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
