import React, {Fragment} from 'react'

function Paragraphs(props) {
  let paragraphs = props.paragraphs.map((paragraph, i) =>{
    return (
      <Fragment key={i}>
        <h3 className="p-wrapper head3">{paragraph.title}</h3>
        <p className="sub-reveal-container p-desc desc">{paragraph.desc}</p>  
      </Fragment>
    )
  })
  
  return (
    <Fragment>
      {paragraphs}
    </Fragment>
  )
}

export default Paragraphs
