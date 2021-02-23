import React from 'react';

export default function OverView({data}) {

  return (
    <div className="project-detail-wrapper project-overview">
      <h3 className='font-2 s2b'>{data.title}</h3>
      {data.text.map((t, i) => {
        return ( <p className='font-2 s4b' key={i}>{t}</p> )
      })}
    </div>
  );
}
