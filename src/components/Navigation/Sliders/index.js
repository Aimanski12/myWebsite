import React, {useContext} from 'react';
import {motion} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'

export default function Sliders() {
  const {AppState} = useContext(AppData)

  return (
    <>
      { AppState.sessionData.isChecked ? 
        <div className="front-slider">
          <motion.div 
            animate="animate" 
            className="front-slider-wrapper"
            initial="initial" 
            onAnimationComplete={()=>Anim.Helpers.removeintroslider()}
            onAnimationStart={()=>Anim.Helpers.hidshowbody('auto')}
            variants={
              Anim.TransitionSliders.frontslider(
                AppState.sessionData.isFirstTime, 
                AppState.sessionData.isDoneAnimating)} >
            <div className="front-slider-content content-center">
              <span className='font-1 s5a'>aiman adlawan</span>
            </div>  
          </motion.div>
        </div> : null }

      <div className="back-slider">
        <div className="back-slider-wrapper">
          <div className="back-slider-content content-center">
            <span className='font-1 s5a'>aiman adlawan</span>
          </div>  
        </div>
      </div>
    </>
  );
}
