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

          <h3 className="p-wrapper head3">Personal information I collect</h3>
          <p className="sub-reveal-container p-desc desc">When you visit the ‘Site’,  I automatically collect certain information about your device, including information about your web browser, IP address and time zone. Additionally, as you browse the ‘Site’, I collect information about the individual web pages that you view and information about how you interact with the ‘Site’. I refer to this automatically-collected information as “Device Information.”</p>

          <h3 className="p-wrapper head3">How do we use your personal information?</h3>
          <p className="sub-reveal-container p-desc desc">I use the Device Information that I collect to help screen for potential risk (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how visitors browse and interact with the ‘Site’).</p>

          <h3 className="p-wrapper head3">Do not track</h3>
          <p className="sub-reveal-container p-desc desc">I do not alter any data collection and usage when I see a ‘Do Not Track’ signal from your browser. This is to protect the users privacy and to ensure no privacy is breached. </p>

          <h3 className="p-wrapper head3">How I share your personal information?</h3>
          <p className="sub-reveal-container p-desc desc">I only use your personal information to gather analytics about how users interact with the ‘Site’ and to response to your inquiries from the contacts page. moreover, I do not share any of your information to other third parties except only when I comply to applicable laws and regulations, search warrant or other lawful request for information I receive.</p>

          <h3 className="p-wrapper head3">Data retention</h3>
          <p className="sub-reveal-container p-desc desc">When you contact me through the message me form from the contacts page, I will maintain the information I receive from you. I will only delete it until I receive a request from you. </p>

          <h3 className="p-wrapper head3">Changes</h3>
          <p className="sub-reveal-container p-desc desc">I may update this privacy policy from time to time in order to reflect changes to my practices or other operational, legal or regulatory reasons.</p>

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
