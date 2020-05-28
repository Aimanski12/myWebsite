import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Button from '../Button/Button'
import './Message.css'


function Message(props) {

  const button = props.image ? 
                <Button 
                  text={props.text}
                  image={true}/> : null
  return (
    <section 
      style={{background: props.background}}
      className="section-message content-center">
      <div className="section-mcontainer content-center">
        
        <SectionHeader 
          color={props.color}
          title={props.title}
          quote={props.quote}
          author={props.author} />


          <article className='content-align content-center '>
            <p className='section-mtext'
              style={{color: props.pColor}}>{props.articleText}</p>

            {button}
            
          </article>

      </div>
    </section>
  )

}

export default Message

