import React, {useContext} from 'react';
import {AppData} from '../../../context'
import Fade from 'react-reveal/Fade'

export default function Designs({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="project-detail-wrapper sketch">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
      </Fade>
      <div className="sketch-wrapper">
        <Fade bottom>
          <div className="design-images">
            <img className='proj-img'
              onClick={()=> {
              SetAppState.setImageModalState({
                isOpen: true, isSingle: true, images: data.images }) }}
              src={data.images.link} alt={data.images.alt} />
          </div>
        </Fade>
        <ul>
          { data.details.map((s, i) => {
            return ( 
              <Fade bottom key={i}>
                <li className='font-2 s4b'>{s}</li> 
              </Fade>)
            }) 
          }
        </ul>
      </div>
    </div>
  );
}
