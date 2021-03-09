import React from 'react';
import Fade from 'react-reveal/Fade'

import ButtonLink from '../ButtonLink'

export default function WebLinks({data}) {
  
  return (
    <section className="weblinks-container">
      <Fade bottom>
        <h2 className='font-1 s3a'>{data.title}</h2>
        <p className='font-2 s4b'>{data.caption}</p>
      </Fade>

      <Fade bottom>
        <div className="asd">
          <div className="weblink-btn-wrapper">
            <div className="weblink-tranform">
              <ButtonLink data={data.buttonLink} />
            </div>
          </div>
        </div>
      </Fade>
    </section>
    
  );
}
