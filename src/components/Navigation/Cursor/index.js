import React, {useEffect} from 'react';
import gsap from 'gsap'

export default function Cursor() {

  // this is a backer for the cursor whenever
  // the cursor move around the screen
  // this will add animationn effects
  useEffect(()=>{
    const cursor = document.querySelector('.cursor-marker');
    
    // add animation
    document.addEventListener('mousemove', (e)=>{
      gsap.to(cursor, {
        duration: .1,
        left: e.clientX-10, 
        opacity: 1,
        top: e.clientY-10, 
      })
    })
    // add click effects
    document.addEventListener('click', () => {
      cursor.classList.add("cursor-expand");
      setTimeout(() => {
        cursor.classList.remove("cursor-expand");
      }, 500)
    })
  })

  return (
    <div className="cursor-marker"></div>
  );
}
