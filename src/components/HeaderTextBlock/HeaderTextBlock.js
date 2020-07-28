import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'
// import './HeaderTextBlock.css'

class HeaderTextBlock extends Component {
  static contextType = PageData

  render(){
    let data = this.context.headers

    let headerText = data.title.map((text, i)=>{
      return (
        <span className="show-container show" key={i}>
          <div className="reveal"
          style={{color: data.textColors.primary}}>{text}</div>
          <div className="runner"></div>
        </span>
      )
    })

    return (
      <div className="header-wrapper">
        <h1 className="header-text">
          {headerText}
        </h1>

        <p className="sub-reveal-container desc show">
          <span className="sub-reveal"
            style={{color: data.textColors.secondary, fontWeight: data.title[0] ===  'About me.' ? 500 : 600}}>
            {data.shortDesc}
          </span>
        </p>
      </div>
    )
  }
}

export default HeaderTextBlock

