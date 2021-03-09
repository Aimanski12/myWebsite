import React, {useEffect, useContext} from 'react';

import {AppData} from '../../../context'
import {Anim} from '../../../utils/animations'

export default function Headers({data}) {
  const {SetAppState} = useContext(AppData)

  useEffect(() => {
    Anim.Helpers.tiltImage(".header-img-wrapper div", 20)
  })

  return (
    <header className='project-header content-center'>
      <h1 className='font-1 s1a'>
        <div className="header-text-wrapper">
          <div className="header-block-runner">
            <span>{data.title}</span>
          </div>
        </div>
      </h1>
      <div className='font-1 s8a'>
        <div className="header-text-wrapper">
          <div className="header-block-runner">
            <p>{data.caption}</p>
          </div>
        </div>
      </div>
      <div className='header-img-wrapper'>
        <div>
          <img onClick={()=> {
            SetAppState.setImageModalState({
              images: data.hero,
              isOpen: true,
              isSingle: true, })
            }} 
            src={data.hero.link} alt={data.hero.alt}/>
        </div>
      </div>
    </header>
  );
}
