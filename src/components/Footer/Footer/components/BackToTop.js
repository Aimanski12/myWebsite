import React, {useEffect} from 'react';
import {Anim} from '../../../../utils/animations'

export default function BackToTop({data}) {

  useEffect(() => {
    // backtotop scroll
    Anim.Helpers.scrollAnimation()
  })
  return (
    <div className="back-to-top content-center">
      <div className="scroll-up"> 
        <div className="scroll-up-container">
          <span className='arrow-up first-arrow'></span>
          <span className='arrow-up second-arrow'></span>
        </div>
      </div>
      <a href='#body-wrapper' className='font-1 s10a'>
        {data.text}
      </a>
    </div>
  );
}
