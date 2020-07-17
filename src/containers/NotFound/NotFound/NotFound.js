import React from 'react'
import {imageUrl} from '../../../utils/common/common'
import Button from '../../../components/Buttons/Buttons'
import './NotFound.css'

function NotFound(props) {

  return (
    <header className='top' 
      style={{'background': `#2C6664`}}>
      <div className="top-container content-center">
        
        <div className="error-back content-center"
        style={{background: 
        `url('${imageUrl('typing', 'gif')}') no-repeat center center`, backgroundSize: 'cover'}}>

          <div className="content-center error-message"> 
            <h1 className='header-text'>Your lost mate!</h1>
            
            <p className='desc'>Sorry, this page is not available.</p>

            <Button 
              text='Go back to main' 
              withSvg={false}
              colors='#2C6664'
              type='withBox'/>


          </div>


        </div>       
        
      </div>
    </header>
  )
}

export default NotFound
