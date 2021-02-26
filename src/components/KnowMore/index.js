import React from 'react';
import {motion} from 'framer-motion'
import Technology from './components/Technology';

export default function KnowMore({data}) {

  console.log(data)
  return (
    <>
      <section className='tech-main'>
        <div className="tech-main-wrapper">
          <div className="tech-main-header">
            <h2 className='font-1 s3a'>{data.technology.title}</h2>
            <span className='font-2 s4b'>{data.technology.caption}</span>
          </div>
          <Technology data={data.technology.tools.creative}/>
          <hr/>
          <Technology data={data.technology.tools.frontend}/>
          <hr/>
          <Technology data={data.technology.tools.backend}/>
        </div>
      </section>
    </>
  );
}

