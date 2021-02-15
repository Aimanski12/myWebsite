import React from 'react';
import Svg from '../../Svgs'

export default function SocialIcons({svg, front, back}) {
  return (
    <div className="social-icon">
      <div className="icon-front" style={{backgroundColor: back}}>
        <div className="contents">
          <Svg svg={svg} fill={front}/>
        </div>
      </div>
      <div className="icon-back" style={{backgroundColor: front}}>
        <div className="contents">
          <Svg svg={svg} fill={back}/>
        </div>
      </div>
    </div>
  );
}
