import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import Button from '../../../components/Buttons/Buttons'
import './NotFound.css'

function NotFound(props) {
  let data = props.data

  let hData = data ? data.headers : null

  let error404 = data ? (
                  <div className="error-back content-center"
                    style={{background: 
                    `url('${imageUrl(hData.background.giff, 'gif')}') no-repeat center center`, backgroundSize: 'cover'}}>
                      <div className="content-center error-message"> 
                        <h1 className='header-text'>{hData.title}</h1>
                        <p className='desc'>{hData.shortDesc}</p>
                          <Button 
                            text={hData.button.text}
                            link="/"
                            btnType='bx-button'
                            withSvg={hData.button.withSvg}
                            colors={hData.background.color}
                            type={hData.button.type}/>
                        </div>
                      </div>) : null

  return (
    <header className='top' 
      style={{background: '#2C6664'}}>
      <div className="top-container content-center">
        {error404}
      </div>
    </header>
  )
}

export default NotFound
