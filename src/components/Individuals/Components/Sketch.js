import React, {useContext} from 'react';
import {AppData} from '../../../context'

export default function Sketch({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="project-detail-wrapper sketch">
      <h3 className='font-2 s2b'>{data.title}</h3>
      <div className="sketch-wrapper">
        <div className="sketch-images">
          {data.images.map((img, i) => {
            return (
              <img 
                className='proj-img'
                onClick={()=> {
                  SetAppState.setImageModalState({
                      isOpen: true, isSingle: false,
                      current: i, images: data.images })
                  }} src={img.link} alt={img.alt} key={i}/> )
          })}
        </div>
        <ul>
          { data.details.map((s, i) => {
            return (
              <li className='font-2 s4b' key={i}>{s}</li> )
            })
          }
        </ul>
      </div>
    </div>
  );
}
