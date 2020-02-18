import React, {useEffect} from 'react';
import './Header.css'

const Header_Text = () => {

  useEffect(() => {
    window.addEventListener('load', () => {
      const text_header = document.querySelector('.header-text-container')
      text_header.classList.add('loadText')
    })
    window.addEventListener('scroll', (e) => {
      const text_header = document.querySelector('.header-text-container')
      if (e.path[1].pageYOffset < 20) {
        text_header.classList.add('loadText')
      }
      if (e.path[1].pageYOffset > 20) {
        text_header.classList.remove('loadText')
      }
    })
  })


  return (
     <div className="header-text">
      <div className='header-text-container'>
        <h1>"Do it with</h1>
        <h1 className='text-highlight'>passion</h1>
        <h1>or none at all."</h1>
      </div>
    </div>
  );

}

export default Header_Text
