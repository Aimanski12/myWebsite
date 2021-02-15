import React, {useContext, useEffect} from "react";
import {AppData} from '../../../context'
import Figure from './Image/component/Figure'
import CloseButton from './Image/component/CloseButton'

import {Anim} from '../../../utils/animations/'

export default function Single () {
  const {AppState, SetAppState} = useContext(AppData)

  function closeModal(e) {
    if(e.key === 'Escape') {
      Anim.Helpers.hidshowbody('auto')
      SetAppState.setModalState({ isOpen: false, current: 0, images: {} })
    }
  }
  
  useEffect(()=>{
    // event listener when key is pressed
    window.addEventListener('keydown', (e)=>closeModal(e))
    return () => window.removeEventListener('keydown', closeModal)
  }, [])


  return (
    <div className="modal-image-wrapper content-center">
      <Figure img={AppState.modal.images}/>
      <CloseButton />
    </div>
  );
};
