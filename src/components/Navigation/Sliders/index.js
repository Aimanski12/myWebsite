import React, {useContext} from 'react';
import {Anim} from '../../../utils/animations'
import {AppData} from '../../../context'
import {motion} from 'framer-motion'

export default function Sliders() {
  const {AppState} = useContext(AppData)

  return (
    <>
      { AppState.sessionData.isChecked ? 
        <div className="front-slider">
          <motion.div 
            variants={
              Anim.TransitionSliders.frontslider(
                AppState.sessionData.isFirstTime, 
                AppState.sessionData.isDoneAnimating)} 
              initial="initial" 
              animate="animate" 
              onAnimationStart={()=>Anim.Helpers.hidshowbody('auto')}
              onAnimationComplete={()=>Anim.Helpers.removeintroslider()}
              className="front-slider-wrapper">
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
