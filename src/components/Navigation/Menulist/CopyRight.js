import React from 'react';
import Copyright from '../../GlobalComponents/Copyright'
import {motion} from 'framer-motion'

export default function CopyRight() {
  return (
    <div className="menu-copyright">
      <motion.div 
        variants={showCopyRight}
        className="menu-copyright-wrapper font-1">
        <Copyright />
      </motion.div>
    </div>
  );
}


let easing = [0.6, -0.05, 0.01, 0.99]

const showCopyRight = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      ease: easing,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: easing,
      duration: 0.3
    }
  }
}