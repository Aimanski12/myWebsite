import React from 'react';
import ButtonLink from '../../GlobalComponents/ButtonLink'

export default function Links({data}) {

  const links = data.buttonLink.map((link, i) => {
    return (
      <div className="project-btn" key={i}>
        <ButtonLink data={link}/>
      </div> )
    })

  return (
    <div className="project-detail-wrapper sketch">
      <h3 className='font-2 s2b'>{data.title}</h3>
      <p className='font-2 s4b'>{data.caption}</p>
      <div className="project-links">
        <div className="project-links-wrapper">
          {links}
        </div>
      </div>
    </div>
  );
}
