import React, {useEffect, useContext} from 'react';
import {Anim} from '../../../../utils/animations'
import {AppData} from '../../../../context'

export default function Image({data}) {
  const {SetAppState} = useContext(AppData)
  useEffect(() => {
    Anim.Helpers.tiltImage(".project-image-wrapper", 8)
  })

  return (
    <figure>
      <div className="project-image-wrapper">
        <img 
          onClick={()=> SetAppState.setImageModalState({
            isOpen: true,
            isSingle: true,
            images: data.image
          })}
          src={data.image.link} alt={data.image.alt}/>
      </div>
    </figure>
  );
}
