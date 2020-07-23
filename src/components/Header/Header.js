import React from 'react'
import {imageUrl} from '../../utils/common/common'
import ScrollBtn from './ScrollBtn/ScrollBtn'
import SocialIcons from './SocialIcon/SocialIcon'
import HeaderText from '../HeaderTextBlock/HeaderTextBlock'
import Subparagraphs from '../SubParagraphs/Subparagraphs'
import Credentials from '../../containers/Credentials/Credential/Credential'
import Hero from './Hero/Hero'

import {connect} from 'react-redux'
import './Header.css'

function Header(props) {
  let data = props.headerPageData
  
  let headerContent = data ? (
    <div className='top-background-container'
      style={{background: 
        `url('${imageUrl(data.headers.background, 'png')}') repeat center top`}}>



      <article className='header-text-block'>
        <div className="header-title-block">

          {data.headers.withImage.isTrue ? 
            <Hero data={data.headers.withImage}/> : null }

            <HeaderText data={data.headers} />


          {data.headers.subParagraph.isTrue ? 
            <Subparagraphs data={data.headers} /> : null }

          {data.headers.withCredentials.isTrue ? 
            <Credentials data={data.headers} /> : null }

        </div>
      </article>

      
      {/* render social icons */}
      {data.headers.withSocials ? <SocialIcons /> : null }

      {/* render scroll button */}
      {data.headers.withScrollButton.isTrue ? 
        <ScrollBtn data={data.headers.withScrollButton}/> : null}

    </div>
  ) : null
  return (
    <header className='top' 
      style={{'background': props.colorModes.close.back}}>
      <div className="top-container">
        {headerContent}
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

export default connect(mapStateToProps)(Header)

