import React from 'react';
import Projects from './Projects'

export default function WebDev({data, title}) {
  
  return (
    <section className="webdev-wrapper content-center">
      { title ? <>
        <h2 className="webdev-title font-1 s3a">{data.title}</h2>
        <p className='webdev-caption font-2 s4b'>{data.caption}</p>
      </> : null }
      <Projects projects={data.projects}/>
    </section>
  );
}
