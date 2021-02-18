import React, {useEffect} from 'react';
import {Anim} from '../../../utils/animations'
import Svg from '../../Svgs'

export default function ArtWorkSingle({art}) {
  useEffect(()=>{
    Anim.Helpers.tiltImage(".featured-artwork figure", 35)
  })

  return (
    <section className="featured-artwork content-center"
      style={{background: art.background}}>
        <figure>
          <img src={art.image} alt={art.alt}/>
        </figure>
        <div className="art-link-caption font-1 s7a">
          <a href={art.link} 
            target='_blank' rel="noreferrer noopener"
            className='content-center'>
            <span>View artwork on:</span>
            <Svg svg='coloredinsta'/>
          </a>
        </div>  
    </section>
  );
}
