import React, {Fragment, useEffect} from 'react'
import Header from '../../components/PageHeader/PageHeader'
import WhatICanDo from './WhaICanDo/WhatICanDo'
import MyDesigns from './MyDesigns/MyDesigns'
import Message from '../../components/Message/Message'
import Project from './Projects/Projects'
import {flipCard} from '../../helpers/projects/projectScripts'
import './WorkPage.css'


function WorkPage() {
  useEffect(()=>{
    // flipcard is called to set the project 
    // cards to flip when clicked
    flipCard(document)
  })

  return (
    <Fragment>
      <header className='header'>
        <Header page={'one'}/>
      </header>

      <WhatICanDo />
      <MyDesigns />

      <Message 
        image={false}
        text='Message Me'
        background={'#3E3A3A'}
        color='gray'
        title={`I'm a dedicated developer.`}
        quote=
          'Talent is cheap; dedication is expensive. It will cost you your life.'
        author='Irving Stone'/>

      <Project />

      <div className="samp"></div>
      <div className="samp1"></div>
      <div className="samp2"></div>
      <div className="samp3"></div>
    </Fragment>
  )
}

export default WorkPage
