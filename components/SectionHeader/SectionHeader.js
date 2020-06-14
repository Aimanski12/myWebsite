import React from 'react'


function SectionHeader(props) {


  return (
    <header className={`content-align section-header content-center ${props.color}`}>
      <h2 className='header-title'>{props.title}</h2>
      <p className='header-quote content-center'>
        <q>{props.quote}</q>
        <span>- {props.author} -</span></p>
    </header>
  )
}

export default SectionHeader
