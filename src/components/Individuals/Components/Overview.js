import React from 'react';
import Fade from 'react-reveal/Fade'

export default function OverView({data}) {

  return (
    <div className="project-detail-wrapper project-overview">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
        {data.text.map((t, i) => {
          return ( 
            <p 
              className='font-2 s4b' 
              key={i}>{t}</p> )
        })}
      </Fade>
    </div>
  );
}
