import React from 'react';
import {motion} from 'framer-motion'
import {Anim} from '../../utils/animations'

export default function Preloader() {

  return (
    <div className="preloader">
      <motion.div 
        variants={Anim.Preloader.closeintro}
        initial='initial'
        animate='animate'
        onAnimationComplete={()=> Anim.Helpers.removepreloader()}
        className="preloader-wrapper">
        <div className="preloader-overflow content-center">
          <motion.img 
            variants={Anim.Preloader.animatelogo}
            animate='animate'
            initial='initial'
            src="/images/logo.svg" alt=""/>
          <motion.div 
            variants={Anim.Preloader.textanimate}
            initial='initial'
            animate='animate'
            className="logo-text">aiman adlawan</motion.div>
          <motion.div 
            variants={Anim.Preloader.removeloader}
            initial='initial'
            animate='animate'
            className='loader-span'>
            <span className="loader loader-top"></span>
            <motion.span 
              variants={Anim.Preloader.loader}
              initial="initial"
              animate="animate"
              className="loader loader-bottom"></motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
