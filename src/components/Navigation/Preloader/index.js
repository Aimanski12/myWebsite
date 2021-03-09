import React, {useContext, useEffect} from 'react';
import { AnimatePresence, motion } from 'framer-motion'

import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'
import {Helpers} from '../../../utils/common/index'

export default function Preloader() {
  const {AppState, SetAppState} = useContext(AppData)

  useEffect(()=>{
    // check inside the sessionstorage if the 
    // session exists or not expired.
    !AppState.sessionData.isChecked ? (
      (async function(){
        const isFirstTime = await Helpers.SessionStorage.checkSessionStorage()
        if(isFirstTime) {
          // update the state
          SetAppState.setSessionState({ isChecked: true, isFirstTime: true })
        } else {
          // update the state
          SetAppState.setSessionState({ isChecked: true })
        }
      })()
      ) : null
  })
  
  return (
    <AnimatePresence>
      {/* pass the state to mount / unmount the component */}
      { AppState.sessionData.isFirstTime && (
        !AppState.sessionData.isDoneAnimating ? (
          <div className="pre-loader">
            <motion.div 
              animate='animate'
              className="pre-loader-wrapper"
              initial='initial'
              onAnimationComplete={()=> {
                Anim.Helpers.removepreloader()
                // update the isDoneAnimating state to prevent
                // reanimating on page transitions
                SetAppState.setSessionState({ 
                  isDoneAnimating: true,
                  isFirstTime: false
                })
              }}
              variants={Anim.Preloader.closeintro} >
              <div className="pre-loader-overflow content-center">
                <motion.img 
                  animate='animate'
                  initial='initial'
                  src="/images/logo.svg" alt=""
                  variants={Anim.Preloader.animatelogo} />
                <motion.div 
                  animate='animate'
                  className="logo-text"
                  initial='initial'
                  variants={Anim.Preloader.textanimate} >aiman adlawan</motion.div>
                <motion.div 
                  animate='animate'
                  className='loader-span'
                  initial='initial'
                  variants={Anim.Preloader.removeloader} >
                  <span className="loader loader-top"></span>
                  <motion.span 
                    animate="animate"
                    className="loader loader-bottom"
                    initial="initial"
                    variants={Anim.Preloader.loader} ></motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>) : null 
      )}
    </AnimatePresence>
  );
}
