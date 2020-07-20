import React from 'react'
import HeaderText from '../../../components/HeaderTextBlock/HeaderTextBlock'
import ShortProject from '../../../components/ShortProjectView/ShortProjectView'
import {connect} from 'react-redux'
import  './ProjectHeader.css'


function ProjectHeader(props) {
  let data = props.pageData
  // console.log(data)

  let headerText = data ? <HeaderText data={data.headers}/> : null

  return (
    <header className='top' 
      style={{'background': props.colorModes.close.back}}>
      <div className="top-container">

        <div className="project-header-wrapper">
          <div className='project-text-header'>
            {headerText}

          </div>
        </div>
        
        <ShortProject />

      </div>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    colorModes: state.state.colorModes,
    pageData: state.state.pageData
  }
}

export default connect(mapStateToProps)(ProjectHeader)
