import React from 'react';
import Svg from '../../Svgs'

export default function SocialIcons({svg, front, back}) {
  return (
    <div className="social-icon">
      <div className="icon-front" style={{backgroundColor: back}}>
        <div className="contents">
          <Svg 
            fill={front}
            svg={svg} />
        </div>
      </div>
      <div className="icon-back" style={{backgroundColor: front}}>
        <div className="contents">
          <Svg 
            fill={back}
            svg={svg} />
        </div>
      </div>
    </div>
  );
}
