import React, {useState} from 'react';

export default function Message({data}) {

  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "Just say'n Hi!",
    message: ""
  })

  const getValue = (input) => {
    return value[input]
  }

  const updateValue = (e, input) => {
    setValue({
      ...value,
      [input]: e.target.value
    })
  }

  const inputs = data.map((input, i) => {
    // console.log(input)
    if(input.el === 'input') 
      return (
        <div className='input-wrapper content-center' key={i}>
          <label className='font-1 s7a' 
            for={input.name}>{input.label}</label>
          <input 
            className='font-2 s4b'
            type={input.type} 
            placeholder={input.placeHolder}
            onChange={(e)=>updateValue(e, input.name)}
            value={getValue(input.name)}/>
        </div>
      )
    if(input.el === 'textarea')
      return (
        <div className='input-wrapper content-center' key={i}>
          <label className='font-1 s7a' 
            for={input.name}>{input.label}</label>
          <textarea 
            className='font-2 s4b'
            rows='7'
            cols='50'
            spellCheck="true"
            value={getValue(input.name)}
            onChange={(e)=>updateValue(e, input.name)}
            placeholder={input.placeHolder}/>
        </div>  
      )
  })

  
  return (
    <section className='message-form content-center'>
      <h2 className="font-1 s3a">Your Message Here</h2>

      <form onSubmit={()=>console.log('submitted')}>
        {inputs}
        <div className="mes-alert">
          <span className='font-1 s9a'>* required</span>
        </div>


        <button 
          className='font-1 s7a'
          type='submit'>Send</button>
      </form>

    </section>
  );
}
