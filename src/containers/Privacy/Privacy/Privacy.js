import React from 'react'
import {connect} from 'react-redux'
import './Privacy.css'


function Privacy(props) {
  return (
    <header className='top' 
      style={{'background': props.colorModes.close.back}}>
      <div className="top-container">
        
        
        
        <article className='privacy-container'>
          <h1 className="header-text">Privacy Policy</h1>

          <p className="sub-reveal-container desc ">
            This Privacy Policy describes how your personal information is collected, used and shared when you visit from <span className='thesite'>https://www.aimanadlawan.com/</span> (the ‘Site’).
          </p>

          <h3 className="p-wrapper head3">Personal information we collect</h3>
          <p className="sub-reveal-container p-desc desc show">When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address and time zone. Additionally, as you browse the Site, we collect information about the individual web pages that you view and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>

          <h3 className="p-wrapper head3">How do we use your personal information?</h3>
          <p className="sub-reveal-container p-desc desc show">We use the Device Information that we collect to help us screen for potential risk (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our visitors browse and interact with the Site).</p>

          <h3 className="p-wrapper head3">Do not track</h3>
          <p className="sub-reveal-container p-desc desc show">We do not alter any data collection and usage when we see a ‘Do Not Track’ signal from your browser. This is to protect the users privacy and to ensure no privacy is breached. </p>

          <h3 className="p-wrapper head3">How we share your personal information?</h3>
          <p className="sub-reveal-container p-desc desc show">We only use your personal information to gather analytics about how users interact with the website and to response to your inquiries from the contacts page. moreover, we do not share any of your information to other third parties except only when we comply to applicable laws and regulations, search warrant or other lawful request for information we receive.</p>

          <h3 className="p-wrapper head3">Data retention</h3>
          <p className="sub-reveal-container p-desc desc show">When you contact us through the message me form from the contacts page, we will maintain the information we receive from you. We will only delete it until we receive a request from you. </p>

          <h3 className="p-wrapper head3">Changes</h3>
          <p className="sub-reveal-container p-desc desc show">We may update this privacy policy from time to time in order to reflect changes to our practices or other operational, legal or regulatory reasons.</p>


          <h4 className="p-wrapper head4">Date: February 10, 2020</h4>

        </article>
        
      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    colorModes: state.state.colorModes,
    headerPageData: state.state.pageData
  }
}

export default connect(mapStateToProps)(Privacy)
