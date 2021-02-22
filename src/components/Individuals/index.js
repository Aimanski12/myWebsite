import React from 'react';
import Overview from './OverView'

export default function Details({data}) {
  console.log(data)

  return (
    <article className='project-details content-center'>
      <Overview data={data.overview}/>

      <div className="project-detail-wrapper project-platform">
        <div className="platform-wrapper">
          { data.platforms.map((p, i)=>{
            return (
              <div key={i}>
                <h3 className="font-2 s2b">{p.name}</h3>
                <span className='font-2 s4b'>{p.desc}</span>
              </div>
            )}
          )}
        </div>
      </div>

      <div className="project-detail-wrapper tech-used">
        <h3 className='font-2 s2b'>Techonoliges Used</h3>
        <div className="tech-used-wrapper">
          { data.technologies.map((tech, i) => {
            return (
              <div key={i} className='content-center'>
                <span className='font-2 s5b'>{tech}</span>
              </div>
              
            )}
          )}
        </div>
      </div>

    </article>
  );
}
