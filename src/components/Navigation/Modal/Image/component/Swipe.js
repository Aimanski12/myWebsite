import React from 'react';
import {motion} from 'framer-motion'

export default function componentName() {
  return (
    <div className="swipe-wrapper content-center font-2 s5b">
      <motion.span 
        animate={{ x: -35, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 2 }}
        className='swipe-left'>←</motion.span>
      <span>Swipe</span>
      <motion.span 
        animate={{ x: 35, opacity: 0 }}
        transition={{ repeat: Infinity, duration: 2 }}
        className='swipe-right'>→</motion.span>
    </div>
  );
}
