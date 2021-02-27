import React from 'react';
import Technology from './components/Technology';
import Education from './components/Education'
import SeeProj from './components/SeeProj'
import WebLinks from '../GlobalComponents/WebLinks'
import Fade from 'react-reveal'

export default function KnowMore({data}) {

  return (
    <>
      <section className='tech-main'>
        <div className="tech-main-wrapper">
          <div className="tech-main-header">
            <Fade bottom>
              <h2 className='font-1 s3a'>{data.technology.title}</h2>
              <span className='font-2 s4b'>{data.technology.caption}</span>
            </Fade>
          </div>
          <Technology data={data.technology.tools.creative}/>
          <hr/>
          <Technology data={data.technology.tools.frontend}/>
          <hr/>
          <Technology data={data.technology.tools.backend}/>
        </div>
      </section>
      <Education data={data.education}/>
      <SeeProj data={data.seeProj} />
      <WebLinks data={data.hireMeLink}/>
    </>
  );
}

