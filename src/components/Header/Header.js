import React, {Component} from 'react'
import ScrollBtn from './ScrollBtn/ScrollBtn'
import SocialIcons from './SocialIcon/SocialIcon'
import HeaderText from '../HeaderTextBlock/HeaderTextBlock'
import Subparagraphs from '../SubParagraphs/Subparagraphs'
import Credentials from '../Credential/Credential'
import Hero from './Hero/Hero'

// import {imageUrl} from '../../utils/common/common'
// import {connect} from 'react-redux'
// import './Header.css'

// function Header(props) {
  // const PageData = React.createContext({})

import {ThemeContext} from '../../utils/common/tex'
class Header extends Component {

  // static contextType = PageData


    componentDidMount () {
      let val = this.context
      console.log(val)
      
    }


  render () {
    
    let data = this.props.data
    // console.log(data)
    
    let headerContent = (
      <div className='top-background-container'
      style={{background: 
        `url('/images/${data.background}.png') repeat center top`}} >



      <article className='header-text-block'>
        <div className="header-title-block">

          {data.withImage.isTrue ? 
            <Hero data={data.withImage}/> : null }

            <HeaderText data={data} />


          {data.subParagraph.isTrue ? 
            <Subparagraphs data={data} /> : null }

          {data.withCredentials.isTrue ? 
            <Credentials data={data} /> : null }

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
      style={{'background': data.colormodes.close.back}}>
      <div className="top-container">
        {headerContent}
      </div>
    </header>
  )
}
}
// const mapStateToProps = (state) => {
//   return {
//     colorModes: state.state.colorModes,
//     headerPageData: state.state.pageData
//   }
// }

// export default connect(mapStateToProps)(Header)
Header.contextType = ThemeContext

export default Header

