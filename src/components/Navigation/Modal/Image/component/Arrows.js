import React from 'react';
import {motion} from 'framer-motion'

import Svg from '../../../../Svgs'
import {Anim} from '../../../../../utils/animations'

export default function Arrows({left, right}) {
  return (
    <>
      <motion.div 
        className="modal-next-btn" 
        onClick={right}
        whileHover={Anim.ImageModalAnim.hoverRight}
        whileTap={{ scale: 0.9 }}>
        <Svg svg='chevright'/>
      </motion.div>
      <motion.div 
        className="modal-prev-btn" 
        onClick={left}
        whileHover={Anim.ImageModalAnim.hoverLeft}
        whileTap={{ scale: 0.9 }}>
        <Svg svg='chevleft'/>
      </motion.div>
    </>
  );
}
