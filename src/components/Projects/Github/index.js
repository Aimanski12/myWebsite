import React from 'react';
import Fade from 'react-reveal/Fade'

export default function GithubProj({data}) {

  const list = data.proj.map((p, i) => {
    return (
      <Fade bottom key={i}>
        <li className='content-center font-2 s4b'>
          <span className='number'>#{p.no}</span>
          <a 
            className='content-center'
            href={p.link} 
            rel="noreferrer noopener"
            target='_blank' >
            <div className="folder">
              <div className="folder__back">
                <div className="paper"></div>
                <div className="folder__front"></div>
                <div className="folder__front right"></div>
              </div>
            </div>
            <span className='proj-title'>{p.title}</span>
          </a>
        </li>
      </Fade>
    )
  })

  return (
    <section className='github-projects content-center'>
      <Fade bottom>
        <h2 className='font-1 s3a'>{data.title}</h2>
        <p className='font-2 s4b'>{data.caption.caption1}
          <a 
            href={data.caption.url.link}
            rel="noreferrer noopener"
            target='_blank' > {data.caption.url.title} </a>
            {data.caption.caption2}</p>
      </Fade>

      <ul>
        {list}
      </ul>
    </section>
  );
}
