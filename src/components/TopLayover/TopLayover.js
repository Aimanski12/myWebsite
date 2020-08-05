import React, {useEffect, useContext} from 'react'
import {StateContext} from '../../utils/context/stateContext'
import BrandLogo from '../Svgs/BrandLogo/BrandLogo'
import {introAnim, openTopLayer, closeTopLayer} from '../../utils/pageanimations/toplayover/toplayover'
import {checkforsession} from '../../utils/sessiondata/sessionStorage'
import {motion} from 'framer-motion'
import {topAnim, logoAnim} from '../../utils/pageanimations/motion/toplayer'


const TopLayover = () =>{
  const {state} = useContext(StateContext)

  

  return (
    <motion.div 
      variants={topAnim}
      initial={state.isTransitioning}
      animate={state.animation}
      exit={state.exitMode}
      className="content-center top-layover">
        <motion.div 
          variants={logoAnim}
          initial={state.isTransitioning}
          animate={state.animation}
          exit={state.exitMode}
          className="top-layover-logo content-center">
          <BrandLogo colorMode={'#E3E1C3'}/>
        </motion.div>
    </motion.div> 
  )
}

export default TopLayover
