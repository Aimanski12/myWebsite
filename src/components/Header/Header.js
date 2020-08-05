import React, {useContext} from 'react'
import ScrollBtn from './ScrollBtn/ScrollBtn'
import SocialIcons from './SocialIcon/SocialIcon'
import HeaderText from '../HeaderTextBlock/HeaderTextBlock'
import Subparagraphs from '../SubParagraphs/Subparagraphs'
import Credentials from '../../containers/Credential/Credential'
import Hero from './Hero/Hero'
import {PageData} from '../../utils/context/pageContext'

function Header () {
  const {headers} = useContext(PageData)
    
  let headerContent = (
    <div className='top-background-container'
      style={{background: 
      `url('/images/${headers.background}.png') repeat center top`}} >

      <article className='header-text-block'>
        <div className="header-title-block">
          {headers.withImage.isTrue ? <Hero/> : null }
          <HeaderText />
          {headers.subParagraph.isTrue ? <Subparagraphs /> : null }
          {headers.withCredentials.isTrue ? <Credentials /> : null }
        </div>
      </article>
      
      {/* render social icons */}
      {headers.withSocials ? <SocialIcons /> : null }

      {/* render scroll button */}
      {headers.withScrollButton.isTrue ? 
      <ScrollBtn data={headers.withScrollButton}/> : null}
    </div>
  )

  return (
    <header className='top' 
      style={{'background': headers.colormodes.close.background}}>
      <div className="top-container">
        {headerContent}
      </div>
    </header>
  )
}

export default Header

