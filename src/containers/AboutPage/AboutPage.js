import React, {Fragment, useEffect} from 'react'
import Header from '../../components/PageHeader/PageHeader'
import Footer from '../../components/Footer/Footer'
// import Message from '../../components/Message/Message'
import Myreads from './MyReads/MyReads'
import MySkills from './MySkills/MySkills'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
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
      {/* <header className='header'> */}
      <Header 
        click={(n)=> props.click(n)}
        page={'one'}
        img={1}
        maintext={'Get to know me.'}
        navs={props.navs}/>
      {/* </header> */}

      <section style={{background: '#f4f4f4', padding: '90px 0'}}
        className="section-message content-center">
        <div className="section-mcontainer content-center">
          <SectionHeader 
            color={'green'}
            title={'About Me'}
            quote={'Be yourself, everyone else is taken.'}
            author={'Oscar Wilde'} />
            <article className='content-align content-center '>
              <p className='section-abouttext'>{aboutMe[0]}</p>
              <p className='section-abouttext'>{aboutMe[1]}</p>
              <p className='section-abouttext'>{aboutMe[2]}</p>
              <p className='section-abouttext'>I'm excited to 
                <a href="https://www.linkedin.com/in/leospi%C3%B1oza" 
                  target='_blank' 
                  rel="noopener noreferrer"> connect</a> with great people like you.</p>
            </article>

        </div>
      </section>

      <MySkills />

      <Myreads />

      <Footer 
        click={(n)=> props.click(n)}
        navs={props.navs}/>
    </Fragment>
  )
}

export default AboutPage
