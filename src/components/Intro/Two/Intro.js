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
      <div className="face">
        <img src={face} alt=""/>
      </div>
      <div className="headerText">
       <h1>Hi, it's me <span className='green'>Aiman</span>.</h1>
       <h2>I'm a <span className='green'>UX/UI</span> Designer / <span className='green'>Web/App</span> Developer</h2>
      </div>
      <div className="button">
        <span>Explore Me</span>
        <div className="btnBackground"></div>
        {/* <img src="" alt=""/> */}
      </div>
    </div>
  )
}
export default Intro
