import React from 'react';
import ButtonLink from '../../../components/GlobalComponents/ButtonLink'

export default function NextPrev({data}) {

  const link = (d) => {
    return (
      <div className="proj-next-wrapper">
        <div className="proj-next-img">
          <img src={d.image.link} 
            alt={d.image.alt}/>
        </div>
        <div className="proj-next-link">
          <span className='font-2 s3b'>{d.subj}</span>
          <h4 className='font-1 s3a'>{d.title}</h4>
          <div className="proj-next-btn">
            <ButtonLink data={d.btnlink}/>
          </div>
        </div>
      </div>
    )
  }

  return (
      <section className='project-next content-center'>
        { data.prev ? link(data.prev) : null }
        { data.next ? link(data.next) : null }
      </section>
  );
}
