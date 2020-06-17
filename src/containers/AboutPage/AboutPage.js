import React, {Fragment, useEffect} from 'react'
import Header from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'
import Message from '../../components/Message/Message'
import Myreads from './MyReads/MyReads'
import MySkills from './MySkills/MySkills'
import {setNavWidth, resize} from '../../utils/common/resize'
import {aboutMe} from '../../utils/about/skillsAnimate'
import {animateHeaderPage} from '../../utils/about/animateHeaderA'
import './AboutPage.css'

function AboutPage(props) {

  useEffect(()=>{
    // animate page
    animateHeaderPage(document)
    // set nav max-width
    setNavWidth(true)
    window.addEventListener('resize', () => resize(true))
  })




  return (
    <Fragment>
      <header className='header'>
        <Header 
          click={(n)=> props.click(n)}
          page={'one'}
          img={1}
          maintext={'Get to know me.'}
          navs={props.navs}/>
      </header>


      <Message 
        image={false}
        text=''
        background={'#f4f4f4'}
        color='green'
        title={`About Me.`}
        quote='Be yourself, everyone else is taken.'
        author='Oscar Wilde'
        pColor='#7E7070'
        articleText={aboutMe} />

      <MySkills />

      <Myreads />

      <Footer 
        click={(n)=> props.click(n)}
        navs={props.navs}/>
    </Fragment>
  )
}

export default AboutPage
