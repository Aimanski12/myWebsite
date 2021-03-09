import React from 'react';
import {motion} from 'framer-motion'

export default function componentName() {
  return (
    <div className="swipe-wrapper content-center font-2 s5b">
      <motion.span 
        animate={{ 
          opacity: 0, 
          x: -35, 
        }}
        className='swipe-left'
        transition={{ 
          duration: 2, 
          repeat: Infinity
        }} >←</motion.span>
      <span>Swipe</span>
      <motion.span 
        animate={{ 
          opacity: 0, 
          x: 35, 
        }}
        className='swipe-right'
        transition={{ 
          duration: 2, 
          repeat: Infinity
        }} >→</motion.span>
    </div>
  );
}
