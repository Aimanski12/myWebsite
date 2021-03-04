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
            type={input.type} 
            placeholder={input.placeHolder}
            onChange={(e)=>change(e, input.name)}
            value={getValue(input.name)}
            />
        </div>
      )
    if(input.el === 'textarea')
      return (
        <div className='input-wrapper content-center' key={i}>
          <label className='font-1 s7a' 
            htmlFor={input.name}>{input.label}</label>
          <textarea 
            className='font-2 s4b'
            rows='7'
            cols='50'
            spellCheck="true"
            value={getValue(input.name)}
            onChange={(e)=>change(e, input.name)}
            placeholder={input.placeHolder}/>
        </div>  
      )
  })
  return (
    <>
      {inputs}    
    </>
  );
}
