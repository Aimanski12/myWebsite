import React from 'react';
import Svg from '../../../../Svgs'
import Fade from 'react-reveal/Fade'

export default function Features({feature}) {

  const features = feature.map((f, i) => {
    return (
      <Fade bottom key={i}>
        <li className='content-center'>
          <Svg svg={f.svg}/>{f.text}
        </li>
      </Fade>
    )
  })

  return (
    <div className="project-com font-2 s4b">
      <ul>{features}</ul>
    </div>
  );
}
