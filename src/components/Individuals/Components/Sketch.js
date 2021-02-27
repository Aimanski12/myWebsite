import React, {useContext} from 'react';
import {AppData} from '../../../context'
import Fade from 'react-reveal/Fade'

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
                  key={i}
                  className='proj-img'
                  onClick={()=> {
                    SetAppState.setImageModalState({
                        isOpen: true, isSingle: false,
                        current: i, images: data.images })
                    }} src={img.link} alt={img.alt} key={i}/> )
            })}
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
