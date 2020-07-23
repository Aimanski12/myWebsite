import React from 'react'
import FooterMenu from '../MenuList/FooterMenu/FooterMenu'
import Copyright from '../FooterItem/CopyRight/CopyRight'
import SocialIcons from '../FooterItem/SocialIcons/SocialIcons'
import './Footer.css'

function Footer(props) {
  return (
    <footer className='content-center footer-wrapper'>
      <span className={`show-container ${props.show ? 'show' : null}`}>
        <div className={`${props.show ? 'reveal' : null}`}>
          <p className='content-center quote-p'>
            <span className='quote'>Take the best that exist and make it better.</span>
            <span className='author'>-&nbsp; Henry Royce &nbsp;-</span>
          </p>
        </div>
        <div className={`${props.show ? 'runner' : null}`}></div>
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
