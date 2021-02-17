import React, {useContext, useEffect} from 'react';
import {motion} from 'framer-motion'
import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'
import {Helpers} from '../../../utils/common/index'
import {AnimatePresence} from 'framer-motion'

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
              variants={Anim.Preloader.closeintro}
              initial='initial'
              animate='animate'
              onAnimationComplete={()=> {
                Anim.Helpers.removepreloader()
                // update the isDoneAnimating state to prevent
                // reanimating on page transitions
                SetAppState.setSessionState({ 
                  isDoneAnimating: true,
                  isFirstTime: false
                })
              }}
              className="pre-loader-wrapper">
              <div className="pre-loader-overflow content-center">
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
          </div>) : null 
      )}
    </AnimatePresence>
  );
}
