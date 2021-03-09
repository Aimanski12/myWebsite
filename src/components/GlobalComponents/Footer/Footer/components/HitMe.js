import React from 'react';

import Icons from '../../../SocialIcons'

export default function HitMe({data}) {
  return (
    <div className="hit-me font-1">
      <h3 className='s3a'>{data.title}</h3>
      <ul>
        { data.socials.icons.map((icon, i) =>{
            return (
              <li key={i}>
                <a 
                  href={icon.link} 
                  rel="noreferrer noopener"
                  target='_blank' >
                  <span className='svg-wrapper'>
                    <Icons 
                      back={data.socials.back}
                      front={data.socials.front} 
                      svg={icon.svg} />
                    </span>
                    <span className='s7a'>{icon.name}</span>
                </a>
              </li>
            )
          }) }
      </ul>
    </div>
  );
}
