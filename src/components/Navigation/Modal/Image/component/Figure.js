import React from 'react';
import {Anim} from '../../../../../utils/animations'

export default function Figure({img}) {
  const figure = () => {
    if(Object.keys(img).length > 0) {
      return (
        <>
          <figure 
            onMouseMove={(e)=>Anim.Helpers.zoomFigureImage(e)}
            className="modal-image content-center"
            style={{
              backgroundImage: `url(${img.link})`}}>
            <img src={img.link} alt={img.alt}/>
          </figure>
          <div className="image-caption content-center">
            <h4 className='font-1 s4a'>{img.name}</h4>
            <span className='font-2 s4b'>{img.description}</span>
          </div>
        </>)
      } 
    }
  
  return (
    <>
      {figure()}
    </>
  );
}
