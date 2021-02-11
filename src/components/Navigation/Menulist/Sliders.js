import React from 'react';
import {motion} from 'framer-motion'

export default function Sliders() {

  const sliders = () => {
    const el = ['', '', '', '']
    return el.map((e, i) => {
      return (
        <motion.span key={i}
          variants={slide} 
          className='sliders'></motion.span> 
      )}
    )
  }

  return (
    <div className='menu-slider-wrapper'>
      {sliders()}
    </div>
  );
}

let easing = [0.6, -0.05, 0.01, 0.99]

const slide = {
  initial: {
    width: 0
  },
  animate: {
    width: '100%',
    transition: {
      ease: easing,
      duration: 1
    }
  },
  exit: {
    width: 0,
    transition: {
      delay: 0.3,
      ease: 'easeInOut',
      duration: 0.3
    }
  }
}