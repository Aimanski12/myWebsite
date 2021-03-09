import React, {useEffect} from 'react';
import $ from 'jquery'

export default function BackToTop({data}) {
  
  return (
    <div className="back-to-top content-center">
      <div className="scroll-up"> 
        <div className="scroll-up-container">
          <span className='arrow-up first-arrow'></span>
          <span className='arrow-up second-arrow'></span>
        </div>
      </div>
      <button 
        onClick={() => {
          const body = $('.body-wrapper')[0]
          body.scrollTo({ top: 0, behavior: 'smooth' })
        }} 
        className='font-1 s10a'> {data.text} </button>
    </div>
  );
}
