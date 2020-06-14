import React from 'react'

function ContactForm(props) {

  const forms = () => {
    let inputs = props.formData.map((f, i)=>{
      return <div 
                key={i}
                className={`input content-center 
                ${f.name === 'message' ? 'message' : null }`}>
              {f.name === 'message' ? 
                <textarea 
                  name={f.name} 
                  value={f.value}
                  onChange={(e)=>props.inputChange(e, f)}
                  placeholder={f.placeholder}
                  cols="30" rows="10"></textarea> :
                <input 
                  name={f.name}
                  type={f.type} 
                  placeholder={f.placeholder}
                  value={f.value}
                  onChange={(e)=>props.inputChange(e, f)}/>
                }
              </div>
    })
    return inputs
  }

  return (
    forms()
  )
}

export default ContactForm



