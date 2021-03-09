import React, {useContext} from 'react';
import Fade from 'react-reveal/Fade'

import {AppData} from '../../../context'

export default function Sketch({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="project-detail-wrapper sketch">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
      </Fade>
      <div className="sketch-wrapper">
        <Fade bottom>
          <div className="sketch-images">
            {data.images.map((img, i) => {
              return (
                <img 
                  alt={img.alt} 
                  key={i}
                  className='proj-img'
                  onClick={()=> {
                    SetAppState.setImageModalState({
                        current: i, 
                        images: data.images,
                        isOpen: true, 
                        isSingle: false,
                      })
                    }} 
                  src={img.link} /> 
                )
              }
            )}
          </div>
        </Fade>
        <ul>
          { data.details.map((s, i) => {
            return (
              <Fade bottom key={i}>
                <li className='font-2 s4b'>{s}</li>
              </Fade> )
            })
          }
        </ul>
      </div>
    </div>
  );
}
