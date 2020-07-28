import React from 'react'

function BottomDesc(props) {
  return (
    <span className="sub-reveal"
      style={{color: '#6B6F71', fontWeight: 500}}>
        {props.desc} 
        <a href={`${props.link}`} 
            rel='noopener noreferrer'
            target='_blank'
            className='links'> here
        </a>.
    </span>
  )
}

export default BottomDesc
