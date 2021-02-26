import React from 'react';

export default function Facts({data, dir}) {
  return (
    <article className='profile-facts'>
      <div className={`profile-facts-wrapper content-center ${dir}`}>
        <img src={data.image.link} alt={data.image.alt}/>
        <div className="profile-facts-desc">
          <h2 className='font-1 s3a'>{data.title}</h2>
          <p className='font-2 s4b'>{data.caption}</p>
        </div>
      </div>
    </article>
  );
}
