import React, {Component} from 'react'
import {PageData} from '../../../utils/context/pageContext'
import HeaderText from '../../../components/HeaderTextBlock/HeaderTextBlock'
import ShortProject from '../../../components/ShortProjectView/ShortProjectView'

class ProjectHeader extends Component {
  static contextType = PageData
  
  render (){
    let data = this.context.headers
    let headerText = <HeaderText data={data}/>

    return (
      <header className='top' 
        style={{'background': data.colormodes.close.background}}>
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
}

export default ProjectHeader

