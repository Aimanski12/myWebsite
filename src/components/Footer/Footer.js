import React from 'react'
import FooterMenu from '../MenuList/FooterMenu/FooterMenu'
import Copyright from '../FooterItem/CopyRight/CopyRight'
import SocialIcons from '../FooterItem/SocialIcons/SocialIcons'
import './Footer.css'

function Footer() {
  return (
    <footer className='content-center footer-wrapper'>
      <span className='show-container show'>
        <div className='reveal'>
          <p className='content-center quote-p'>
            <span className='quote'>Take the best that exist and make it better.</span>
            <span className='author'>-&nbsp; Henry Royce &nbsp;-</span>
          </p>
        </div>
        <div className='runner'></div>
      </span>

      <FooterMenu />

      <Copyright fromTop={false} pColor='#A7A7A7'/>

      <div className="footer-socialIcons">
        <SocialIcons 
          container='footer-navicons'
          colorMode='#116864' />
      </div>
    </footer>
  )
}

export default Footer;
