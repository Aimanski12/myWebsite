import React from 'react';
import Fade from 'react-reveal/Fade'

export default function Api({data}) {

  return (
    <div className="project-detail-wrapper project-api">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
        <p className='font-2 s4b'>{data.before} 
          <a href={data.link} 
            target='_blank' rel="noreferrer noopener"> {data.name} </a> {data.after}</p>
      </Fade>
    </div>
  );
}
