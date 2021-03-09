import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'

import {Anim} from '../../../utils/animations'

export default function MenuButton({isHovered, isOpen}) {

  return (
    <>
      <AnimatePresence>
        {(isHovered && !isOpen) && (
          <motion.span
          variants={Anim.MenuButton.buttonAnim}
          initial='initial'
          animate='animate'
          exit='exit' >Open</motion.span> )}
      </AnimatePresence>
      <AnimatePresence>
        {(!isHovered && !isOpen) && (
          <motion.span
            variants={Anim.MenuButton.buttonAnim}
            initial='initial'
            animate='animate'
            exit='exit'>Menu</motion.span>)}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.span
            variants={Anim.MenuButton.buttonAnim}
            initial='initial'
            animate='animate'
            exit='exit' className='close'>Close</motion.span>)}
      </AnimatePresence>
    </>
  );
}
