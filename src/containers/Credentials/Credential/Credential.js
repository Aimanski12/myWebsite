import React from 'react'
import QrCode from './components/QrCode'
import Desc from './components/Credential'
import {connect} from 'react-redux'
import './Credential.css'

function Credential(props) {

  let data = props.pageData

  let credentials = data ? data.courses.map((course, i)=>{
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
  }) : null

  return (
    <div className="credential-container">
      {credentials}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pageData: state.state.pageData
  }
}

export default connect(mapStateToProps)(Credential)
