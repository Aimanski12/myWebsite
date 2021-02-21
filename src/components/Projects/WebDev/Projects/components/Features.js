import React from 'react';
import Svg from '../../../../Svgs'

export default function Features({feature}) {

  const features = feature.map((f, i) => {
    return (
      <li className='content-center' key={i}>
        <Svg svg={f.svg}/>{f.text}
      </li>
    )
  })

  return (
    <div className="project-com font-2 s4b">
      <ul>{features}</ul>
    </div>
  );
}
