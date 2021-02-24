import React, {Fragment} from 'react';
import Image from './components/Image'
import Features from './components/Features'
import ButtonLink from '../../../GlobalComponents/ButtonLink'

export default function WebDev({projects}) {

  const data = projects.map((p, i) => {
    const proj = p.banner
    return (
      <Fragment key={i}>
        <article className={`featured-project header-wrapper content-center 
          ${i%2 === 1 ? 'row-reverse' : ''}`}>
            <Image data={proj}/>
            <div className="featured-project-content">
              <div className="project-content-wrapper content-center">
                <h2 className='font-1 s2a'>{proj.title}</h2>
                <p className='font-1 s6a'>{proj.description}</p>
                <Features feature={proj.features} />
                <div className='featured-btn-wrapper'>
                  <ButtonLink data={proj.buttonLink}/>
                </div>
              </div>
            </div>
        </article>
        <hr/>
      </Fragment>
    )
  })

  return (
    <>{data}</>
  );
}

