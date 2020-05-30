import React, {useEffect} from 'react'
import {animateSkill, skills} from '../../../helpers/about/skillsAnimate'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import './MySkills.css'

function MySkills() {
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      animateSkill(document)
    }) 
  })


  const show = (skill) => {
    return ( <ul>{
              skill.map((s, i)=> {
                return ( <li key={i}>{s}<span></span></li> )
              })
            }</ul>
          )
  }

  return (
    <section className="my-skills">
        <div className="my-skills-container content-center">

        <SectionHeader 
          color='gray'
          title='My Skills.'
          quote='The future belongs to those who learn more skills and combine them in creative ways.'
          author='Oscar Wilde' />

          <div className="skill-wrapper content-align">

            <div className="skill-wrapper-cont lang content-align content-center">
              <h3>langauge <span>level 10</span></h3>
                {show(skills.language.skill)}
            </div>
            
            
            <div className="skill-wrapper-cont tools content-align content-center">
              <h3>tools / frameworks <span>level 10</span></h3>
                {show(skills.tools.skill)}
            </div>
            
            <div className="skill-wrapper-cont design content-align content-center">
              <h3>design tools <span>level 10</span></h3>
                {show(skills.design.skill)}
            </div>

          </div>

        </div>
      </section>
  )
}

export default MySkills
