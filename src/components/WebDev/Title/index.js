import React from 'react';

export default function Title({data}) {
  return (
    <div className="featured-webdev-title content-center">
      <h2 className='font-1 s2a'>{data.title}</h2>
      <p className='font-2 s4b'>{data.caption}</p>
    </div>
  );
}
