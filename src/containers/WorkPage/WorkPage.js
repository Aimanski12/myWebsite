import React, {Fragment, useEffect} from 'react'
import Header from '../../components/PageHeader/PageHeader'
import WhatICanDo from './WhaICanDo/WhatICanDo'
import MyDesigns from './MyDesigns/MyDesigns'
import Message from '../../components/Message/Message'
import Project from './Projects/Projects'
import Footer from '../../components/Footer/Footer'
import {animateHeaderPage} from '../../utils/work/headers/animateHeader'
import {flipCard} from '../../utils/work/projects/projectScripts'
import {setNavWidth, resize} from '../../utils/common/resize'
import './WorkPage.css'


function WorkPage(props) {
  useEffect(()=>{
    // flipcard is called to set the project 
    // cards to flip when clicked
    flipCard(document)
    // animate page
    animateHeaderPage()
    // set navbar max-with 1600
    setNavWidth(true)

    // check if window is resized
    window.addEventListener('resize', () => resize(true))

  })

  return (
    <Fragment>
      <header className='header'>
        <Header 
          click={(n)=> props.click(n)}
          page={'one'}
          img={0}
          maintext={`Hi! It's me Aiman.`}
          navs={props.navs}/>
      </header>

      <WhatICanDo />
      <MyDesigns />

      <Message 
        image={false}
        text=''
        background={'#3E3A3A'}
        color='gray'
        title={`I'm a dedicated developer.`}
        quote=
          'Talent is cheap; dedication is expensive. It will cost you your life.'
        author='Irving Stone'
        pColor='#EBE9CD'
        articleText='It takes a lot of time and effort to create ideas from scratch. My passion and dedication has brought me to a level that would drive me to create and develop ideas with excitement and enjoyment.' />

      <Project
        navs={props.navs} />


      <Message 
        image={true}
        text='Message Me'
        click={(n)=> props.click(n)}
        background={'white'}
        color='green'
        title={`Need help with building your website?`}
        quote='You can do anything you set your mind to.'
        author='Benjamin Franklin'
        pColor='#7E7070'
        articleText={`If you have a project that you need to get started, or you need help on your website, or just wanna say hi, let's get in touch.`} />

      <Footer   
        click={(n)=> props.click(n)}
        navs={props.navs}/>
    
    </Fragment>
  )
}

export default WorkPage
