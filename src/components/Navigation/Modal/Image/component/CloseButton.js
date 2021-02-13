import React, {useContext} from 'react';
import {AppData} from '../../../../../context'
import {Anim} from '../../../../../utils/animations'
import Svg from '../../../../Svgs'
import {motion} from 'framer-motion'

export default function CloseButton() {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="modal-svg-wrapper">
      <motion.button  
        whileHover={Anim.ModalAnimation.rotateBtn}
        onClick={()=> {
          Anim.Helpers.hidshowbody('auto')
          SetAppState.setModalState({ isOpen: false, current: 0, images: {} })
        }}
        className='content-center'>
        <Svg svg='close'/>     
      </motion.button>
    </div> 
  );
}
