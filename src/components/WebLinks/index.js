import React from 'react';
import ButtonLink from '../GlobalComponents/ButtonLink'

export default function WebLinks({data}) {
  
  return (
    <section className="weblinks-container">
      <h2 className='font-1 s3a'>{data.title}</h2>
      <p className='font-2 s4b'>{data.caption}</p>
      <div className="asd">

      <div className="weblink-btn-wrapper">
        <div className="weblink-tranform">
          <ButtonLink data={data.buttonLink} />
        </div>
      </div>
      </div>
    </section>
    
  );
}
