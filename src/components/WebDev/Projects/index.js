import React from 'react';
import Image from './components/Image'
import Features from './components/Features'
import ButtonLink from '../../GlobalComponents/ButtonLink'

export default function Projects({projects}) {

  const data = projects.map((p, i) => {
    const data = p.banner
    return (
      <article 
        className={`featured-project header-wrapper content-center ${i%2 === 1 ? 'row-reverse' : ''}`} key={i}>

          <Image data={data}/>
          <div className="featured-project-content">
            <div className="project-content-wrapper content-center">
              <h2 className='font-1 s2a'>{data.title}</h2>
              <p className='font-1 s6a'>{data.description}</p>

              <Features feature={data.features} />

              <div className='featured-btn-wrapper'>
                <ButtonLink data={data.buttonLink}/>
              </div>

            </div>
          </div>
      </article>
    )
  })

  return (
    <>{data}</>
  );
}

