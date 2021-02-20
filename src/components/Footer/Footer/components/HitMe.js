import React from 'react';
import Icons from '../../../GlobalComponents/SocialIcons'

export default function HitMe({data}) {
  return (
    <div className="hit-me font-1">
      <h3 className='s3a'>{data.title}</h3>
      <ul>
        { data.socials.icons.map((icon, i) =>{
            return (
              <li key={i}>
                <a href={icon.link} target='_blank' rel="noreferrer noopener">
                  <span className='svg-wrapper'>
                    <Icons svg={icon.svg} 
                      front={data.socials.front} 
                      back={data.socials.back}/>
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
