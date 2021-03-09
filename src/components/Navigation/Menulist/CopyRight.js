import React from 'react';
import {motion} from 'framer-motion'

import {Anim} from '../../../utils/animations'
import Copyright from '../../GlobalComponents/Copyright'

export default function CopyRight() {
  return (
    <div className="menu-copyright">
      <motion.div 
        className="menu-copyright-wrapper font-1"
        variants={Anim.MenuButton.showCopyRight} >
        <Copyright />
      </motion.div>
    </div>
  );
}
