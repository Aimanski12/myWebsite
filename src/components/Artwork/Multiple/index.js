import React, {Fragment, useEffect} from 'react';
import {Anim} from '../../../utils/animations'
import Svg from '../../Svgs'

export default function ArtworkAll({data}) {

  useEffect(() => {
    Anim.Helpers.tiltImage('.art-img-wrapper img', 35)
  })

  console.log(data)
  const images = data.map((img, l) => {
    return (
    <Fragment key={l}>
      <div className='art-desc content-center'>
        <h2 className='font-1 s3a'>{img.name}</h2>
        <p className='font-2 s3b'>{img.desc}</p>
        <a href={img.link} 
          target='_blank' rel="noreferrer noopener"
          className='content-center'>
          <span className='font-1 s7a'>View artwork on:</span>
          <Svg svg='coloredinsta'/>
        </a>
      </div>

      <div className="art-img">
        <div className="art-img-wrapper content-center" style={{background: img.background}}>
          <img src={img.image} alt={img.alt}/>
        </div>
      </div>
    </Fragment>
    )
  })

  return (
    <section className='all-artwork'>
      {images}
    </section>
  );
}

