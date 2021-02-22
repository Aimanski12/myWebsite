import React from 'react';


export default function GithubProj({data}) {

  const list = data.proj.map((p, i) => {
    return (
      <li key={i} className='content-center font-2 s4b'>
        <span className='number'>#{p.no}</span>
        <a href={p.link} 
           target='_blank' rel="noreferrer noopener"
          className='content-center'>
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
    )
  })

  return (
    <section className='github-projects content-center'>
      <h2 className='font-1 s3a'>{data.title}</h2>
      <p className='font-2 s4b'>{data.caption.caption1}
        <a 
          target='_blank' rel="noreferrer noopener"
          href={data.caption.url.link}> {data.caption.url.title} </a>
          {data.caption.caption2}</p>

      <ul>
        {list}
      </ul>
    </section>
  );
}
