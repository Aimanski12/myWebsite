import React from 'react'
import {Link} from 'react-router-dom'
import {fData} from '../../utils/common/footerlinks'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import {img, im} from '../../utils/common/common'
import './Footer.css'

function Footer(props) {

  const setLinks = () => {
    let l = fData.map((f, i )=> {
      return (
        <a className='content-center' 
          href={f.link} key={i}
          rel='noopener noreferrer' target='_blank'>
          <img src={img(f.img)} alt={`${im[f.img]} icon`} /></a> )
    })
    return l
  }

 const navs = () => {
    let a = props.navs
    let c = a.nav.map((b, i)=>{
        return (<Link key={i}
                    to={b === 'Work' ? '/' : `/${b}`}
                    onClick={()=> props.click(b)}>{b}</Link>)
      })
    return c
  }
  
  return (
    <footer className="footer content-center">
      <SectionHeader 
        color='gray'
        title={`Let's build your project and make it live.`}
        quote='Take the best that exist and make it better.'
        author='Henry Royce' />
      <div className="footer-nav-container content-align content-center">
        <nav className='footer-nav content-center'>
          {navs()}
        </nav>
        <div className="footer-blocks content-center content-align">
          <p>&copy; <span className='green'>Aiman Adlawan</span>. All rights reserved. <Link to="/privacy-policy" target='_blank'><span className='orange'>Privacy Policy</span></Link>.</p>
          <nav className='footer-nav-btn content-center'>
            {setLinks()}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
