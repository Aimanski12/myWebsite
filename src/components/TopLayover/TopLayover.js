import React, {useContext} from 'react'
import {StateContext} from '../../utils/context/stateContext'
import BrandLogo from '../Svgs/BrandLogo/BrandLogo'
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
          <BrandLogo colorMode={'#1B87D6'}/>
        </motion.div>
    </motion.div> 
  )
}

export default TopLayover
