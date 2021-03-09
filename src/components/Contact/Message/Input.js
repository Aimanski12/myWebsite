import React from 'react';

export default function Input({data, inputValues, change}) {
  const getValue = (input) => {
    return inputValues[input]
  }

  const inputs = data.map((input, i) => {
    if(input.el === 'input') 
      return (
        <div className='input-wrapper content-center' key={i}>
          <label className='font-1 s7a' 
            htmlFor={input.name}>{input.label}</label>
          <input 
            className='font-2 s4b'
            name={input.name}
            onChange={(e)=>change(e, input.name)}
            placeholder={input.placeHolder}
            type={input.type} 
            value={getValue(input.name)} />
        </div>
      )
    if(input.el === 'textarea')
      return (
        <div className='input-wrapper content-center' key={i}>
          <label 
            className='font-1 s7a' 
            htmlFor={input.name}>{input.label}</label>
          <textarea 
            className='font-2 s4b'
            cols='50'
            onChange={(e)=>change(e, input.name)}
            placeholder={input.placeHolder}
            spellCheck="true"
            rows='7'
            value={getValue(input.name)} />
        </div>  
      )
  })
  return (
    <>
      {inputs}    
    </>
  );
}
