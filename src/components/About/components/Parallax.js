import React from 'react';

export default function Parallax({data}) {
  return (
    <section className='profile-img-parallax'>
      <div className="profile-img" 
        style={{backgroundImage: `url(${data.link})`}}></div>
    </section>
  );
}
