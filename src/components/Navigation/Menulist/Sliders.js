import React from 'react';
import {motion} from 'framer-motion'
import {Anim} from '../../../utils/animations'

export default function Sliders() {

  const sliders = () => {
    const el = ['', '', '', '']
    return el.map((e, i) => {
      return (
        <motion.span key={i}
          variants={Anim.MenuButton.animateSliders} 
          className='sliders'></motion.span> )}
      )
    }

  return (
    <div className='menu-slider-wrapper'>
      {sliders()}
    </div>
  );
}
