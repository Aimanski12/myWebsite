import React, {useContext} from 'react'
import {PageData} from '../../utils/context/pageContext'
import FooterMenu from '../MenuList/FooterMenu/FooterMenu'
import Copyright from '../FooterItem/CopyRight/CopyRight'
import SocialIcons from '../FooterItem/SocialIcons/SocialIcons'

function Footer () {
  const {quotes} = useContext(PageData)

  return (
    <footer className='content-center footer-wrapper'>
      <span className={`show-container ${quotes.show ? 'show' : null}`}>
        <div className={`${quotes.show ? 'reveal' : null}`}>
          <p className='content-center quote-p'>
            <span className='quote'>{quotes.quote}</span>
            <span className='author'>-&nbsp; {quotes.author} &nbsp;-</span>
          </p>
        </div>
        <div className={`${quotes.show ? 'runner' : null}`}></div>
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


