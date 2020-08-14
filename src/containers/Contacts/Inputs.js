import React, {useRef, useEffect, useContext} from 'react'
import {InputData} from '../../utils/context/inputContext'
import {inputvalues} from '../../utils/data/inputdata'

function Inputs() {
  const {inputValue, activeInput, setValues} = useContext(InputData)
  const name = useRef(null)
  const email = useRef(null)
  const title = useRef(null)
  const message = useRef(null)

  function selectRef(n){
    if(n === 'name') return name
    if(n === 'email') return email
    if(n === 'title') return title
    if(n === 'message') return message
  }

  useEffect(()=>{
    if(activeInput === 'name') activateInput(name)
    if(activeInput === 'email') activateInput(email)
    if(activeInput === 'title') activateInput(title)
    if(activeInput === 'message') activateInput(message)
  })

  function activateInput (input) {
    input.current.focus()
  }
  
  let inputs = inputvalues.map((input, i) => {
    return input.el === 'input' ? (
      <div className="input-container" key={i}>
        <i className="icon"
        style={{background: 
          `url('/images/${input.background}') no-repeat center center`}}></i>
        <input 
          className="input-field" 
          type={input.type} 
          placeholder={input.placeholder}
          name={input.name}
          value={inputValue[i]}
          ref={selectRef(input.name)}
          onChange={(e)=>setValues(e.target.value, i, input.name)}/>
      </div>
    ) : (
      <div className="input-container" key={i}>
        <textarea 
          className="input-field message-area focus" 
          placeholder={input.placeholder} 
          name={input.name}
          ref={selectRef(input.name)}
          value={inputValue[i]}
          onChange={(e)=>setValues(e.target.value, i, input.name)}>
        </textarea>
      </div>
    )
  })

  return (
    <div>
      {inputs}
    </div>
  )
}

export default Inputs