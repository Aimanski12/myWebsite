import React, {Component} from 'react'
import {PageData} from '../../utils/context/pageContext'
import TitleBlock from './components/TitleBlock'
import Paragraphs from './components/Paragraphs'
import Data from './components/Date'

class Privacy extends Component {
  static contextType = PageData

  render(){
    let data = this.context.headers

    return (
      <header className='top' 
        style={{'background': data.colormodes.close.background}}>
        <div className="top-container">
          <article className='privacy-container'>
            <TitleBlock 
              title={data.title}
              desc={data.shortDesc}/>
            <Paragraphs paragraphs={data.paragraphs}/>
            <Data date={data.date}/>
          </article>
        </div>
      </header>
    )
  }
}

export default Privacy
