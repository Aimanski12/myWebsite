import React from 'react';
import {Anim} from '../../../utils/animations'
import {motion, AnimatePresence} from 'framer-motion'

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
            exit='exit' >Close</motion.span>)}
      </AnimatePresence>
    </>
  );
}
