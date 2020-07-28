import React, {Component} from 'react'
import ScrollBtn from './ScrollBtn/ScrollBtn'
import SocialIcons from './SocialIcon/SocialIcon'
import HeaderText from '../HeaderTextBlock/HeaderTextBlock'
import Subparagraphs from '../SubParagraphs/Subparagraphs'
import Credentials from '../../containers/Credential/Credential'
import Hero from './Hero/Hero'

// import {imageUrl} from '../../utils/common/common'
// import {connect} from 'react-redux'
// import './Header.css'

// function Header(props) {
  // const PageData = React.createContext({})

import {PageData} from '../../utils/context/pageContext'
class Header extends Component {

  static contextType = PageData

  render () {
    const data = this.context.headers
    
    let headerContent = (
      <div className='top-background-container'
        style={{background: 
        `url('/images/${data.background}.png') repeat center top`}} >

      <article className='header-text-block'>
        <div className="header-title-block">

          {data.withImage.isTrue ? <Hero/> : null }

          <HeaderText />

          {data.subParagraph.isTrue ? <Subparagraphs /> : null }

          {data.withCredentials.isTrue ? <Credentials /> : null }

        </div>
      </article>

      
      {/* render social icons */}
        {data.withSocials ? <SocialIcons /> : null }

      {/* render scroll button */}
      {data.withScrollButton.isTrue ? 
        <ScrollBtn data={data.withScrollButton}/> : null}

      </div>
    )
    return (
      <header className='top' 
        style={{'background': data.colormodes.close.background}}>
        <div className="top-container">
          {headerContent}
        </div>
      </header>
    )
  }
}

export default Header

