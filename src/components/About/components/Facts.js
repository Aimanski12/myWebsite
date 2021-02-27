import React from 'react';
import Fade from 'react-reveal/Fade'

export default function Facts({data, dir}) {
  return (
    <article className='profile-facts'>
      <div className={`profile-facts-wrapper content-center ${dir}`}>
        <Fade bottom>
          <img src={data.image.link} alt={data.image.alt}/>
        </Fade>
        <div className="profile-facts-desc">
          <Fade bottom>
            <h2 className='font-1 s3a'>{data.title}</h2>
            <p className='font-2 s4b'>{data.caption}</p>
          </Fade>
        </div>
      </div>
    </article>
  );
}
