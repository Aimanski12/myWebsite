import React, {useContext} from 'react';
import {AppData} from '../../../../../context'
import {Anim} from '../../../../../utils/animations'
import Svg from '../../../../Svgs'
import {motion} from 'framer-motion'

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
        whileHover={Anim.ImageModalAnim.rotateBtn}
        onClick={()=> {
          click()
          Anim.Helpers.hidshowbody('auto')
        }}
        className='content-center'>
        <Svg svg='close'/>     
      </motion.button>
    </div> 
  );
}
