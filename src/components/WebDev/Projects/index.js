import React from 'react';
import Link from 'next/link'
import Svg from '../../Svgs'

export default function Projects({projects}) {
  const data = projects[0].banner
  console.log(data)

  return (
    <article className="featured-project content-center">

        <figure>
          <img src={data.image.link} alt={data.image.alt}/>
        </figure>

        <div className="featured-project-content">

          <h2>{data.title}</h2>
          <p>{data.description}</p>

          
          <div className="project-com">
            <ul>
              <li className='content-center'>
                <Svg svg={data.features[0].svg}/>{data.features[0].text}
              </li>
              <li className='content-center'>
                <Svg svg={data.features[1].svg}/>{data.features[1].text}
              </li>
              <li className='content-center'>
                <Svg svg={data.features[2].svg}/>{data.features[2].text}
              </li>
            </ul>
          </div>



          <div className="featured-project-btn">

            <div className="project-com-btn">
              <Link href={data.buttonLink.link}>
                <a>{data.buttonLink.text}</a>
              </Link>
            </div>

          </div>



        </div>

    </article>
  );
}
{/* <source 
  data-srcset="/me-1-lg.7c409393.webp 850w,/me-1-md.ed6ccaba.webp 600w,/me-1-sm.c463fd93.webp 350w" 
  sizes="25vw" type="image/webp" 
  srcset="/me-1-lg.7c409393.webp 850w,/me-1-md.ed6ccaba.webp 600w,/me-1-sm.c463fd93.webp 350w" /> */}