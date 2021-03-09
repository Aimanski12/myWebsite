import React, {useEffect} from 'react';
import $ from 'jquery'

export default function ArrowDown() {

  useEffect(() => {
    setTimeout(()=>{
      const arrow = document.querySelector('.scroll-down')
      if(arrow){
        arrow.classList.remove('hide-arrow')
      }
    }, 2000)
  })

  return (
    <div className="scroll-down hide-arrow"
      onClick={()=> {
        const body = $('.body-wrapper')[0]
        body.scrollTo({top: window.innerHeight, behavior: 'smooth'})
      }}> 
      <div className="scroll-down-container">
        <span className='a-down f-arrow'></span>
        <span className='a-down s-arrow'></span>
      </div>
    </div>
  );
}
