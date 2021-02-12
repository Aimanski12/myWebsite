import React from 'react';
import Copyright from '../../GlobalComponents/Copyright'
import {Anim} from '../../../utils/animations'
import {motion} from 'framer-motion'

export default function CopyRight() {
  return (
    <div className="menu-copyright">
      <motion.div 
        variants={Anim.MenuButton.showCopyRight}
        className="menu-copyright-wrapper font-1">
        <Copyright />
      </motion.div>
    </div>
  );
}
