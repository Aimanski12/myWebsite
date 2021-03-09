import React from 'react';
import Fade from 'react-reveal/Fade'

export default function Technology({data}) {
  return (
    <Fade bottom>
      <div className="project-detail-wrapper tech-used">
        <h3 className='font-2 s2b'>Technologies Used</h3>
        <div className="tech-used-wrapper">
          { data.map((tech, i) => {
            return (
              <div 
                className='content-center'
                key={i} >
                <span className='font-2 s5b'>{tech}</span>
              </div>
            )}
          )}
        </div>
      </div>
    </Fade>
  );
}
