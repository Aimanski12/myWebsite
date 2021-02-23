import React from 'react';

export default function Parallax({data}) {
  return (
    <div className="project-detail-wrapper project-parallax"
      style={{background: data.background}}>
      <div className="parallax-img"
        style={{backgroundImage: `url(${data.image.link})`}}></div>
    </div>
  );
}
