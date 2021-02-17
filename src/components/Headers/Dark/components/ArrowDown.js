import React from 'react';

export default function ArrowDown() {
  setTimeout(()=>{
    const arrow = document.querySelector('.scroll-down')
    arrow.classList.remove('hide-arrow')
  }, 2200)
  return (
    <div className="scroll-down hide-arrow"
      onClick={()=> {
        window.scrollTo(0, window.innerHeight)
      }}> 
      <div className="scroll-down-container">
        <span className='arrow-down first-arrow'></span>
        <span className='arrow-down second-arrow'></span>
      </div>
    </div>
  );
}
