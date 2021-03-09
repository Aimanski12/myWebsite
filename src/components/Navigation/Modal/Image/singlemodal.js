import React, {useContext, useEffect} from "react";

import {Anim} from '../../../../utils/animations'
import {AppData} from '../../../../context'

import CloseButton from './component/CloseButton'
import Figure from './component/Figure'

export default function Single () {
  const {AppState, SetAppState} = useContext(AppData)

  function closeModal(e) {
    if(e.key === 'Escape') {
      Anim.Helpers.hidshowbody('auto')
      SetAppState.setImageModalState({ 
        current: 0, 
        images: {}, 
        isOpen: false, 
      })
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
      <CloseButton btn='image'/>
    </div>
  );
};
