import React, {Fragment} from 'react'
import './Subparagraphs.css'

function Subparagraphs(props) {

  let sections = props.data.subParagraph.content.map((text, i) => {
    return (
      <Fragment key={i}>
      <h2 className="p-wrapper head2">
          <span className="show-container p-container show"
            style={{color: props.data.textColors.primary}}>
            <div className="reveal p-reveal">{text.title}</div>
            <div className="runner p-runner"></div>
          </span>
        </h2>
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
    </article>
  )
}

export default Subparagraphs
