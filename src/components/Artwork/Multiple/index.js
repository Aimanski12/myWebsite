import React, {useEffect} from 'react';
import {Anim} from '../../../utils/animations'
import Svg from '../../Svgs'

export default function ArtworkAll({data}) {

  useEffect(()=>{
    Anim.Helpers.tiltImage(".art-img img", 35)
  })
  
  const images = data.map((img, l) => {
    return (
    <div key={l}>
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
      <div className="art-img content-center"
        style={{background: `${img.background}center` }}>
          <img src={img.image} alt={img.alt}/>
        {/* <div className="art-img-wrapper" 
          style={{backgroundImage: `url(${img.image})` }}></div> */}
      </div>
    </div>
    )
  })

  return (
    <section className='all-artwork'>
      {images}
      {/* <div className='art-desc content-center'>
        <h2 className='font-1 s3a'>{img.name}</h2>
        <p className='font-2 s3b'>{img.desc}</p>
        <a href={img.link} 
          target='_blank' rel="noreferrer noopener"
          className='content-center'>
          <span className='font-1 s7a'>View artwork on:</span>
          <Svg svg='coloredinsta'/>
        </a>
      </div>
      <div className="art-img content-center"
        style={{background: `${img.background} fixed center` }}>
        <div className="art-img-wrapper" 
          style={{backgroundImage: `url(${img.image})` }}></div>
      </div> */}
    </section>
  );
}
