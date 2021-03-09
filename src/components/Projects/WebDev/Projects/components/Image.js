import React, {useEffect, useContext} from 'react';
import {Anim} from '../../../../../utils/animations'
import {AppData} from '../../../../../context'
import Fade from 'react-reveal/Fade'

export default function Image({data}) {
  const {SetAppState} = useContext(AppData)
  useEffect(() => {
    Anim.Helpers.tiltImage(".project-image-wrapper", 8)
  })

  return (
    <Fade bottom>
      <figure>
        <div className="project-image-wrapper">
          <img 
            alt={data.image.alt}
            onClick={()=> SetAppState.setImageModalState({
              images: data.image,
              isOpen: true,
              isSingle: true,
            })}
            src={data.image.link} />
        </div>
      </figure>
    </Fade>
  );
}
