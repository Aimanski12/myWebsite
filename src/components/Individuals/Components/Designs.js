import React, {useContext} from 'react';
import {AppData} from '../../../context'

export default function Designs({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="project-detail-wrapper sketch">
      <h3 className='font-2 s2b'>{data.title}</h3>
      <div className="sketch-wrapper">
        <div className="design-images">
          <img 
            className='proj-img'
            onClick={()=> {
            SetAppState.setImageModalState({
              isOpen: true, isSingle: true, images: data.images }) }}
            src={data.images.link} alt={data.images.alt} />
        </div>
        <ul>
          { data.details.map((s, i) => {
            return ( <li className='font-2 s4b' key={i}>{s}</li> ) }) 
          }
        </ul>
      </div>
    </div>
  );
}
