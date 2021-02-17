import React from 'react';
import ArrowDown from './components/ArrowDown'
import Socials from './components/Socials'

export default function Dark({data}) {

  const header = data.title.map((t, i) => {
    return (
      <div className="text-wrapper" key={i}>
        <div className="text-block-runner">
          <span>{t}</span>
        </div>
      </div> )
  })

  return (
    <header className="header content-center">
      <div className="header-wrapper">
        <div className="header-text">
          <div>
            <h1 className='font-1 s1a'> {header} </h1>
          </div>
          <div className='caption-wrapper'>
            <p className='font-1 s5a'>{data.caption}</p>
          </div>
        </div>
        <Socials data={data}/>
        <ArrowDown />
      </div>
    </header>
  );
}
