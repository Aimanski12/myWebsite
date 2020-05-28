import React, {useEffect, useState} from 'react'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import {projData} from '../../../helpers/projects/projectsData'
import {makeButton} from '../../../helpers/projects/projectScripts'
import {findBackground} from '../../../helpers/common/common'
import Button from '../../../components/Button/Button'
import {slideCard} from '../../../helpers/projects/projectScripts'
import ProjectCard from '../../../components/ProjectCards/ProjectCard'
import './Projects.css'


function Projects() {

  const [buttons, setButtons] = useState({
    isSet: false,
    slides: 0,
    active: 0
  })

  useEffect(()=>{

    if(buttons.isSet === false) {
      let data = makeButton()
      setButtons({
        slides: data.slides,
        active: data.active,
        isSet: true,
      })
    }
    
    // check the window width when resized
    window.addEventListener('resize', ()=>{
      let a = makeButton()
      if(a.slides !== buttons.slides){
       setButtons({
         ...buttons,
         slides: a.slides,
         active: a.active
       })  
      }
    })
    return ()=>{
      window.removeEventListener('resize', ()=>{})
    }
  }, [buttons])


  const projCards = () => {
    let cards = projData.map((d, i)=>{
                  return <ProjectCard key={i} pNum={d.pNum} url={d.pUrl} img={d.pImg} ttl={d.pTit} prg={d.pDesc}/>
                })
              return cards
  } 

  const createBtnSliders = () => {
    if(buttons.slides && buttons.slides !== 0) {
      let a = []
      for (let x = 0; x < buttons.slides; x++) { a.push(x) }
      let c = a.map((b, i)=>{
        return <span 
                key={i} 
                className={i === buttons.active ? 'active' : null}></span>
      })
      return c
    }
  }

  const setSlides = (direction) => {
    let n = slideCard(buttons, direction)
    setButtons({ ...n, buttons })
  }

  return (
    <section className="my-projects">
      <div 
        className='my-projects-container content-center'
        style={{background: `url('${findBackground('mywork')}') center center`}}>

      <SectionHeader 
        color='yellow'
        title='My Projects.'
        quote='Men who try to do something and fail are infinitely better than those who do nothing and succeed.'
        author='Lloyd Jones' />

      <div className='projects-container content-center'>

        <article className='content-align content-center project-article-header'> 
          <p>Coding is one of the things I like to do. Here are some of the few things that I have accomplished. Feel free to use them whenever you want.</p>
        </article>

        <div className="content-center projects-lists">
          <ul className='project-list'>
            {projCards()}
          </ul>
        </div>

        <div className="content-center swipe">
          <i className='swipe-left'
            onClick={()=> setSlides('left')}>←</i>
          {createBtnSliders()}
          <i className='swipe-right'
            onClick={()=> setSlides('right')}>→</i>
        </div>

        
        <Button 
          imate={false}
          text={'View More'}/>

        

        </div>

      </div>
    </section>
  )
}

export default Projects
