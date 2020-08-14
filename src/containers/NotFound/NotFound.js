import React, {Component} from 'react'
import Button from '../../components/Buttons/Buttons'
import {PageData} from '../../utils/context/pageContext'

class NotFound extends Component {
  static contextType = PageData

  render(){
    let data = this.context.headers

    let error404 = <div className="error-back content-center"
                    style={{background: 
                    `url('${data.background.giff}') no-repeat center center`, backgroundSize: 'cover'}}>
                      <div className="content-center error-message"> 
                        <h1 className='header-text'>{data.title}</h1>
                        <p className='desc'>{data.shortDesc}</p>
                          <Button 
                            text={data.button.text}
                            link="/"
                            btnType='bx-button'
                            withSvg={data.button.withSvg}
                            colors={data.background.color}
                            type={data.button.type}/>
                        </div>
                      </div>
    return (
      
      <header className='top' 
        style={{background: data.background.color}}>
        <div className="top-container content-center">
          {error404}
        </div>
      </header>
    )
  }
}

export default NotFound

