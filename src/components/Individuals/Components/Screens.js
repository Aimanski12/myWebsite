import React, {useContext} from 'react';
import {AppData} from '../../../context'
import Fade from 'react-reveal'

export default function Designs({data}) {
  const {SetAppState} = useContext(AppData)

  return (
    <div className="project-detail-wrapper screens">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
      </Fade>
        { data.images.map((img, i) => {
          return (
            <Fade bottom key={i}>
              <div>
                <img className='proj-img'
                  onClick={()=> {
                    SetAppState.setImageModalState({
                    isOpen: true, isSingle: false, current: i, images: data.images })
                  }} src={img.link} alt={img.alt} key={i}/>
              </div>
            </Fade>
            )
          })
        }
    </div>
  );
}
