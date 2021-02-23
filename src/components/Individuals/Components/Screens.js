import React, {useContext} from 'react';
import {AppData} from '../../../context'

export default function Designs({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="project-detail-wrapper screens">
      <h3 className='font-2 s2b'>{data.title}</h3>
        { data.images.map((img, i) => {
          return (
            <img 
              className='proj-img'
              onClick={()=> {
                SetAppState.setImageModalState({
                  isOpen: true, isSingle: false,
                  current: i, images: data.images })
              }}
              src={img.link} alt={img.alt} key={i}/>
            )
          })
        }
    </div>
  );
}
