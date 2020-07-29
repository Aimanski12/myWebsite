import React, {Component} from 'react'
import QrCode from './components/QrCode'
import Desc from './components/Credential'
import {PageData} from '../../utils/context/pageContext'

class Credential extends Component {
  static contextType = PageData

  render(){
    let data = this.context

    let credentials = data.courses.map((course, i)=>{
      return (
        <article className="credential-cont" key={i}>
          <div className="credential-wrapper">
            <QrCode certLink={course.certLink} qrCode={course.qrCode}/>
            <Desc 
              name={course.name}
              school={course.school}
              taken={course.taken}
              date={course.date}/>
          </div>
        </article>
      )
    })

    return (
      <div className="credential-container">
        {credentials}
      </div>
    )
  }
}

export default Credential