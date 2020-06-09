import React, {Fragment, useEffect} from 'react'
import Header from '../../components/PageHeader/PageHeader'
// import {findBackground} from '../../helpers/common/common'
import Footer from '../../components/Footer/Footer'
import Message from '../../components/Message/Message'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import LifeEssentials from './LifeEssentials/LifeEssential'
import MySkills from './MySkills/MySkills'
import {setNavWidth} from '../../helpers/logoIntro/logoIntro'
import {animateHeaderPage} from '../../helpers/about/animateHeaderA'
import {bklink} from '../../helpers/about/booksdata'
import {img} from '../../helpers/common/common'
import './AboutPage.css'

function AboutPage(props) {

  useEffect(()=>{
    // animate page
    animateHeaderPage(document)
    // set nav max-width
    setNavWidth()
  })

  const bk = () =>{
    let book = bklink.map((b, i) => {
      return(
          <figure className='content-center' key={i}>
            <a href={b.link}
              rel='noopener noreferrer'
              target='_blank'>
              <img src={img(b.img)} alt={`${b.title} book`}/>
            </a></figure> )
      })
    return book
  }


  return (
    <Fragment>
      <header className='header'>
        <Header 
          click={(n)=> props.click(n)}
          page={'two'}
          img={1}
          maintext={'Get to know me.'}
          navs={props.navs}/>
      </header>

      <LifeEssentials />

      <Message 
        image={false}
        text=''
        background={'#1F6562'}
        color='yellow'
        title={`Facts about me.`}
        quote='Be yourself Everyone else is taken.'
        author='Oscar Wilde'
        pColor='#EBE9CD'
        articleText='I speak English and Tagalog, born and raised in Cebu, Philippines, i drink tea and coffee, i trade stocks, i collect foreign currencies, i do wood working, i read non-fiction, i eat lechon kawali, tried biking 130 kms, like tech science.' />

      <MySkills />



      <section 
        style={{background: 'white'}}
        className="section-message content-center reads">
        <div className="section-mcontainer content-center">
          <SectionHeader 
            color={'green'}
            title={'Follow My Reads'}
            quote={'Reading is essential to those who seek to rise above the ordinary.'}
            author={'Jim Rohn'} />
            <article className='content-align content-center '>
              <p className='section-mtext'
                style={{color: '#7E7070'}}>{`Reading is one of the things I do to satisfy my curiosity. It helps me understand the world around me better than any social media feeds. Here are some of the reads I recommend to those who share the same curiosity with me.`}</p>
 
              <div className="content-align books-container">
                {bk()}
              </div>
                <p className='section-mtext follow-reads' 
                  style={{color: '#7E7070'}}>I have 132 reads. You can follow all of them 
                  <a 
                    // rel='noopener noreferrer'
                    // target='_blank'
                    href="https://www.goodreads.com/review/list/84826805"> here</a>.</p>


            </article>
        </div>
      </section>

      <Footer />
    </Fragment>
  )
}

export default AboutPage
