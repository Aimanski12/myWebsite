import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'
import FooterMenu from '../MenuList/FooterMenu/FooterMenu'
import Copyright from '../FooterItem/CopyRight/CopyRight'
import SocialIcons from '../FooterItem/SocialIcons/SocialIcons'
// import './Footer.css'

class Footer extends Component {
  static contextType = PageData

  render(){
    let data = this.context.quotes


    return (
      <footer className='content-center footer-wrapper'>
        <span className={`show-container ${data.show ? 'show' : null}`}>
          <div className={`${data.show ? 'reveal' : null}`}>
            <p className='content-center quote-p'>
              <span className='quote'>{data.quote}</span>
              <span className='author'>-&nbsp; {data.author} &nbsp;-</span>
            </p>
          </div>
          <div className={`${data.show ? 'runner' : null}`}></div>
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
}

export default Footer;


