import React from 'react';

export default function Platform({data}) {
  return (
    <div className="project-detail-wrapper project-platform">
      <div className="platform-wrapper">
        { data.map((p, i)=>{
          return (
            <div key={i}>
              <h3 className="font-2 s2b">{p.name}</h3>
              <span className='font-2 s4b'>{p.desc}</span>
            </div>
          )}
        )}
      </div>
    </div>
  );
}
