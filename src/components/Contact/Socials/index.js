import React from 'react';
import Icons from '../../GlobalComponents/SocialIcons'

export default function Socials({data}) {

  const socialIcons = data.icons.icons.map((a, i) => {
    return (
      <a 
        href={a.link} 
        key={i}
        rel="noreferrer noopener"
        target='_blank'>
        <Icons 
          back={data.icons.back}
          front={data.icons.front} 
          svg={a.svg} />
      </a>
    )
  })
  return (
    <section className="contact-socials">
      <h2 className='font-1 s3a'>{data.title}</h2>
      <p className='font-2 s4b'>{data.caption}</p>
      <div className="contact-icons content-center">
        {socialIcons}
      </div>
    </section>
  );
}
