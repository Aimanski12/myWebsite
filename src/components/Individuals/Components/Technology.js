import React from 'react';

export default function Technology({data}) {
  return (
    <div className="project-detail-wrapper tech-used">
      <h3 className='font-2 s2b'>Technologies Used</h3>
      <div className="tech-used-wrapper">
        { data.map((tech, i) => {
          return (
            <div key={i} className='content-center'>
              <span className='font-2 s5b'>{tech}</span>
            </div>
            
          )}
        )}
      </div>
    </div>
  );
}
