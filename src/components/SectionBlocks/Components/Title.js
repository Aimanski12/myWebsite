import React from 'react'

function Title(props) {
  
  return (
    <div className='section-block-left'>
      <div className="left-align left-block">
        <h2 className='head2'
          style={{color: props.textcolor}}>
          <span className='show-container show'>
            <div className='reveal'>
              <span>{props.title}</span>
            </div>
            <div className='runner'></div>
          </span>
        </h2>
      </div>
    </div>
  )
}

export default Title
