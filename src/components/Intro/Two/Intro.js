import React, {useEffect} from 'react'
import './Intro.css'
import face from './Face.png'

function Intro () {

  useEffect(()=>{
    setTimeout(()=>{
      const two = document.querySelector('.introTwo')
      two.classList.add('zero1')
    }, 4200)
  })


  return (
    <div className="introTwo">
      <h1>Sample Text</h1>
    </div>
  )
}
export default Intro
