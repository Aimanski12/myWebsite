import React from 'react';

export default function BackToTop({data}) {
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
