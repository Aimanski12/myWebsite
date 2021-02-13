import React from 'react';
import Svg from '../../../../Svgs'
import {Anim} from '../../../../../utils/animations'
import {motion} from 'framer-motion'

export default function Arrows({left, right}) {
  return (
    <>
      <motion.div 
        whileHover={Anim.ModalAnimation.hoverRight}
        whileTap={{ scale: 0.9 }}
        className="modal-next-btn" onClick={right}>
        <Svg svg='chevright'/>
      </motion.div>
      <motion.div 
        whileHover={Anim.ModalAnimation.hoverLeft}
        whileTap={{ scale: 0.9 }}
        className="modal-prev-btn" onClick={left}>
        <Svg svg='chevleft'/>
      </motion.div>
    </>
  );
}
