import React, {useContext} from 'react';
import {AppData} from '../../../context'

export default function AboutHeader({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <header className='about-header'>
      <div className="about-header-wrapper content-center">

        <div className="about-text-header">
          <div className="about-text-runner">
            <img 
              alt={data.profile.alt}
              onClick={()=> SetAppState.setImageModalState({
                images: data.profile,
                isOpen: true,
                isSingle: true,
              })}
              src={data.profile.link1} />
          </div>
        </div>

        <div className="about-text-header">
          <div className="about-text-runner">
            <span className='font-1 s9a'>{data.greeting}</span>
          </div>
        </div>

        <div className='about-text-intro'>
          <h1 className='font-1 s1a'>{data.name}</h1>
        </div>
        <div className='about-text-intro'>
          <p className='font-2 s4b'>{data.intro}</p>
        </div>

      </div>
    </header>
  );
}
