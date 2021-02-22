import React, {useEffect} from 'react';

export default function ArrowDown() {

  useEffect(() => {
    setTimeout(()=>{
      const arrow = document.querySelector('.scroll-down')
      if(arrow){
        arrow.classList.remove('hide-arrow')
      }
    }, 2200)
  })
  return (
    <div className="scroll-down hide-arrow"
      onClick={()=> {
        window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
      }}> 
      <div className="scroll-down-container">
        <span className='arrow-down first-arrow'></span>
        <span className='arrow-down second-arrow'></span>
      </div>
    </div>
  );
}
