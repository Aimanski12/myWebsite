import React from 'react';
import ButtonLink from '../../GlobalComponents/ButtonLink'
import Fade from 'react-reveal/Fade'

export default function Links({data}) {

  const links = data.buttonLink.map((link, i) => {
    return (
      <Fade bottom key={i}>
        <div className="project-btn">
          <ButtonLink data={link}/>
        </div> 
      </Fade>
      )
    })

  return (
    <div className="project-detail-wrapper sketch">
      <Fade bottom>
        <h3 className='font-2 s2b'>{data.title}</h3>
        <p className='font-2 s4b'>{data.caption}</p>
      </Fade>
      <div className="project-links">
        <div className="project-links-wrapper">
          {links}
        </div>
      </div>
    </div>
  );
}
