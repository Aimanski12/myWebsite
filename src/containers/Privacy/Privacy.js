import React, {Fragment, useEffect} from 'react'
import BurgerNav from '../../components/PageHeader/BurgerNav/BurgerNav'
import TopNav from '../../components/PageHeader/TopNav/TopNav'
import SideNav from '../../components/PageHeader/SideNav/SideNav'
import {animatePrivacyPage} from '../../utils/privacy/animateprivacy'
import Footer from '../../components/Footer/Footer'
import {setNavWidth} from '../../utils/privacy/animateprivacy'
import './Privacy.css'

function Privacy(props) {
  useEffect(()=>{
    animatePrivacyPage()
    setNavWidth()
  })
  return (
    <Fragment>
      <header className='header'>
        <div className="navbar">
          <BurgerNav 
            click={(n)=>props.click(n)}
            navs={props.navs}
            page={props.page}/>
          <TopNav 
            page={props.page}
            click={(n)=>props.click(n)}
            color={'#357E7B'}
            navs={props.navs}/>
          <SideNav 
            click={(n)=>props.click(n)}
            navs={props.navs}
            color={'#868383'} />
        </div>
        
        <div className="faceAnim privacy">
          <section className="content-align privacy-policy">
            <h2 className='p-h'>Privacy Policy</h2><br/>
            <p className='p-c'>This Privacy Policy describes how your personal information is collected, used and shared when you visit from <a href="/"> https://www.aimanadlawan.com/</a> (the ‘Site’).</p><br/>
            <h3 className='p-t'>Personal information we collect</h3><br/>
            <p className='p-c'>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address and time zone. Additionally, as you browse the Site, we collect information about the individual web pages that you view and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p><br/>
            <h3 className='p-t'>How do we use your personal information?</h3><br/>
            <p className='p-c'>We use the Device Information that we collect to help us screen for potential risk (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our visitors browse and interact with the Site).</p><br/>
            <h3 className='p-t'>Data retention</h3><br/>
            <p className='p-c'>When you contact us through the contact form, we will maintain the information we receive from you. We will only delete it until we receive a request from you. </p><br/>
            <h3 className='p-t'>Changes</h3><br/>
            <p className='p-c'>We may update this privacy policy from time to time in order to reflect changes to our practices or other operational, legal or regulatory reasons.</p><br/>
            <h4 className='p-date'>Date: February 10, 2020</h4>
          </section>
        </div>
      </header>
      <div className="gap"></div>
      <Footer 
        click={(n)=> props.click(n)}
        navs={props.navs}/>

    </Fragment>
  )
}

export default Privacy
