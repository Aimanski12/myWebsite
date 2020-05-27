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
            <p className='section-mtext'>It takes a lot of time and effort to create ideas from scratch. My passion and dedication has brought me to a level that would drive me to create and develop ideas with excitement and enjoyment.</p>

            {button}
            
          </article>

      </div>
    </section>
  )

}

export default Message

