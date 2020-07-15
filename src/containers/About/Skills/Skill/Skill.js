import React, {Fragment} from 'react'
import {imageUrl} from '../../../../utils/common/common'
import './Skill.css'

function Skill(props) {

  let skills = props.skills.skills.map((skill, i) =>{
    return (
      <div className="icon-wrapper" key={i}>
        <span className="show-container show">
          <div className="reveal">
            <img className='skill-icon' 
              src={imageUrl(skill.img, 'png')} 
              alt={skill.alt}/>
            <span className='skill-name'>{skill.name}</span>
          </div>
          <div className="runner"></div>
        </span>
      </div>
    )
  })


  return (
    <Fragment>

      <article className='section-article-wrapper'>
        <h2 className="head3">
          <span className="show-container show">
            <div className="reveal "
            style={{color: '#EBE9CD'}}>{props.skills.title}</div>
            <div className="runner"></div>
          </span>
        </h2>
        <p className="sub-reveal-container desc show">
          <span className="sub-reveal"
            style={{color: '#ABA98F', fontWeight: 500}}>{props.skills.description}</span>
        </p>
      </article>

      <figure  className='section-article-wrapper figure-icons'>
        <div className='icons-container'> {skills}</div>
      </figure>

    </Fragment>
  )
}

export default Skill