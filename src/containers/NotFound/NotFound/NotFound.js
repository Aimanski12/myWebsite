import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import Button from '../../../components/Buttons/Buttons'
import './NotFound.css'

function NotFound(props) {
  let data = props.data

  let error404 = data ? (
                  <div className="error-back content-center"
                    style={{background: 
                    `url('${imageUrl(data.headers.background.giff, 'gif')}') no-repeat center center`, backgroundSize: 'cover'}}>
                      <div className="content-center error-message"> 
                        <h1 className='header-text'>{data.headers.title}</h1>
                        <p className='desc'>{data.headers.shortDesc}</p>
                          <Button 
                            text={data.headers.button.text}
                            withSvg={data.headers.button.withSvg}
                            colors={data.headers.background.color}
                            type={data.headers.button.type}/>
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
