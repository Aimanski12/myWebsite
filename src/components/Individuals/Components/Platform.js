import React from 'react';
import Fade from 'react-reveal/Fade'

export default function Platform({data}) {
  return (
    <div className="project-detail-wrapper project-platform">
      <div className="platform-wrapper">
        { data.map((p, i)=>{
          return (
            <Fade bottom key={i}>
              <div>
                <h3 className="font-2 s2b">{p.name}</h3>
                <span className='font-2 s4b'>{p.desc}</span>
              </div>
            </Fade>
          )}
        )}
      </div>
    </div>
  );
}
