import React, {Fragment} from 'react'
import './Subparagraphs.css'

function Subparagraphs(props) {

  let sections = props.data.subParagraph.content.map((text, i) => {
    return (
      <Fragment key={i}>
      <h3 className="p-wrapper head3">
          <span className="show-container p-container show"
            style={{color: props.data.textColors.primary}}>
            <div className="reveal p-reveal">{text.title}</div>
            <div className="runner p-runner"></div>
          </span>
        </h3>
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content"
            style={{color: props.data.textColors.secondary}}> 
            {text.text}</span>
        </p>
      </Fragment>
    )
  })

  return (
    <article className='paragraphs'>
      {sections}

      {props.data.subParagraph.specialLinks.isTrue ?
        <Fragment>
          <p className="sub-reveal-container p-desc p-links desc show">
            <span className="sub-reveal p-desc-content"
              style={{color: props.data.textColors.secondary}}> 
              I'm excited to <a href="/"><span className='links'>connect</span></a> with you great people like you.</span>
          </p>
          <p className="sub-reveal-container p-desc p-links desc show">
            <span className="sub-reveal p-desc-content"
              style={{color: props.data.textColors.secondary}}> 
              Click <span className='links'>here</span> to see some of my credentials.</span>
            </p> 
          </Fragment> : null }
    </article>
  )
}

export default Subparagraphs
