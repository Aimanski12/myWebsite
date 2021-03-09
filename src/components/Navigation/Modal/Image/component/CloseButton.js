import React, {useContext} from 'react';
import {motion} from 'framer-motion'

import {AppData} from '../../../../../context'
import {Anim} from '../../../../../utils/animations'

import Svg from '../../../../Svgs'

export default function CloseButton({btn}) {
  const {SetAppState} = useContext(AppData)

  const click = () => {
    if(btn === 'image') {
      SetAppState.setImageModalState({ isOpen: false, current: 0, images: {} })
    }
    if(btn === 'message') {
      SetAppState.setMessageModalState({isOpen: false})
    }
  }

  return (
    <div className="modal-svg-wrapper">
      <motion.button  
        className='content-center'
        onClick={()=> {
          click()
          Anim.Helpers.hidshowbody('auto')
        }}
        whileHover={Anim.ImageModalAnim.rotateBtn} >
        <Svg svg='close'/>     
      </motion.button>
    </div> 
  );
}
