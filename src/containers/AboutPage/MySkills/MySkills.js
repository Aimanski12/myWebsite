import React from 'react'
import {skills, skillLogo} from '../../../utils/about/skillsAnimate'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import Button from '../../../components/Button/Button'
import './MySkills.css'

function MySkills() {

  const show = () => {
    return skills.map((s, i)=>{
      return ( <li key={i} className='content-center'>
              <img src={`${skillLogo(s)}`} 
                alt={`${s.toLowerCase()} icon`} />
              <span>{s}</span>
            </li>
      )
    })
  }

  return (
    <section className="my-skills">
        <div className="my-skills-container content-center">

        <SectionHeader 
          color='yellow'
          title='Skills.'
          quote='The future belongs to those who learn more skills and combine them in creative ways.'
          author='Oscar Wilde' />

        <div className='skill-wrapper content-align'>
          <ul className='skill-list'>
            {show()}
          </ul>
        </div>
        
        <Button 
          text={'View Projects'}
          external={false}
          link={'/'}
          image={false}/>
        </div>
      </section>
  )
}

export default MySkills
