import React from 'react';
import About from './About'
import Dark from './Dark'

export default function Header({data}) {
  const contents = () => {
    return data.type === 'dark' ? <Dark data={data}/> : 
      data.type === 'about' ? <About data={data}/> : null
  }
  
  return (
    <>{contents()}</>
  );
}
