import React from 'react'

function TopDesc(props) {
  return (
    <span className="sub-reveal"
      style={{color: '#6B6F71', fontWeight: 500}}>
      {props.desc}
    </span>
  )
}

export default TopDesc
