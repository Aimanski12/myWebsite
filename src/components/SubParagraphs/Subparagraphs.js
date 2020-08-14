import React, {useContext, Fragment} from 'react'
import ParagraphLinks from './ParagraphLinks/ParagraphLinks'
import {PageData} from '../../utils/context/pageContext'

function Subparagraphs () {
  const {headers} = useContext(PageData)

  let sections = headers.subParagraph.content.map((text, i) => {
    return (
      <Fragment key={i}>
        {text.withTitle ? 
          <h3 className="p-wrapper head3">
            <span className="show-container p-container show"
              style={{color: headers.textColors.primary}}>
              <div className="reveal p-reveal">{text.title}</div>
              <div className="runner p-runner"></div>
            </span>
          </h3> : null
        }
        <p className="sub-reveal-container p-desc desc show">
          <span className="sub-reveal p-desc-content"
            style={{color: headers.textColors.secondary, 
            fontWeight: headers.title[0] ===  'About me.' ? 500 : 600}}> 
            {text.text}</span>
        </p>
      </Fragment>
    )
  })

  return (
    <div className='paragraphs'>
      {sections}
      {headers.subParagraph.specialLinks.isTrue ? 
        <ParagraphLinks colors={headers.textColors} /> : null}
    </div>
  )
}

export default Subparagraphs;
